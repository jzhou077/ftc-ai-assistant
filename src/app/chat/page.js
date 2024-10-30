import '../globals.css';

import Sidebar from '../../components/ui/Sidebar';
import ChatWrapper from '../../components/ui/ChatWrapper'

import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/server'

import { retrieveMessages, getThreadIds } from './actions'

export default async function Chat() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/signin')
    }

    const profileLetter = data.user.email[0].toUpperCase()
    // const retrievedMessages = await retrieveMessages('thread_l9XPmD6lczDjJVI6d3uxM8Zv')
    const threadIds = await getThreadIds(data.user.id)
    const threads = []
    for (let i = 0; i < threadIds.length; i++) {
        threads.push(await retrieveMessages(threadIds[i]))
    }

    return (
        <main className="flex h-screen w-full">
            
            <Sidebar/>
            <ChatWrapper threads={threads} letter={profileLetter} userId={data.user.id} threadIds={threadIds}/>

        </main>
    )
}