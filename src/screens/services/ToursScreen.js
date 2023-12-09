import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerRes from '../../components/services/bannerservices/bannerres';
import Navbars from '../../components/services/navbars';


export default function ToursScreenScreen() {
  

  return (
    <>
      <BannerRes />
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
