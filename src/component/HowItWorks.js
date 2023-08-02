import React from 'react';
import shoe2 from '../assests/how-it-works.png';
import img1 from '../assests/arrow-1.png'
import img2 from '../assests/arrow-2.png';
import img3 from '../assests/arrow-3.png'

export default function HowItWorks() {
  return (
    <>
        
        <div id="how-it-works" class="section-container pt-20 scroll-mt-6 bg-black text-white md:px-0 px-4 pb-20">
      <h2 class="text-center text-3xl font-bold max-w-md mx-auto mb-12">
        Have they finally made the perfect workout shoe?
      </h2>
      <div class="max-w-xl mx-auto pt-60 xl:pt-12 relative">
        <img
          class="w-full max-w-2xl rotate-6 p-8 md:p-0 xl:rotate-0"
          src={shoe2}
          alt="shoe"
        />
        <div
          class="max-w-[200px] xl:max-w-xs absolute top-0 xl:-translate-x-full"
        >
          <h3 class="text-lg md:text-2xl font-bold">THE HEEL</h3>
          <p class="text-xs md:text-lg">
            The heel is well-built, has appropriate elevation and is not too
            rigid.
          </p>
          <img
            class="w-32 translate-y-8 xl:ml-auto rotate-45 xl:rotate-0"
            src={img1}
            alt="arrow-1"
          />
        </div>
        <div
          class="max-w-[200px] xl:max-w-xs absolute top-16 md:top-0 right-0 xl:-right-60" 
        >
          <img
            class="w-32 md:w-auto xl:-ml-32 translate-y-full md:translate-y-60 rotate-[120deg] xl:translate-y-0 xl:rotate-0"
            src={img2}
            alt="arrow-2"
          />
          <h3 class="text-lg md:text-2xl font-bold -mt-20">THE FRONT</h3>
          <p class="text-xs md:text-lg">
            The front is comfortable and adjusts well to the shape of your foot.
          </p>
        </div>
        <div class="max-w-[200px] xl:max-w-xs absolute -bottom-16">
          <img
            class="ml-auto -mb-10 max-w-[150px]"
            src={img3}
            alt="arrow-3"
          />
          <h3 class="text-lg md:text-2xl font-bold">TRACTION</h3>
          <p class="text-xs md:text-lg">
            The shoe has good traction and doesn't slip easily.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
