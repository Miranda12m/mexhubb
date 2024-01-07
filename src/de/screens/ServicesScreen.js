import React from "react";
import { Container } from "react-bootstrap";
import BannerServicesDE from "../components/services/banners";
import NavbarsDE from "../components/services/navbars";
import ServicesOpDE from "../components/services/services";
function ServicesScreenDE() {
 

  return (
    <>
      <BannerServicesDE />
      <NavbarsDE />
      <Container>

        <h1
          data-aos="fade-right"
          style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}
        >
          <strong>Know About Our Services</strong>
        </h1>
        <br />
       
        <ServicesOpDE />
        <br />
      </Container>
    </>
  );
}

export default ServicesScreenDE;
