import React from 'react';
import { Container} from 'react-bootstrap';
import SpecializedDE from '../../components/services/specialized/bannerspecialized';
import NavbarsDE from '../../components/services/navbars';
import BodyBags01DE from '../../components/services/specialized/bodybags1';
import BodyBags02DE from '../../components/services/specialized/bodybags2';
import ImasDE from '../../components/services/specialized/imas';
export default function SpecializedScreenDE() {

  return (
    <>
      <SpecializedDE />
      <NavbarsDE />

      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Spezialisierte Dienstleistungen mit Mexhubb</strong></h1>
        <BodyBags01DE />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" > Entdecken Sie unsere Spezialisierung<span style={{ color: '#ff3b19' }}>  Leistungskategorien:</span></h2>
          <ImasDE />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <Container>
        <BodyBags02DE />
      </Container>
      <br></br><br></br>
    </>
  );
}

