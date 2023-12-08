import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tour from '../../components/services/Tour';
import { Container, Row, Col } from 'react-bootstrap';
import BannerTour from '../../components/services/bannerservices/bannertour';
import Navbars from '../../components/services/navbars';
import BodyBag01 from '../../components/services/housing/bodybag1';
import BodyBag02 from '../../components/services/housing/bodybag2';
function TourScreen() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/tours/api/v1/tours/');
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <BannerTour />
    <Navbars />
    <Container>


      <h1 data-aos="fade-right" style={{ borderBottom: '1px solid #2f2f2f', marginBottom: '15px' }}><strong>Housing</strong></h1>
  
      <BodyBag01 />
      <BodyBag02 />
    </Container>
    </>
  );
}

export default TourScreen;