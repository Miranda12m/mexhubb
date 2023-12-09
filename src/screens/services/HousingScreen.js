import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerHousing from '../../components/services/housing/bannerhousing';
import Navbars from '../../components/services/navbars';
import BodyBag01 from '../../components/services/housing/bodybag1';
import BodyBag02 from '../../components/services/housing/bodybag2';
import Imah from '../../components/services/housing/ima';

export default function HousingScreen() {

  return (
    <>
    <BannerHousing />
    <Navbars />
    <Container>


      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Housing</strong></h1>
  
      <BodyBag01 />
      <Imah />
      <BodyBag02 />
    </Container>
    </>
  );
}
