import React from 'react';
import { Container} from 'react-bootstrap';
import BannerLegal from '../../components/services/legal/bannerlegal';
import Navbars from '../../components/services/navbars';
import BodyBagl01 from '../../components/services/legal/bodybagl1';
import BodyBagl02 from '../../components/services/legal/bodybagl2';
import Imal from '../../components/services/legal/imal';
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
    <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Services That<span style={{ color: '#ff3b19' }}> We Offer</span></h2>
          <Imal />

        </Container>
        <br></br><br></br><br></br><br></br>
    </div>
    <Container>
    <br></br><br></br>
    <BodyBagl02 />
    <br></br><br></br>
    </Container>
    </>
  );
}

 