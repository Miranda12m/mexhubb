import React from 'react';
import Carousel from '../components/home/banner';
import Services from '../components/home/services';
import Services2 from '../components/home/services2';
import Alianzas from '../components/home/alianzas';
import Testimonials from '../components/home/testimonials';
import Qt from '../components/home/qt';
import Team from '../components/home/team';
import FAQ from '../components/home/faq';
import AboutUs from '../components/home/aboutus';
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
      <Alianzas />
      <br></br>
      <AboutUs />
      <br></br><br></br><br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <Services2 />
        <Qt />
      </div>


      <Testimonials />

      <div style={{ backgroundColor: 'white' }}>


        <Team />
      </div>

      <FAQ />

    </>

  );
}

export default HomeScreen;

