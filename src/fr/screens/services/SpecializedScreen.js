import React from 'react';
import { Container} from 'react-bootstrap';
import SpecializedFR from '../../components/services/specialized/bannerspecialized';
import NavbarsFR from '../../components/services/navbars';
import BodyBags01FR from '../../components/services/specialized/bodybags1';
import BodyBags02FR from '../../components/services/specialized/bodybags2';
import ImasFR from '../../components/services/specialized/imas';
export default function SpecializedScreen() {

  return (
    <>
      <SpecializedFR />
      <NavbarsFR />

      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Services spécialisés avec Mexhubb</strong></h1>
        <BodyBags01FR />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" > Découvrez nos spécialités<span style={{ color: '#ff3b19' }}> catégories de services :</span></h2>
          <ImasFR />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <Container>
        <BodyBags02FR />
      </Container>
      <br></br><br></br>
    </>
  );
}

