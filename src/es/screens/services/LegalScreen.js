import React from 'react';
import { Container} from 'react-bootstrap';
import BannerLegalES from '../../components/services/legal/bannerlegal';
import NavbarsES from '../../components/services/navbars';
import BodyBagl01ES from '../../components/services/legal/bodybagl1';
import BodyBagl02ES from '../../components/services/legal/bodybagl2';
import ImalES from '../../components/services/legal/imal';
export default function LegalScreenES() {

  return (
    <>
    <BannerLegalES />
    <NavbarsES />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Servicios Legales con Mexhubb</strong></h1>
      <BodyBagl01ES />
    </Container>
    <div style={{backgroundColor:'white'}}>
    <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Servicios Que<span style={{ color: '#ff3b19' }}> Ofrecemos</span></h2>
          <ImalES />

        </Container>
        <br></br><br></br><br></br><br></br>
    </div>
    <Container>
    <br></br><br></br>
    <BodyBagl02ES />
    <br></br><br></br>
    </Container>
    </>
  );
}

 