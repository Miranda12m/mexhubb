import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTours from '../../components/services/tours/bannertours';
import Navbars from '../../components/services/navbars';
import BodyBagt01 from '../../components/services/tours/bodybagt1';
import BodyBagt02 from '../../components/services/tours/bodybagt2';
import Imat from '../../components/services/tours/imat';
export default function ToursScreenScreen() {


  return (
    <>
      <BannerTours />
      <Navbars />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Mexhubb Tours</strong></h1>
        <BodyBagt01 />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Tours That<span style={{ color: '#ff3b19' }}> We Offer</span></h2>
          <Imat />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>

      <Container>
        <br></br><br></br>
        <BodyBagt02 />
        <br />
        <br />
      </Container>
    </>
  );
}
