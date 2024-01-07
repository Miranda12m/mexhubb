import React from 'react';
import CarouselFR from '../components/home/banner';
import Services2FR from '../components/home/services2';
import TestimonialsFR from '../components/home/testimonials';
import QtFR from '../components/home/qt';
import FAQFR from '../components/home/faq';
import AboutUsFR from '../components/home/aboutus';
import CounterFR from '../components/counter';
function HomeScreenFR() {
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
      <CarouselFR />
      <CounterFR/>
      <br></br><br></br><br></br><br></br>
      <AboutUsFR />
      <br></br><br></br><br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <Services2FR />
        <br></br><br></br>
        <QtFR />
      </div>


      <div style={{ backgroundColor: 'white' }}>

      <TestimonialsFR />
      </div>

      <FAQFR />

    </>

  );
}

export default HomeScreenFR;

