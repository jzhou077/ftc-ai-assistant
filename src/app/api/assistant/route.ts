import { AssistantResponse } from 'ai';
import { OpenAI } from 'openai';

import { createClient } from '@supabase/supabase-js';

import { getUserId } from '../../(auth)/actions';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  if (input.threadId == null) {
    const { data, error } = await supabase.from('conversations').insert({
      user_id: await getUserId(),
      conversation_id: threadId,
    })
    
    if (error) {
      console.error("Ts is not working", error)
    }

  }

  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: 'user',
    content: input.message,
  });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error('ASSISTANT_ID is not set');
          })(),
      })
      .on("messageDone", async (event) => {

      });

      let runResult = await forwardStream(runStream);

      while (
        runResult?.status === 'requires_action' &&
        runResult.required_action?.type === 'submit_tool_outputs'
      ) {
        const tool_outputs =
          runResult.required_action.submit_tool_outputs.tool_calls.map(
            (toolCall: any) => {
              const parameters = JSON.parse(toolCall.function.arguments);

              switch (toolCall.function.name) {
                default:
                  throw new Error(
                    `Unknown tool call function: ${toolCall.function.name}`,
                  );
              }
            },
          );

        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(
            threadId,
            runResult.id,
            { tool_outputs },
          ),
        );
      }
    },
  );
}