import React from 'react';
import { Container } from 'react-bootstrap';
import BannerToursES from '../../components/services/tours/bannertours';
import NavbarsES from '../../components/services/navbars';
import BodyBagt01ES from '../../components/services/tours/bodybagt1';
import BodyBagt02ES from '../../components/services/tours/bodybagt2';
import ImatES from '../../components/services/tours/imat';
export default function ToursScreenScreenES() {


  return (
    <>
      <BannerToursES />
      <NavbarsES />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Mexhubb Tours</strong></h1>
        <BodyBagt01ES />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Tours Que<span style={{ color: '#ff3b19' }}> Ofrecemos</span></h2>
          <ImatES />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>

      <Container>
        <br></br><br></br>
        <BodyBagt02ES />
        <br />
        <br />
      </Container>
    </>
  );
}
