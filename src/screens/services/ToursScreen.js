import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTours from '../../components/services/tours/bannertours';
import Navbars from '../../components/services/navbars';
import BodyBagt01 from '../../components/services/tours/bodybagt1';
import BodyBagt02 from '../../components/services/tours/bodybagt2';
export default function ToursScreenScreen() {


  return (
    <>
      <BannerTours />
      <Navbars />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Mexhubb Tours</strong></h1>
        <BodyBagt01 />
      </Container>
      
      <div style={{ backgroundColor: 'white' }}>
        <Container>

        </Container>
      </div>
      
      <Container>
        <BodyBagt02 />
        <br />
        <br />
      </Container>
    </>
  );
}
