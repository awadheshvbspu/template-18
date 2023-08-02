import React from 'react'
import logo from '../assests/logo.png';
import {AiOutlineMenu} from 'react-icons/ai'

export default function Header() {
  return (
    <>
        <header className='md:px-12 px-4 flex items-center justify-between bg-black/70 text-white fixed w-full left-[50%] -translate-x-[50%] max-w-[1440px] mx-auto backdrop-blur-sm'>
           <div>
          <a href='/'>
          <img src={logo} alt='not found' className='md:w-32 w-7 ' />
           <p className='text-xs md:text-sm md:-mt-8 text-white'>The Shoe Company</p>
          </a>
           </div>
           <nav className='hidden md:block lg:space-x-10 space-x-6 font-bold lg:text-2xl'>
            <a href='#' >Home</a>
            <a href='#how-it-works' >How It Works?</a>
            <a href='#about' >About</a>
            <a href='#testimonial' >Testimonial</a>
            <a href='#contact' >Contact Us</a>
           </nav>
           <AiOutlineMenu className='md:hidden' size={30}/>
        </header>
    </>
  )
}
