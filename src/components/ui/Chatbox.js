import React from "react"

import Markdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import 'katex/dist/katex.min.css'
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"

import '../../app/globals.css'

export default function Chatbox(props) {
    return (
        props.sender.toLowerCase() == "user" ?
        
        <div className="flex w-full justify-end text-start my-2">
            <div className="flex flex-row gap-4">
                <div className="max-w-[650px] bg-[#404040] p-4 rounded-2xl">
                    <Markdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{props.text}</Markdown>
                </div>

                <div className="h-10 w-10 rounded-full bg-[#5130B2] mt-1 text-center content-center select-none">{props.letter}</div>
            </div>
        </div>
        :
        <>
            <div className="flex flex-col w-full justify-start text-start gap-1 group my-2">
                <div className="flex flex-row gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-400 mt-1"></div>

                    <div className="flex flex-col gap-1">
                        <div className="max-w-[650px] bg-[#404040] p-4 rounded-2xl">
                            <Markdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                                {props.text.replaceAll(/\【.*?】/g, "")
                                            .replaceAll("\\(", "$")
                                            .replaceAll("\\)", "$")
                                            .replaceAll("\\[", "$$")
                                            .replaceAll("\\]", "$$")
                                }
                            </Markdown>
                        </div>

                        <div className="flex flex-row gap-2 bg-[#373737] self-start px-3 py-2 rounded-full invisible group-hover:visible">
                            <button className="bg-gray-400 h-4 w-4 rounded-sm"></button>
                            <button className="bg-gray-400 h-4 w-4 rounded-sm"></button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}