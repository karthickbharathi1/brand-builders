import React from 'react'
import image from '../assets/Rectangle 25.png'
const WhatWeHadDone = () => {
  return (
    <div className='h-screen'>
        <div  className='h-[100%] bg-black flex flex-col md:flex-row'>
            <img  className='h-[100%]'  src={image} alt="" />
            <div className='grid grid-cols-2 gap-x-10 gap-y-10 px-20 py-10'>
                <div className=' text-white'>
                    <p className='font-500 text-[40px] md:font-500 md:text-[80px]'>100+</p>
                    <p  className='font-300 text-[20px] md:font-300 md:text-[40px]'>Clients</p>
                </div>
                <div className=' text-white'>
                    <p className='font-500 text-[40px] md:font-500 md:text-[80px]'>10+</p>
                    <p  className='font-300 text-[20px] md:font-300 md:text-[40px]'>Experience</p>
                </div>
                <div className=' text-white'>
                    <p className='font-500 text-[40px] md:font-500 md:text-[80px]'>150+</p>
                    <p  className='font-300 text-[20px] md:font-300 md:text-[40px]'>Projects</p>
                </div>
                <div className=' text-white'>
                    <p className='font-500 text-[40px] md:font-500 md:text-[80px]'>50</p>
                    <p  className='font-300 text-[20px] md:font-300 md:text-[40px]'>Employees</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WhatWeHadDone