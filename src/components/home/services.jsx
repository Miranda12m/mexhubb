import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
export default function Services() {
    AOS.init();
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

            <h1 style={{ textAlign: 'center', marginBottom: '2%', marginTop: '5%' }}><strong>Services</strong></h1>


            <div data-aos="zoom-in-down">


                <Container style={{ marginBottom: '3%' }}>
                    <Row style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '5%' }}>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/services'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                                    position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Know about our Services</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/services'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/services'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }}>
                                    <MDBCardImage src='https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                                    position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Mexhubb Experience</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/services'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                        <Col style={{ marginBottom: '4%' }}>
                            <Link to='/contact'>
                                <MDBCard className="mdb-card" style={{ minWidth: '300px', marginLeft: '5%', marginRight: '5%', marginBottom: '5%' }} >
                                    <MDBCardImage src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                    position='top' style={{ borderRadius: "1.2%" }} alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><strong>Contact Us</strong></MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                            <Link to='/contact'>
                                                <button className="btn btn-primary button-hover" type="button" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>See more</button>
                                            </Link>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
