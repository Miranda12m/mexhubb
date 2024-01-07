import React from 'react';
import { Container } from 'react-bootstrap';
import BannerHousingFR from '../../components/services/housing/bannerhousing';
import NavbarsFR from '../../components/services/navbars';
import BodyBag01FR from '../../components/services/housing/bodybag1';
import BodyBag02FR from '../../components/services/housing/bodybag2';
import ImahFR from '../../components/services/housing/ima';
import HousesFR from '../../components/services/housing/houses';
export default function HousingScreenFR() {

  return (
    <>
      <BannerHousingFR />
      <NavbarsFR />
      <Container>


        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Housing</strong></h1>
        <BodyBag01FR />
        <br></br>
      </Container>
      <div style={{ backgroundColor: ' #f5f5f4' }}>
        <Container>
          <br></br>
          <h2 style={{ color: 'black', marginTop: '3%', textAlign: 'center' }} data-aos="fade-right" >Découvrez les nouveautés de notre <span style={{ color: '#ff3b19' }}>Logement</span></h2>
          <p style={{ color: 'black', textAlign: 'center', fontSize:'13px' }} data-aos="fade-right" >*Les coûts en dollars des propriétés sont approximatifs*</p>
          <HousesFR />
          <br></br>
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Pourquoi choisir Mexhubb pour <span style={{ color: '#ff3b19' }}>Logement</span>?</h2>
          <ImahFR />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <Container>
        <br></br><br></br>
        <BodyBag02FR />
        <br></br><br></br>
      </Container>

    </>
  );
}
