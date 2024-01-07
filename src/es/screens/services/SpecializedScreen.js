import React from 'react';
import { Container} from 'react-bootstrap';
import SpecializedES from '../../components/services/specialized/bannerspecialized';
import NavbarsES from '../../components/services/navbars';
import BodyBags01ES from '../../components/services/specialized/bodybags1';
import BodyBags02ES from '../../components/services/specialized/bodybags2';
import ImasES from '../../components/services/specialized/imas';
export default function SpecializedScreenES() {

  return (
    <>
      <SpecializedES />
      <NavbarsES />

      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Servicios Especializados con Mexhubb</strong></h1>
        <BodyBags01ES />
      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" > Explore nuestras categorías de<span style={{ color: '#ff3b19' }}> servicios especializados:</span></h2>
          <ImasES />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <Container>
        <BodyBags02ES />
      </Container>
      <br></br><br></br>
    </>
  );
}

