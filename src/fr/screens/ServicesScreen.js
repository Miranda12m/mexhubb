import React from "react";
import { Container } from "react-bootstrap";
import BannerServicesFR from "../components/services/banners";
import NavbarsFR from "../components/services/navbars";
import ServicesOpFR from "../components/services/services";
function ServicesScreenFR() {
 

  return (
    <>
      <BannerServicesFR />
      <NavbarsFR />
      <Container>

        <h1
          data-aos="fade-right"
          style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}
        >
          <strong>Connaître nos services</strong>
        </h1>
        <br />
       
        <ServicesOpFR />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreenFR;
