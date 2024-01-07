import React from 'react';
import { Container } from 'react-bootstrap';
import BannerToursDE from '../../components/services/tours/bannertours';
import NavbarsDE from '../../components/services/navbars';
import BodyBagt01DE from '../../components/services/tours/bodybagt1';
import BodyBagt02DE from '../../components/services/tours/bodybagt2';
import ImatDE from '../../components/services/tours/imat';
export default function ToursScreenScreenDE() {


  return (
    <>
      <BannerToursDE />
      <NavbarsDE />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Mexhubb Tours</strong></h1>
        <BodyBagt01DE />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Tours That<span style={{ color: '#ff3b19' }}> We Offer</span></h2>
          <ImatDE />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>

      <Container>
        <br></br><br></br>
        <BodyBagt02DE />
        <br />
        <br />
      </Container>
    </>
  );
}
