import React from 'react';
import test1 from '../assests/testimonial-1.png';
import test2 from '../assests/testimonial-2.png';
import test3 from '../assests/testimonial-3.png'

export default function Testimonial() {
  return (
    <>
        <div id='testimonial' className='bg-black py-12 px-8 md:px-12 max-w-[1440px] mx-auto text-white bg-[url("/src/assests/testimonial-section-background.png")]'>
        <h2 class="text-3xl md:text-6xl font-bold text-center">
        What People are saying about THE SHOE COMPANY ?
      </h2>
      <div
        class="text-center flex flex-col items-center md:items-stretch gap-8 md:flex-row justify-between mt-16 max-w-5xl mx-auto"
      >
        <div class="w-60">
          <img
            class="w-full mb-4"
            src={test1}
            alt="testimonial"
          />
          <p>
            “Looking for shoes that are built just for you? THE SHOE COMPANY is
            the way to go. Love the design and build quality.”
          </p>
        </div>
        <div class="w-60">
          <img
            class="w-full mb-4"
            src={test2}
            alt="testimonial"
          />
          <p>
            “I love the shoes, the quality, and everyting. They are worth the
            investment!”
          </p>
        </div>
        <div class="w-60">
          <img
            class="w-full mb-4"
            src={test3}
            alt="testimonial"
          />
          <p>
            “They make the best and forever lasting shoes. Superb fit and
            confort is literally the next level. Much recommended!”
          </p>
        </div>
      </div>

        </div>
    </>
  )
}
