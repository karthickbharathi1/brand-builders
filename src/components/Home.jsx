import React from 'react'
import HomeImage from '../assets/Home.png'
import InsideHome from '../assets/InsideHome.png'
const Home = () => {
  return (
    <div className='h-screen  '>
        <div className='h-full  text-[44px] md:text-[76px] flex flex-col items-center justify-center text-center  top-[15%] left-[10%]  md:top-[20%] md:left-[20%]  '>
             <p className='z-10' >The World's</p>
             <p  className='z-10' >Best</p>
             <p  className='z-10'>Brand Builder's</p>
             
        </div>
       <img src={HomeImage} alt="Bottom " className=" absolute bottom-10 left-0 w-9/12 h-[50%]" />
            
         <div className="absolute bottom-0 left-[20%] h-1/2 w-1/2 ">
         <img src={InsideHome} alt="Nested" className="absolute bottom-10 left-[20%] h-1/2 w-3/12 opacity-100 bg-[#E55E407D]" />
               </div>
         <p className='absolute bottom-[80px] right-0  md:bottom-10 md:right-[30%]'>Only AI Powered Brand <br /> Builders, Social Media And <br /> Digital marketers</p>
       <div className="scroll-container w-full  overflow-hidden ">
        <div className="scroll-content absolute  bottom-0 w-max flex   text-white bg-black animate-scrollAnimation  ">
            <p className="text-[25px] px-8"><span className='text-[#E55E40]'>*</span> -Digital First WorldWide</p>
             
             <p className="text-[25px] px-8  "><span className='text-[#E55E40]'>*</span>-Digital First WorldWide</p>
            <p className="text-[25px] px-8 "><span className='text-[#E55E40]'>*</span>-Digital First WorldWide</p>
            <p className="text-[25px] px-8 "><span className='text-[#E55E40]'>*</span>-Digital First WorldWide</p> 
           
        </div> 
      </div> 
            
       
        
    </div>
  )
}

export default Home