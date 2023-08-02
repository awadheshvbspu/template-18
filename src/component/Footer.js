import React from 'react';
import footer from '../assests/logo.png'

export default function Footer() {
  return (
    <>
        <div className='bg-black text-white max-w-[1440px] px-12'>
      <div class="flex items-center justify-between">
        <a href="#">
          <img class="w-14" src={footer} alt="logo"/>
          <p class="text-[8px] -mt-3">The Shoe Company</p>
        </a>
        <p>Made with ❤️ By Awadhesh Yadav</p>
      </div>
        </div>
    </>
  )
}
