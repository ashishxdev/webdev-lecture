import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-3'>
        <div className="logo">
            <span className='mx-8 text-xl font-bold'>TaskUp</span>
        </div>
      <ul className='flex gap-9 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
