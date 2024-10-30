'use client'
import { SuggestedChat } from '../../components/ui/SuggestedChat';
import Chatbox from '../../components/ui/Chatbox';

import { useState, useEffect, useRef } from 'react';
import { useAssistant } from '@ai-sdk/react';

import { retrieveMessages } from '../../app/chat/actions';
import { signOut } from '../../app/(auth)/actions'

import Image from 'next/image';

import codeIcon from '../../public/code-icon.svg'
import scorePointsIcon from '../../public/score-points.svg'
import sizeConstraintsIcon from '../../public/size-constraints.svg'
import scoringElementIcon from '../../public/scoring-element.svg'
import aiChipIcon from '../../public/ai-chip.svg'

export default function ChatWrapper(props) {
    const [isLogoutBtnInvis, setLogoutBtnInvis] = useState(true)
    const [hasUpdatedMessages, setHasUpdatedMessages] = useState(false)
    const [isChatting, setChatting] = useState(true)

    const dummy = useRef(null)

    const { messages, status, input, append, handleInputChange, submitMessage, setMessages } = useAssistant({
        api: 'api/assistant',
        // threadId: '',//props.threadIds[0] ? props.threadId : 'thread_l9XPmD6lczDjJVI6d3uxM8Zv',
        threadId: props?.threadIds[0]
    });

    if (!hasUpdatedMessages) {
        for (let i = 0; i < props.threads.length; i++) {
            for (let j = 0; j < props.threads[i].length; j++) {
                props.threads[i][j].content = props.threads[i][j].content[0].text?.value
            }
            props.threads[i] = props.threads[i].reverse()
        }

        props.threads.length > 0 ? setMessages(props.threads[0]) : setChatting(false)
        
        setHasUpdatedMessages(true)
    }

    useEffect(() => {
        dummy ? dummy.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' }) : ''
    }, [messages.length, messages[messages.length - 1]?.content])

    return (
        <section className="flex flex-col flex-1 px-4">
            <div className="flex flex-row sticky px-10 pt-5 justify-end">
                <div className="flex flex-col items-center">
                    <button onClick={() => setLogoutBtnInvis(!isLogoutBtnInvis)} className="bg-[#5130B2] h-10 w-10 rounded-full select-none mb-3">
                        {props.letter}
                    </button>
                    <button onClick={() => { signOut() }} className={`flex flex-row items-center gap-2 bg-[#AC4242] self-start px-3 py-2 rounded-lg font-light transition ease-in-out duration-300 ${isLogoutBtnInvis ? 'opacity-[0] invisible' : 'opacity-[1] visible'}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_280_26)">
                                <path d="M13.5715 15V17.8572C13.5715 18.236 13.421 18.5994 13.1531 18.8673C12.8852 19.1352 12.5218 19.2857 12.1429 19.2857H2.14293C1.76404 19.2857 1.40068 19.1352 1.13277 18.8673C0.864865 18.5994 0.714355 18.236 0.714355 17.8572V2.14287C0.714355 1.76398 0.864865 1.40062 1.13277 1.13271C1.40068 0.864804 1.76404 0.714294 2.14293 0.714294H12.1429C12.5218 0.714294 12.8852 0.864804 13.1531 1.13271C13.421 1.40062 13.5715 1.76398 13.5715 2.14287V5.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.28589 10H19.2859" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.4287 7.14288L19.2859 10L16.4287 12.8572" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_280_26">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p>Sign out</p>
                    </button>
                </div>
            </div>

            {!isChatting
                ?
                <div className="flex flex-col h-full w-full justify-center content-center text-center">
                    <div className="flex bg-[#282828] min-w-20 min-h-20 self-center items-center justify-center rounded-full">
                        <Image src={aiChipIcon} alt="aiIcon" className=""></Image>
                    </div>

                    <div>
                        <h1 className="text-2xl my-8">Hi! How can I help you today?</h1>
                    </div>

                    <div className="flex flex-row justify-center text-start gap-3">
                        <SuggestedChat onClick={() => {
                            append({
                                role: 'user',
                                content: 'How to code an FTC bot with Onbot Java?'
                            })
                            setChatting(true)
                            }} imgSource={codeIcon} text="How to code an FTC bot with Onbot Java?"/>
                        <SuggestedChat onClick={() => {
                            append({
                                role: 'user',
                                content: 'What is the size of a scoring element?'
                            })
                            setChatting(true)
                        }} imgSource={scoringElementIcon} text="What is the size of a scoring element?"/>
                        <SuggestedChat onClick={() => {
                            append({
                                role: 'user',
                                content: 'What are the size constraints for robots?'
                            })
                            setChatting(true)
                        }} imgSource={sizeConstraintsIcon} text="What are the size constraints for robots?"/>
                        <SuggestedChat onClick={() => {
                            append({
                                role: 'user',
                                content: "How do I score in this year's challenge?"
                            })
                            setChatting(true)
                        }} imgSource={scorePointsIcon} text="How do I score in this year's challenge?"/>
                    </div>

                    <div className="m-10"></div>
                </div>
                :
                <div className="h-full overflow-hidden">
                    <div className="flex flex-col h-full w-4/5 justify-start overflow-y-scroll mx-auto pr-2">
                        {messages.map((message, index) => (
                            <Chatbox sender={message.role} text={message.content} letter={props.letter} key={index}/>
                        ))}
                        <div ref={dummy}></div>
                    </div>
                </div>
            }

            <div className="w-full">
                <form className="w-full" onSubmit={submitMessage}>
                    <div className="flex h-20 p-3">
                        <div className="flex flex-row items-center h-full w-4/5 px-4 pl-8 max-w-[850px] bg-[#404040] rounded-full gap-3 mx-auto">
                            {/* <button className="h-9 w-10 bg-gray-400 self-center rounded-full"></button> */}
                            <input name="prompt" value={input} onChange={handleInputChange} placeholder="Message FTC Assistant" row="1" autoComplete="off" disabled={status !== "awaiting_message"} className="w-full resize-none bg-transparent max-h-8 content-center overflow-hidden focus:outline-none"></input>
                            <button className="h-9 w-10 self-center rounded-full" type="submit">
                            <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0002 30.8571C24.2057 30.8571 30.8574 24.2055 30.8574 16C30.8574 7.79462 24.2057 1.14285 16.0002 1.14285C7.79484 1.14285 1.14307 7.79462 1.14307 16C1.14307 24.2055 7.79484 30.8571 16.0002 30.8571Z" fill="white"/>
                                <path d="M16 8V24" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.14307 16L16.0002 8L22.8574 16" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="my-4"></div>
            </div>

        </section>
    )
}