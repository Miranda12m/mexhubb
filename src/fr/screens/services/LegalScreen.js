import React from 'react';
import { Container} from 'react-bootstrap';
import BannerLegalFR from '../../components/services/legal/bannerlegal';
import NavbarsFR from '../../components/services/navbars';
import BodyBagl01FR from '../../components/services/legal/bodybagl1';
import BodyBagl02FR from '../../components/services/legal/bodybagl2';
import ImalFR from '../../components/services/legal/imal';
export default function LegalScreenFR() {

  return (
    <>
    <BannerLegalFR />
    <NavbarsFR />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Services juridiques avec Mexhubb</strong></h1>
      <BodyBagl01FR />
    </Container>
    <div style={{backgroundColor:'white'}}>
    <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Des services qui<span style={{ color: '#ff3b19' }}> Nous offrons</span></h2>
          <ImalFR />

        </Container>
        <br></br><br></br><br></br><br></br>
    </div>
    <Container>
    <br></br><br></br>
    <BodyBagl02FR />
    <br></br><br></br>
    </Container>
    </>
  );
}

 