import React from "react"

export default function Chatbox(props) {
    return (
        props.sender.toLowerCase() == "user" ?
        
        <div className="flex w-full justify-end text-end">
            <div className="flex flex-row gap-4">
                <div className="max-w-[650px] bg-[#555555] p-4 rounded-2xl">
                    <p>{props.text}</p>
                </div>

                <div className="h-10 w-10 rounded-full bg-gray-400"></div>
            </div>
        </div>
        :
        <>
            <div className="flex flex-col w-full justify-start text-start gap-1 group">
                <div className="flex flex-row gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-400"></div>

                    <div className="flex flex-col gap-1">
                        <div className="max-w-[650px] bg-[#555555] p-4 rounded-2xl">
                            <p>{props.text}</p>
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