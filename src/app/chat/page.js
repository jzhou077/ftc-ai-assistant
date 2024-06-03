import Chatbox from '@/src/components/ui/Chatbox';
import '../globals.css'
import { Sidebar } from "@/src/components/ui/Sidebar";
import { SuggestedChat } from '@/src/components/ui/SuggestedChat';

export default function Chat() {
    let isChatting = false

    return (
        <main className="flex h-screen w-full">
            
            <Sidebar/>

            <section className="flex flex-col flex-1">
                <div className="flex flex-row sticky px-10 py-5 justify-end">
                    <button className="bg-gray-400 h-10 w-10 rounded-full">

                    </button>
                </div>

                {isChatting
                    ?
                    <div className="flex flex-col h-full w-full justify-center content-center text-center">
                        <div className="bg-gray-300 min-w-20 min-h-20 content-center self-center rounded-full">
                            <h1 className="text-black">Logo</h1>
                        </div>

                        <div>
                            <h1 className="text-2xl my-8">Hi! How can I help you today?</h1>
                        </div>

                        <div className="flex flex-row justify-center text-start gap-3">
                            <SuggestedChat text="Get started with programming"/>
                            <SuggestedChat text="Get started with programming"/>
                            <SuggestedChat text="Get started with programming"/>
                            <SuggestedChat text="Get started with programming"/>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col h-full w-full justify-start text-end">
                        <Chatbox/>
                    </div>
                }

                <div className="w-full">
                    <form className="w-full">
                        <div className="flex h-20 p-3">
                            <div className="flex flex-row items-center h-full w-4/5 px-4 max-w-[850px] bg-[#555555] rounded-full gap-3 mx-auto">
                                <button className="h-9 w-10 bg-gray-400 self-center rounded-full"></button>
                                <textarea placeholder="Message DuckGPT" row="1" className="w-full resize-none bg-transparent max-h-8 content-center overflow-hidden focus:outline-none"></textarea>
                                <button className="h-9 w-10 bg-gray-400 self-center rounded-full"></button>
                            </div>
                        </div>
                    </form>

                    <div className="my-4"></div>
                </div>

            </section>

        </main>
    )
}