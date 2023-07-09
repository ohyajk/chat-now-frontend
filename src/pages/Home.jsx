import React from 'react'

const Home = () => {
    return (
        <section className="grid grid-cols-[300px_auto] flex-grow h-full">
            <aside className='w-full flex flex-col items-center py-5 bg-[#202020] h-full'>
                <input className='py-2 px-2 rounded-lg outline-none text-white/80 font-medium bg-sec-bg' type="text" placeholder='Search for contact' />
            </aside>
        </section>
    )
}


export default Home