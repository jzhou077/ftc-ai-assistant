import React from 'react'

import Image from 'next/image'

export function SuggestedChat(props) {
    return (
        <button onClick={props.onClick} className="flex flex-col p-3 border-2 border-gray-400 rounded-2xl max-w-48 hover:cursor-pointer text-start">
            <Image src={props.imgSource} alt="icon" className='mb-2'></Image>
            <h3 className="text-wrap text-sm font-light">{props.text}</h3>
        </button>
    )
}