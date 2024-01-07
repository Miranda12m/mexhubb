import React from "react";
import { Container } from "react-bootstrap";
import BannerServicesES from "../components/services/banners";
import NavbarsES from "../components/services/navbars";
import ServicesOpES from "../components/services/services";
function ServicesScreenES() {
 

  return (
    <>
      <BannerServicesES />
      <NavbarsES />
      <Container>

        <h1
          data-aos="fade-right"
          style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}
        >
          <strong>Conozca Nuestros Servicios</strong>
        </h1>
        <br />
       
        <ServicesOpES />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreenES;
