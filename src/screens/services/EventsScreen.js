import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbars from "../../components/services/navbars";
import BannerEvents from "../../components/services/events/bannerevents";
import { Link } from "react-router-dom";
import BodyBage01 from "../../components/services/events/bodybage1";
export default function EventsScreen() {
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
      <BannerEvents />
      <Navbars />
      <Container>
        <h1 data-aos="fade-right" style={{ borderBottom: "1px solid #2f2f2f", marginBottom: "15px" }}>
          <strong>Mexhubb Events</strong>
        </h1>
     
        <BodyBage01 />

    
      </Container>
      <br></br>
    </>
  );
}

