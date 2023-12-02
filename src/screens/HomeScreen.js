import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramEmbed from '../components/home/Instagram';
import Carousel from '../components/home/banner';
import Services from '../components/home/services';
import { FaFacebook, FaTwitter, FaInstagram, FaEvernote } from 'react-icons/fa';
import Alianzas from '../components/home/alianzas';
import Testimonials from '../components/home/testimonials';
import Qt from '../components/home/qt';
import Team from '../components/home/team';
function HomeScreen() {
  return (
    <>

      <Carousel />
      <Alianzas />
      <Services />
      <div style={{ backgroundColor: 'white' }}>
      

      <Testimonials />
      </div>
      <Qt />
      <br></br>
      <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                `}
      </style>
      <Container>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '3%',
            marginBottom: '3%',

          }}
        >
          <Row >
            
            <Col>
              <div data-aos="fade-right"
                style={{
                  flex: 1,
                  order: 2,
                }}
              >
                <h2 style={{ marginTop: '4%' }}><strong>About <span style={{color: '#eb3d90'}}> Us</span></strong></h2>
                <p style={{ marginTop: '4%' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                {/*  <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                  <button onClick={() => window.location.href = '/#/contact'} className="btn btn-primary button-hover" style={{ verticalAlign: 'center', margin: 'auto', alignSelf: 'center' }}>Contact Us</button>

                </div> */}
               
                <Row className="mt-5" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginBottom: '10%' }}>
                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#3b5998' }} onClick={() => window.open('#', '_blank')}>
                      <FaFacebook size={20} style={{ marginRight: '10px' }} /> Facebook
                    </button>
                  </Col>

                  <Col>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#ac2bac' }} onClick={() => window.open('#', '_blank')}>
                      <FaInstagram size={20} style={{ marginRight: '10px' }} />Instagram
                    </button>
                  </Col>
                  <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <button className='m-1 btn btn-primary button-hover' style={{ backgroundColor: '#1da0f1' }} onClick={() => window.open('#', '_blank')}>
                      <FaTwitter size={20} style={{ marginRight: '10px' }} />Twitter 
                    </button>
                  </Col>
                </Row>
              </div>

            </Col>
            <Col>
              <div style={{ flex: 1, order: 1, position: 'relative', marginLeft: '10%', marginTop: '5%' }} data-aos="fade-up">
                <img
                  src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="About Us"
                  style={{ maxWidth: '87%', minWidth: '300px', height: 'auto', borderRadius: '2%', boxShadow:' 0px 0px 15px rgba(0, 0, 0, 0.3)' }}
                />
                
              </div>
            </Col>
            
          </Row>
          <br></br><br></br><br></br><br></br>   
        </div>
        <br></br>
      </Container>
      <div style={{ backgroundColor: 'white' }}>
      

      <Team />
      </div>
  

    </>

  );
}

export default HomeScreen;

