import React from 'react';
import { Container} from 'react-bootstrap';
import BannerLegalDE from '../../components/services/legal/bannerlegal';
import NavbarsDE from '../../components/services/navbars';
import BodyBagl01DE from '../../components/services/legal/bodybagl1';
import BodyBagl02DE from '../../components/services/legal/bodybagl2';
import ImalDE from '../../components/services/legal/imal';
export default function LegalScreenDE() {

  return (
    <>
    <BannerLegalDE />
    <NavbarsDE />
    <Container>
      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Rechtsdienstleistungen mit Mexhubb</strong></h1>
      <BodyBagl01DE />
    </Container>
    <div style={{backgroundColor:'white'}}>
    <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Dienstleistungen Das<span style={{ color: '#ff3b19' }}> Wir bieten</span></h2>
          <ImalDE />

        </Container>
        <br></br><br></br><br></br><br></br>
    </div>
    <Container>
    <br></br><br></br>
    <BodyBagl02DE />
    <br></br><br></br>
    </Container>
    </>
  );
}

 