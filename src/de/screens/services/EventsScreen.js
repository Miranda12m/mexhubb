import React from "react";
import { Container } from "react-bootstrap";
import NavbarsDE from "../../components/services/navbars";
import BannerEventsDE from "../../components/services/events/bannerevents";
import BodyBage01DE from "../../components/services/events/bodybage1";
import ImaeDE from "../../components/services/events/imae";
import BodyBage02DE from "../../components/services/events/bodybage2";

export default function EventsScreenDE() {
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
      <BannerEventsDE />
      <NavbarsDE />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}>
          <strong>Mexhubb-Veranstaltungen</strong>
        </h1>

        <BodyBage01DE />


      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Zu unseren Dienstleistungen gehören,<span style={{ color: '#ff3b19' }}> sind aber nicht beschränkt auf:</span></h2>
          <ImaeDE />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <BodyBage02DE />
      <br></br> <br></br>
    </>
  );
}

