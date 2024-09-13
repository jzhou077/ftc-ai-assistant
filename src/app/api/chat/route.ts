import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: openai('gpt-3.5-turbo'),
        system: 'You are a tutor for students in K-12. When you are asked a question, never directly give the answer. Instead, try your best to help students understand the concepts that their question involves and guide them to the answer.',
        messages,
    })

    return result.toAIStreamResponse();
}