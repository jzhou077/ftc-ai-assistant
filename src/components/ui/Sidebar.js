import React from 'react'
import { useState } from 'react'

export function Sidebar() {
    //state true = active; state false = inactive
    const [state, setState] = useState(true)

    function handleState() {
        setState(!state)
    }

    return (
        state
            ?
            <section className="sidebar w-60 h-screen max-h-screen">
                <div className="flex flex-col gap-4 sidebar p-4">
                    <div className="flex flex-row justify-between secondary-text-color">
                        <button onClick={handleState}>close</button>
                        <button>new chat</button>
                    </div>

                    <div className="mt-10"></div>

                    <h6 className="text-sm secondary-text-color">Old Chats</h6>
                    <h3 className="text-md">Math Problem</h3>
                    <h3 className="text-md">Help with Physics</h3>
                    <h3 className="text-md">Programming Help</h3>
                </div>
            </section>
            :
            <section className="sidebar max-w-10 h-screen max-h-screen">
                <div className="flex flex-col gap-4 sidebar p-4">
                    <div className="flex flex-row justify-between secondary-text-color">
                        <button onClick={handleState}>&gt;</button>
                    </div>
                </div>
            </section>
    )
}