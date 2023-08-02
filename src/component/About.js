import React from 'react';
import shoeleg from '../assests/about-shoe-company.png'

export default function About() {
  return (
    <>
        <div id="about" className=' bg-black py-12 px-8 md:px-12 max-w-[1440px] mx-auto text-white flex flex-col md:flex-row gap-10'>
        <h2 className='text-3xl text-center font-bold md:hidden'>About Us</h2>
        <div className="bg-[url('/src/assests/about-us-background.png')] bg-no-repeat md:w-full self-center">
            <img src={shoeleg} alt='' className='' />
        </div>
       <div className='space-y-8 max-w-xl md:w-full'>
        <h2 className='text-6xl font-bold md:block hidden'>About Us</h2>
        <p>
          For each one of those shoe sweethearts out there, THE SHOE COMPANY
          offer the one-stop goal to pick the correct match of footwear.
        </p>
        <p>
          Gone are the days when you needed to go from store to store to locate
          the correct style and size for yourself.
        </p>
        <p>
          At THE SHOE COMPANY, you can locate a vast accumulation of dashing
          footwear in all sizes and styles, all inside a couple of snaps.
        </p>
        <p>
          Simple right? Not just we are here to spare your time, we are putting
          forth you the most dazzling footwear alternatives from all the
          first-rate brands like DAVINCHI, PRINCESS, and SIGNATURE. At
          ‘Organization Name’, we offer men, ladies, and child’s shoes perfect
          for any and each event.
        </p>
       </div>
        </div>
    </>
  )
}
