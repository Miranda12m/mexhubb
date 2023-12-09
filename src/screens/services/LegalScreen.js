import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLegal from '../../components/services/legal/bannerlegal';
import Navbars from '../../components/services/navbars';


export default function LegalScreen() {

  return (
    <>
    <BannerLegal />
    <Navbars />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Coworking</strong></h1>
        <br></br>

    </Container>
    </>
  );
}

 