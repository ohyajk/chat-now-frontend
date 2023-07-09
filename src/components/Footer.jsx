import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t-2 border-white/50 flex justify-between items-center px-10 py-2'>
            <h6>Made with <span className='text-red-700 text-lg'>&#10084;</span> by Jitender Kumar</h6>
            <ul className='flex gap-4 items-center'>
                <li><i className='text-3xl text-sky-400 cursor-pointer bx bxl-github focus:scale-105'></i></li>
                <li><i className='text-3xl text-sky-400 cursor-pointer bx bxl-linkedin focus:scale-105'></i></li>
                <li><i className='text-3xl text-sky-400 cursor-pointer bx bxs-envelope focus:scale-105'></i></li>
            </ul>
        </footer>
    )
}

export default Footer