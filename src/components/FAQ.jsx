import { useState } from 'react'
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const FAQ = () => {
    const [click1 , setClick1] = useState(false)
    const [click2 , setClick2] = useState(false)
    const [click3 , setClick3] = useState(false)
    const [click4 , setClick4] = useState(false)
  return (
    <div className='h-full py-10 flex justify-center '>
        <div className='w-9/12' >
            <div className='flex justify-between'>
                <p onClick={() => setClick1(!click1)} className='cursor-pointer text-[22px] md:text-[32px]'>Did You Build Brand?</p>
                
                     
              <span onClick={() => setClick1(!click1)} className={click1 &&  'rotate-90 duration-100'}>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            
               
            </div>
            {click1 &&  <p className='text-justify'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec</p>}
            <div class=" my-8 border-t border-black"></div>




            <div className='flex justify-between'>
                <p onClick={() => setClick2(!click2)} className='cursor-pointer text-[22px] md:text-[32px]'>Influencer Marketing Stratergy</p>
                 <span onClick={() => setClick2(!click2)} className={click2 &&  'rotate-90 duration-100'}>
                    <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </div>
            {click2 &&  <p className='text-justify'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec</p>}
            <div class=" my-8 border-t border-black"></div>
            
            
            <div className='flex justify-between'>
                <p onClick={() => setClick3(!click3)} className='cursor-pointer text-[22px] md:text-[32px]'>Influencer Marketing Stratergy</p>
                <span onClick={() => setClick3(!click3)} className={click3 &&  'rotate-90 duration-100'}>
                    <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </div>
            {click3 &&  <p className='text-justify'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec</p>}
            <div class=" my-8 border-t border-black"></div>
            
            <div className='flex justify-between'>
                <p onClick={() => setClick4(!click4)} className='cursor-pointer text-[22px] md:text-[32px]'>Influencer Marketing Stratergy</p>
                <span onClick={() => setClick4(!click4)} className={click4 &&  'rotate-90 duration-100'}>
                    <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </div>
            {click4 &&  <p className='text-justify'>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec</p>}
        </div>
    </div>
  )
}

export default FAQ