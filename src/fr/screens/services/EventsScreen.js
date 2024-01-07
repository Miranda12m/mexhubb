import React from "react";
import { Container } from "react-bootstrap";
import NavbarsFR from "../../components/services/navbars";
import BannerEventsFR from "../../components/services/events/bannerevents";
import BodyBage01FR from "../../components/services/events/bodybage1";
import ImaeFR from "../../components/services/events/imae";
import BodyBage02FR from "../../components/services/events/bodybage2";

export default function EventsScreenFR() {
  return (
    <>
      <style>
        {`
                  .mdb-card:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }

                  .button-hover:hover {
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                    transform: scale(1.02);
                    transition: all 0.2s ease-in-out;
                }

                `}
      </style>
      <BannerEventsFR />
      <NavbarsFR />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}>
          <strong>Événements Mexhubb</strong>
        </h1>

        <BodyBage01FR />


      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Nos services comprennent,<span style={{ color: '#ff3b19' }}> mais ne sont pas limités à:</span></h2>
          <ImaeFR />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <BodyBage02FR />
      <br></br> <br></br>
    </>
  );
}

