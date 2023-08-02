import React from 'react'
import whiteshoe from '../assests/hero-image.png';


export default function Hero() {
  return (
    <>
        <section id="hero"  className="bg-[url('/src/assests/hero-background.png')] mg:bg-contain  bg-no-repeat bg-right bg-black text-white pt-36 max-w-[1440px] mx-auto ">
            <div className='flex flex-col md:flex-row md:items-center px-12 mx-auto justify-between max-w-6xl'>
            <h1 className=' text-2xl md:text-6xl font-bold md:leading-[72px] leading-[40px]'>THE  <br/> SHOE <br/> COMPANY</h1>
            <div>
                <img src={whiteshoe} alt='0' className='w-[600px]' />
             </div>
            </div>
        </section>
    </>
  )
}
