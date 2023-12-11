import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import BannerContact from '../components/contact/bannerc';
import Qt from '../components/home/qt';
function ContactScreen() {
  return (
    <>
      <BannerContact />
      <div style={{ backgroundColor: 'white', width: '100%' }}>

        <br />
        <br />
        <br />
        <h3 data-aos="fade-right" style={{ fontSize: '18px', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>We understand that each individual's journey is distinct, and our commitment is to tailor our services to aid them in any situation that may arise during their time in Mexico.</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        <ContactForm></ContactForm>
      </Container>

      <br></br>
      <Container>

        <Card className="my-4 p-3" data-aos="fade-right" style={{ boxShadow: ' 0px 0px 15px rgba(0, 0, 0, 0.3)' }}>
          <Row noGutters>
            <Col md={4}>
              <Image

                src="https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Info Image"
                fluid
                style={{ borderRadius: "1.2%" }}
              />
            </Col>
            <Col md={7}>
              <Card.Body >
                <h3 style={{marginBottom:'3%'}}>Expertise and Support</h3>
                <p style={{marginBottom:'3.5%'}}>
                Our team at Mexhubb comprises individuals with the experience, knowledge, and contacts needed to guide our clients through their everyday life situations. We don't just see problems; we see opportunities to grow and learn. Mexhubb is here for you, ready to turn challenges into positive experiences.
                </p>
                
                <Row  style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '3%' }}>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.open('https://www.facebook.com/profile.php?id=61554405899957', '_blank')}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.open('https://www.instagram.com/mexhubb/', '_blank')}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ff4500' }} onClick={() => window.open('#', '_blank')}>
                      <FaEvernote size={20} style={{ marginRight: '10px' }} />Eventbrite
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
     
      </Container>
      <br></br><br></br>
    </>
  )
}

export default ContactScreen