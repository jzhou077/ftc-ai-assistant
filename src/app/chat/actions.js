'use server'

import OpenAi from 'openai'

import { createClient } from '../utils/supabase/server'

const openai = new OpenAi()

export async function retrieveMessages(threadId) {
    const retrievedMessages = await openai.beta.threads.messages.list(threadId)

    return retrievedMessages.data
}

export async function getThreadIds(userId) {
    const supabase = createClient()
    const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .eq('user_id', userId)
    
    if (error) {
        console.log('Error fetching conversations: ', error)
    }

    const threadIds = data.map((row) => row.conversation_id)

    return threadIds
}