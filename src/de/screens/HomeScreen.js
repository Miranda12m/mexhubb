import React from 'react';
import CarouselDE from '../components/home/banner';
import Services2DE from '../components/home/services2';
import TestimonialsDE from '../components/home/testimonials';
import QtDE from '../components/home/qt';
import FAQDE from '../components/home/faq';
import AboutUsDE from '../components/home/aboutus';
import CounterDE from '../components/counter';
function HomeScreenDE() {
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
      <CarouselDE />
      <CounterDE/>
      <br></br><br></br><br></br><br></br>
      <AboutUsDE />
      <br></br><br></br><br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <Services2DE />
        <br></br><br></br>
        <QtDE />
      </div>


      <div style={{ backgroundColor: 'white' }}>

      <TestimonialsDE />
      </div>

      <FAQDE />

    </>

  );
}

export default HomeScreenDE;

