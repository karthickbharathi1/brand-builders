import React from 'react'
import image from '../assets/Rectangle 34.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
const WebAndMobile = () => {
  return (
    <div className='h-full flex justify-center px-10 '>
        <div className='flex flex-col  md:flex-row md:justify-center md:items-center'>
            <div className='md:w-1/3'>
                <p className='font-300 text-[22px]'>OUR SERVICE</p>
                <p className='font-500 text-[25px] md:text-[40px] '>Web And Moblie Platform</p>

                <p className='text-justify'>Norem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Etiam Eu Turpis Molestie, Dictum Est A, Mattis Tellus. Sed Dignissim, Metus Nec</p>
                <button className='flex justify-center items-center border-solid  border-2 border-black rounded-3xl p-2 mt-3'>
                    View <HiArrowNarrowRight className='ml-3 ' />
                    </button>
            </div>
            <div className='my-5 md:ml-5'>
                <img src={image} alt="" />
            </div>

        </div>
    </div>
  )
}

export default WebAndMobile