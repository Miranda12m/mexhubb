import React from 'react';
import { Container } from 'react-bootstrap';
import BannerToursFR from '../../components/services/tours/bannertours';
import NavbarsFR from '../../components/services/navbars';
import BodyBagt01FR from '../../components/services/tours/bodybagt1';
import BodyBagt02FR from '../../components/services/tours/bodybagt2';
import ImatFR from '../../components/services/tours/imat';
export default function ToursScreenScreenFR() {


  return (
    <>
      <BannerToursFR />
      <NavbarsFR />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Visites à Mexhubb</strong></h1>
        <BodyBagt01FR />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Des visites qui<span style={{ color: '#ff3b19' }}> Nous offrons</span></h2>
          <ImatFR />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>

      <Container>
        <br></br><br></br>
        <BodyBagt02FR />
        <br />
        <br />
      </Container>
    </>
  );
}
