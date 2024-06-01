import React from 'react'

export function Sidebar() {
    return (
        <section className="sidebar max-w-72 h-screen max-h-screen">
            <div className="flex flex-col gap-4 sidebar p-4">
                <div className="flex flex-row justify-between secondary-text-color">
                    <button>close</button>
                    <button>new chat</button>
                </div>

                <div className="mt-10"></div>

                <h6 className="text-sm secondary-text-color">Old Chats</h6>
                <h3 className="text-md">Control Award</h3>
                <h3 className="text-md">Preparing for Worlds</h3>
                <h3 className="text-md">Competition To-Do List</h3>
            </div>
        </section>
    )
}