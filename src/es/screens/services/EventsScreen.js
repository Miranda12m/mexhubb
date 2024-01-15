import React from "react";
import { Container } from "react-bootstrap";
import NavbarsES from "../../components/services/navbars";
import BannerEventsES from "../../components/services/events/bannerevents";
import BodyBage01ES from "../../components/services/events/bodybage1";
import ImaeES from "../../components/services/events/imae";
import BodyBage02ES from "../../components/services/events/bodybage2";

export default function EventsScreenES() {
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
      <BannerEventsES />
      <NavbarsES />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}>
          <strong>Eventos Mexhubb</strong>
        </h1>

        <BodyBage01ES />


      </Container>
      <br></br>
      <div style={{ backgroundColor: 'white' }}>
        <br></br>
        <br></br>
        <Container>
          <h2 style={{ color: 'black', margin: '3%', textAlign: 'center' }} data-aos="fade-right" >Nuestros servicios incluyen,<span style={{ color: '#ff3b19' }}> pero no estan limitados a:</span></h2>
          <ImaeES />

        </Container>
        <br></br><br></br><br></br><br></br>
      </div>
      <br></br><br></br>
      <BodyBage02ES />
      <br></br> <br></br>
    </>
  );
}

