import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Specialized from '../../components/services/specialized/bannerspecialized';
import Navbars from '../../components/services/navbars';
import BodyBags01 from '../../components/services/specialized/bodybags1';
import BodyBags02 from '../../components/services/specialized/bodybags2';
import Imas from '../../components/services/specialized/imas';
export default function SpecializedScreen() {

  return (
    <>
      <Specialized />
      <Navbars />

      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Specialized Services with Mexhubb</strong></h1>
        <BodyBags01 />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" > Explore our specialized<span style={{ color: '#ff3b19' }}>  service categories:</span></h2>
          <Imas />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <Container>
        <BodyBags02 />
      </Container>
      <br></br><br></br>
    </>
  );
}

