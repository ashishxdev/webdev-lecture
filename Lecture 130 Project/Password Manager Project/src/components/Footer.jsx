import React from 'react'

const Footer = () => {
  return (
    <div className='text-white bg-[rgb(31,13,50)] flex flex-col justify-center items-center w-full'>
        <div className="logo font-bold text-2xl">
        Pass
        <span className='text-amber-400'>Saver</span>
        </div>
        <div className='flex justify-center items-center'>
      Created with <img className='w-8 mx-2' src="icons/heart.png" alt="" /> by Aashish
        </div>
    </div>
  )
}

export default Footer
