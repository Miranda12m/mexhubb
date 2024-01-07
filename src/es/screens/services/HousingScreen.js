import React from 'react';
import { Container } from 'react-bootstrap';
import BannerHousingES from '../../components/services/housing/bannerhousing';
import NavbarsES from '../../components/services/navbars';
import BodyBag01ES from '../../components/services/housing/bodybag1';
import BodyBag02ES from '../../components/services/housing/bodybag2';
import ImahES from '../../components/services/housing/ima';
import HousesES from '../../components/services/housing/houses';
export default function HousingScreenES() {

  return (
    <>
      <BannerHousingES />
      <NavbarsES />
      <Container>


        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Alojamiento</strong></h1>
        <BodyBag01ES />
        <br></br>
      </Container>
      <div style={{ backgroundColor: ' #f5f5f4' }}>
        <Container>
          <br></br>
          <h2 style={{ color: 'black', marginTop: '3%', textAlign: 'center' }} data-aos="fade-right" >Ve que hay de nuevo en nuestro <span style={{ color: '#ff3b19' }}> alojamiento</span></h2>
          <p style={{ color: 'black', textAlign: 'center', fontSize:'13px' }} data-aos="fade-right" >*Los costos en dólares de las propiedades son aproximados*</p>
          <HousesES />
          <br></br>
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Porque elegir Mexhuub para <span style={{ color: '#ff3b19' }}>Alojamiento</span>?</h2>
          <ImahES />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <Container>
        <br></br><br></br>
        <BodyBag02ES />
        <br></br><br></br>
      </Container>

    </>
  );
}
