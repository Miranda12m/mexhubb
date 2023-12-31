import React from 'react';
import Carousel from '../components/home/banner';
import Services2 from '../components/home/services2';
import Testimonials from '../components/home/testimonials';
import Qt from '../components/home/qt';
import FAQ from '../components/home/faq';
import AboutUs from '../components/home/aboutus';
import Counter from '../components/counter';
function HomeScreen() {
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
      <Carousel />
      <Counter/>
      <br></br><br></br><br></br><br></br>
      <AboutUs />
      <br></br><br></br><br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <Services2 />
        <br></br><br></br>
        <Qt />
      </div>


      <div style={{ backgroundColor: 'white' }}>

      <Testimonials />
      </div>

      <FAQ />

    </>

  );
}

export default HomeScreen;

