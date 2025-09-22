import React from 'react'

const Navbar = () => {
    return (
        <nav className="text-white bg-[rgb(31,13,50)]">
            <div className="my-container flex justify-between px-4 py-5 h-12 items-center">
            <div className="logo font-bold text-2xl">
                Pass
                <span className='text-amber-400'>Saver</span>
            </div>
            {/* <ul>
                <li className='flex gap-10'>
                    <a className="hover:font-bold hover:text-amber-300" href="/">Home</a>
                    <a className="hover:font-bold hover:text-amber-300" href="/about">About</a>
                    <a className="hover:font-bold hover:text-amber-300" href="/contact">Contact</a>
                </li>
            </ul> */}
            <button className='text-white my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                <img className="invert p-1 w-9 cursor-pointer" src="icons/github.svg" alt="github" />
                <span className='font-bold px-2 cursor-pointer hover:text-amber-300'>GitHub</span>
            </button>
            </div>
        </nav>
    )
}

export default Navbar
