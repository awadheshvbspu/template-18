import React from 'react';
import facebook from '../assests/facebook.svg';
import instagram from '../assests/instagram.svg'
import twitch from '../assests/twitch.svg';
import youtube from '../assests/youtube.svg'

export default function Contact() {
  return (
    <>
        <div id='contact' className='bg-black py-12 px-8 md:px-12 max-w-[1440px] mx-auto text-white'>
         <div className='flex justify-between flex-col md:flex-row'>
         <div className='max-w-[900px]'>
          <h2 class="text-3xl md:text-6xl font-bold ">
         Contact Us
      </h2>
      <p class="max-w-[180px] my-8">
          THE SHOE COMPANY, Noida, Uttar Pradesh +915901120991
        </p>
        <div class="flex space-x-4">
          <a href="#">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={twitch} alt="twitch icon" />
          </a>
          <a href="#">
            <img src={youtube} alt="youtube icon" />
          </a>
        </div>
          </div>
          <div className='md:mt-0 mt-3 md:w-3/4 w-full'>
          <iframe 
            class="w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28032.55332991067!2d77.33151945851563!3d28.567685685805078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8ac7b6df64d%3A0x604b04018aacc6cc!2sUppal%20Hero!5e0!3m2!1sen!2sin!4v1690989615565!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
         </div>
        </div>
    </>
  )
}
