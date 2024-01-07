import React from 'react';
import CarouselES from '../components/home/banner';
import Services2ES from '../components/home/services2';
import TestimonialsES from '../components/home/testimonials';
import QtES from '../components/home/qt';
import FAQES from '../components/home/faq';
import AboutUsES from '../components/home/aboutus';
import CounterES from '../components/counter';
function HomeScreenES() {
  return (
    <>
      <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                `}
      </style>
      <CarouselES />
      <CounterES/>
      <br></br><br></br><br></br><br></br>
      <AboutUsES />
      <br></br><br></br><br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <Services2ES />
        <br></br><br></br>
        <QtES />
      </div>


      <div style={{ backgroundColor: 'white' }}>

      <TestimonialsES />
      </div>

      <FAQES />

    </>

  );
}

export default HomeScreenES;

