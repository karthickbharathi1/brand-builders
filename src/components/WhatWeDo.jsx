import React from 'react'

import image1 from '../assets/Rectangle 21.png'
import image2 from '../assets/Rectangle 22.png'
import image3 from '../assets/Rectangle 23.png'
import image4 from '../assets/Rectangle 24.png'


const WhatWeDo = () => {
  return (
    <div className='h-full flex justify-center '>
        <div className='grid md:grid-cols-2 md:gap-x-40 md:gap-y-10 px-10 py-10  text-center md:text-normal'>
            <div>
                <img className='w-[352px] h-[425px]' src={image1} alt="" />
                <p className='font-[300] md:text-[24px] text-[20px] '>OUR SERVICE</p>
                <p className='font-[400] md:text-[40px] text-[30px]' >Brand Identity</p>
            </div>
            <div className='mt-[50px] md:mt-[200px]'>
                <img className='w-[352px] h-[425px]'  src={image3} alt="" />
                <p className='font-[300]  md:text-[24px] text-[20px]'>OUR SERVICE</p>
                <p className='font-[400] md:text-[40px] text-[30px]'>Brand Strategy</p>
            </div>
            <div>
                <img className='mt-[50px] md:mt-0 w-[352px] h-[425px]' src={image2} alt="" />
                <p   className='font-[300]  md:text-[24px] text-[20px]'>OUR SERVICE</p>
                <p className='font-[400] md:text-[40px] text-[30px]'>Performance </p>
                <p className='font-[400] md:text-[40px] text-[30px]'>Marketing</p>
            </div>
            <div className='mt-[50px] md:mt-[200px] '>
                <img className='w-[352px] h-[425px]' src={image4} alt="" />
                <p className='font-[300]  md:text-[24px] text-[20px]'>OUR SERVICE</p>
                <p className='font-[400] md:text-[40px] text-[30px]'>Content And</p>
                <p className='font-[400] md:text-[40px] text-[30px]'>Copy Writing</p>
            </div>
        </div>

    </div>
  )
}

export default WhatWeDo