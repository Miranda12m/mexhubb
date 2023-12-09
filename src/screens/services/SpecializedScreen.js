import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLoc from '../../components/services/bannerservices/bannerloc';
import Navbars from '../../components/services/navbars';


export default function SpecializedScreen() {
 
  return (
    <>
    <BannerLoc />
    <Navbars />

    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Local Consume</strong></h1>

    </Container>
    </>
  );
}

 