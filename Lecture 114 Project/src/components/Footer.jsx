import React from 'react'

const Footer = () => {
  return (
    <div>
      <nav className='flex justify-between bg-slate-800 text-white py-3'>
        <div className="logo">
            <span className='mx-8'>Contact Us</span>
        </div>
      <ul className='mx-8'>
        <li className='cursor-pointer hover:font-bold transition-all'>Copyright &copy; by Aashish Rana</li>
      </ul>
    </nav>
    </div>
  )
}

export default Footer
