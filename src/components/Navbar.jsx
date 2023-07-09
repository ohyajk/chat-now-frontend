import React from 'react'

const Navbar = () => {
    return (
        <header className='border-b-2 border-white/50 box-border py-4 px-10 flex justify-between items-center' >
            <nav className='flex w-full items-center justify-between'>
                <span className='flex justify-start items-center gap-2'>
                    <img width="54" height="54" src="https://img.icons8.com/fluency/48/chat.png" alt="chat" />
                    <h1 className='text-2xl font-bold text-sky-400'>CHAT NOW</h1>
                </span>
                <ul>
                    <li><button className='bg-sky-400/70 px-4 py-2 font-semibold rounded-lg hover:bg-sky-400/30 active:scale-105 hover:rounded-lg'>LOGIN / SIGNUP</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar