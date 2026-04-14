import React from 'react'
// import { google_Sans, pacifico } from "./fonts";


function Hero() {
  return (
    <div className='flex flex-col justify-center items-center mt-24 px-4 bit-font'>
        <div className='bg-white border border-gray-200 shadow-sm px-6 py-2 rounded-full mb-8 bit-font'>
            <span className='text-sm font-bold bg-gradient-to-r from-gray-700 to-black bg-clip-text text-transparent bit-font'>
                JOBFOLIO
            </span>
        </div>
        
        <h1 className='text-6xl font-extrabold text-center leading-[1.2] text-gray-900 max-w-3xl bit-font'>
            Find Jobs 
            <img 
                src="./public/Bag.png" 
                className='inline-block w-30 h-25 mx-4 bit-font' 
                alt="bag" 
            /> 
            that <br/> actually Match You
        </h1>
        
        <p className='mt-8 text-lg text-gray-600 text-center max-w-xl leading-relaxed bit-font'>
            We use AI to find the perfect job for you based on your skills, experience, and preferences.
        </p>
    </div>
  )
}

export default Hero
