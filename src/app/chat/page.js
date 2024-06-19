import Chatbox from '@/src/components/ui/Chatbox';
import '../globals.css'
import { Sidebar } from "@/src/components/ui/Sidebar";
import { SuggestedChat } from '@/src/components/ui/SuggestedChat';

export default function Chat() {
    let isChatting = false

    return (
        <main className="flex h-screen w-full">
            
            <Sidebar/>

            <section className="flex flex-col flex-1 px-4">
                <div className="flex flex-row sticky px-10 py-5 justify-end">
                    <button className="bg-gray-400 h-10 w-10 rounded-full">

                    </button>
                </div>

                {!isChatting
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

                        <div className="m-10"></div>
                    </div>
                    :
                    <div className="flex flex-col h-full w-full justify-start overflow-y-scroll">
                        <div className="flex flex-col w-4/5 max-w-[850px] items-end mx-auto gap-4">
                            <Chatbox sender="user" text="How can I get started with programming?"/>
                            <Chatbox sender="ai" text="Getting started with programming can be an exciting journey that opens up numerous opportunities. The first step is to choose a beginner-friendly programming language such as Python, JavaScript, or Java, which are known for their readability, versatility, and abundance of learning resources. Once you have selected a language, set up your development environment by installing a code editor like Visual Studio Code or an integrated development environment (IDE) like PyCharm or IntelliJ IDEA. Begin learning the basics of programming, focusing on understanding syntax, variables, data types, control structures, and functions. Utilize online resources and tutorials from platforms like Codecademy, Coursera, and Khan Academy, which offer structured courses, or interactive coding challenge sites like LeetCode and HackerRank to practice your skills. Engage with coding communities on forums like Stack Overflow and Reddit, and participate in local meetups or hackathons to connect with other programmers. Additionally, learning version control with Git and using GitHub to host your projects will be invaluable for managing your code and collaborating with others. Reading programming books and official documentation can deepen your understanding, while building small projects will help you apply what you've learned in practical ways. As you progress, maintain a growth mindset by embracing challenges and continuously seeking new knowledge. Finally, create a portfolio of your projects to showcase your skills and consider blogging about your learning journey to share your experiences and insights with others."/>
                        </div>
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

    function newChat() {
        
    }
}