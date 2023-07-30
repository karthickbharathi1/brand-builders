import {React , useState} from 'react'
import logo from '../assets/nBM.png'
import { AiOutlineSearch  } from 'react-icons/ai';
import {  FaBars , FaTimes } from 'react-icons/fa';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed  z-50 top-0 left-0 right-0 w-full flex  justify-around py-8 box-shadow-bottom bg-white opacity-1'>

        <div>
        <img className='cursor-pointer'  src={logo} alt="" />
        </div>
       
      {/* menu */}
      <ul className='hidden md:flex '>
            <li className='mr-10'><a href="#">Home</a></li>
            <li className='mr-10'><a href="#">About</a></li>
            <li className='mr-10'><a href="#">Contact Us</a></li>
        </ul>
        <div className='relative hidden md:flex'>
        <input type="text"  className='px-5'/>
        <AiOutlineSearch  className='absolute right-5 top-1 cursor-pointer'/>

        </div>
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars className='cursor-pointer' /> : <FaTimes className='text-white cursor-pointer'/>}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 left-0 w-full h-screen  flex flex-col bg-black justify-center items-center text-white text-xl '
        }>
        <li className='mb-10'><a href="#">Home</a></li>
        <li className='mb-10'><a href="#">About</a></li>
        <li className='mb-10'><a href="#">Contact Us</a></li>
      </ul>
        

    </div>
  )
}

export default NavBar