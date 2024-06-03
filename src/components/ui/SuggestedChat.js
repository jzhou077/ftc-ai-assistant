import React from 'react'

export function SuggestedChat(props) {
    return (
        <div className="flex flex-col p-3 border-2 border-gray-400 rounded-3xl max-w-48 hover:cursor-pointer">
            <div className="bg-gray-400 min-w-5 min-h-5 self-start rounded-sm"></div>
            <h3 className="text-wrap text-md">{props.text}</h3>
        </div>
    )
}