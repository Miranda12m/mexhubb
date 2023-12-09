import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BannerServices from "../components/services/banners";
import Recomendation from "../components/Recomendation";
import Navbars from "../components/services/navbars";

function ServicesScreen() {
 

  return (
    <>
      <BannerServices />
      <Navbars />
      <Container>



        <h1
          data-aos="fade-right"
          style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}
        >
          <strong>Know About Our Services</strong>
        </h1>
        <br />
       
        <br />
        <Recomendation />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreen;
