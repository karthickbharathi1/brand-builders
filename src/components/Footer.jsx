import React from 'react'
import image1 from '../assets/Group.png'
import image2 from '../assets/Group (2).png'
import image3 from '../assets/Group (1).png'
import arroqw from '../assets/Arrow 7.png'
const Footer = () => {
  return (
    <div className='flex justify-around items-center bg-black text-white px-10 py-10'>
        <div className='text-[14px] md:text-[18px]'>
            <p className='mb-4'>Top Brands Media</p>
            <p className='mb-4'>Chennai</p>
            <p className='mb-4'>Los Angels</p>
            <div className='flex'>
                <img src={image1} alt="" className='mr-4 cursor-pointer' />
                <img src={image2} alt="" className='mr-4 cursor-pointer'  />
                <img src={image3} alt="" className='mr-4 cursor-pointer'  />
            </div>
        </div>
        <div className='md:w-1/4 text-[14px] md:text-[18px]'>
        <div className='flex justify-between items-center '>
            <p>Get In Touch</p>
            <img className=' h-[5%] cursor-pointer' src={arroqw} alt="" /> 
        </div>
        <div class=" my-8 border-t border-white"></div>

        </div>
        
    </div>
  )
}

export default Footer