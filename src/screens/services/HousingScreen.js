import React from 'react';
import { Container } from 'react-bootstrap';
import BannerHousing from '../../components/services/housing/bannerhousing';
import Navbars from '../../components/services/navbars';
import BodyBag01 from '../../components/services/housing/bodybag1';
import BodyBag02 from '../../components/services/housing/bodybag2';
import Imah from '../../components/services/housing/ima';
import Houses from '../../components/services/housing/houses';
export default function HousingScreen() {

  return (
    <>
      <BannerHousing />
      <Navbars />
      <Container>


        <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Housing</strong></h1>
        <BodyBag01 />
        <br></br>
      </Container>
      <div style={{ backgroundColor: ' #f5f5f4' }}>
        <Container>
          <br></br>
          <h2 style={{ color: 'black', marginTop: '3%', textAlign: 'center' }} data-aos="fade-right" >See whats new in our <span style={{ color: '#ff3b19' }}>Housing</span></h2>
          <p style={{ color: 'black', textAlign: 'center', fontSize:'13px' }}>*The dollar costs of the properties are approximate*</p>
          <Houses />
          <br></br>
        </Container>
      </div>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Why Choose Mexhubb for <span style={{ color: '#ff3b19' }}>Housing</span>?</h2>
          <Imah />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <Container>
        <br></br><br></br>
        <BodyBag02 />
        <br></br><br></br>
      </Container>

    </>
  );
}
