import React  from 'react';   
import Header from './component/Header';
import Hero from './component/Hero';
import HowItWorks from './component/HowItWorks';
import About from './component/About';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
   <>
   <div className=''>
   <Header/>
    <Hero/>
    <HowItWorks/>
    <About/>
    <Testimonial/>
    <Contact/>
    <Footer/>
   </div>
   
   </>
  );
}

export default App;
