import React from "react";
import { Container } from "react-bootstrap";
import BannerServices from "../components/services/banners";
import Navbars from "../components/services/navbars";
import ServicesOp from "../components/services/services";
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
       
        <ServicesOp />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreen;
