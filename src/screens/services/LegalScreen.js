import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerLegal from '../../components/services/legal/bannerlegal';
import Navbars from '../../components/services/navbars';
import BodyBagl01 from '../../components/services/legal/bodybagl1';
import BodyBagl02 from '../../components/services/legal/bodybagl2';

export default function LegalScreen() {

  return (
    <>
    <BannerLegal />
    <Navbars />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Legal Services with Mexhubb</strong></h1>
      <BodyBagl01 />
    </Container>
    <div style={{backgroundColor:'white'}}>
      <Container>

      </Container>
    </div>
    <Container>
    <BodyBagl02 />
    </Container>
    </>
  );
}

 