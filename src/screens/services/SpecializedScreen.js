import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Specialized from '../../components/services/specialized/bannerspecialized';
import Navbars from '../../components/services/navbars';
import BodyBags01 from '../../components/services/specialized/bodybags1';

export default function SpecializedScreen() {
 
  return (
    <>
    <Specialized />
    <Navbars />

    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Specialized Services with Mexhubb</strong></h1>
    <BodyBags01 />
    </Container>
    </>
  );
}

 