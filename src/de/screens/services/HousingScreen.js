import React from 'react';
import { Container } from 'react-bootstrap';
import BannerHousingDE from '../../components/services/housing/bannerhousing';
import NavbarsDE from '../../components/services/navbars';
import BodyBag01DE from '../../components/services/housing/bodybag1';
import BodyBag02DE from '../../components/services/housing/bodybag2';
import ImahDE from '../../components/services/housing/ima';
import HousesDE from '../../components/services/housing/houses';
export default function HousingScreenDE() {

  return (
    <>
      <BannerHousingDE />
      <NavbarsDE />
      <Container>


        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Gehäuse</strong></h1>
        <BodyBag01DE />
        <br></br>
      </Container>
      <div style={{ backgroundColor: ' #f5f5f4' }}>
        <Container>
          <br></br>
          <h2 style={{ color: 'black', marginTop: '3%', textAlign: 'center' }} data-aos="fade-right" >Sehen Sie, was es Neues in unserem gibt <span style={{ color: '#ff3b19' }}>Gehäuse</span></h2>
          <p style={{ color: 'black', textAlign: 'center', fontSize:'13px' }} data-aos="fade-right" >*Die Dollarkosten der Immobilien sind ungefähre Angaben*</p>
          <HousesDE />
          <br></br>
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Warum sollten Sie sich für Mexhubb entscheiden <span style={{ color: '#ff3b19' }}>Gehäuse</span>?</h2>
          <ImahDE />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <Container>
        <br></br><br></br>
        <BodyBag02DE />
        <br></br><br></br>
      </Container>

    </>
  );
}
