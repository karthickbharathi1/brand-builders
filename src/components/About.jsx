import React from 'react'
import image1 from '../assets/Rectangle 27.png'
import image2 from '../assets/Rectangle 29.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <div className='h-full flex justify-center py-10'>
        <div className='hidden md:grid md:grid-cols-2 md:gap-10'>
            <div>
                <p className='text-[22px] font-300'>OUR SERVICE</p>
                <h1 className='text-[40px] font-500'>Influencer Marketing</h1>
                <h1 className='text-[40px] font-500'>Strategy</h1>
                <p className='text-[18px] font-400'>Norem ipsum dolor sit amet, Consectetur Adipiscing Elit, <br /> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim, metus nec</p>
                <button className='flex justify-center items-center border-solid  border-2 border-black rounded-3xl p-2 mt-3'>
                    View <HiArrowNarrowRight className='ml-3 ' />
                    </button>
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image2} alt="" />
            </div>
            <div>
                <p className='text-[22px] font-300'>OUR SERVICE</p>
                <h1  className='text-[40px] font-500'>AI Powered</h1>
                <h1 className='text-[40px] font-500'>Strategy</h1>
                <p  className='text-[18px] font-400'>Norem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, <br /> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim, metus nec</p>
                <button className='flex justify-center items-center border-solid  border-2 border-black rounded-3xl p-2 mt-3'>
                    View <HiArrowNarrowRight className='ml-3 ' />
                    </button>
            </div>
    
        </div>






        <div className=' grid  gap-10 px-10 md:hidden '>
         <div>
         <p className='text-[22px] text-center font-300'>OUR SERVICE</p>
                <img src={image1} alt="" />
            </div>           
            <div >
                
                <h1 className='text-[25px] text-center font-500'>Influencer Marketing</h1>
                <h1 className='text-[25px] text-center font-500'>Strategy</h1>
                <p className='text-[18px] font-300 text-justify'>Norem ipsum dolor sit amet, Consectetur Adipiscing Elit, <br /> Etiam eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim, metus nec</p>
                <button className='flex justify-center items-center border-solid  border-2 border-black rounded-3xl p-2 mt-3'>
                    View <HiArrowNarrowRight className='ml-3 ' />
                    </button>
            </div>
            
            <div>
                <img src={image2} alt="" />
            </div>
            <div >
               
                <h1  className='text-[25px] text-center font-600'>AI Powered Strategy</h1>

                <p  className='text-[18px] text-justify font-300'>Norem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec</p>
                <button className='flex justify-center items-center border-solid  border-2 border-black rounded-3xl p-2 mt-3'>
                    View <HiArrowNarrowRight className='ml-3 ' />
                    </button>
            </div>
    
        </div>
    </div>
  )
}

export default About