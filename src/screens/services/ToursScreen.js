import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTours from '../../components/services/tours/bannertours';
import Navbars from '../../components/services/navbars';


export default function ToursScreenScreen() {
  

  return (
    <>
      <BannerTours />
      <Navbars />
      <Container>


        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Restaurants</strong></h1>
        <br></br>
        


        <br />
        <br />
      </Container>
    </>
  );
}
