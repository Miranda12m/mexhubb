import React from 'react'
import { Container } from 'react-bootstrap';
import ContactForm from '../components/contact/ContactForm';
import BannerContact from '../components/contact/bannerc';
function ContactScreen() {
  return (
    <>
      <style>
        {`
      .Card {
        display: flex;
        justify-content: center;
        margin: auto;
        min-height: 24rem;
      }
        .Card-image {
          flex-basis: 50%;
          background-image: 
            url(https://images.unsplash.com/photo-1565670105658-ea35d27f7de7?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
          background-position: right;
          background-size: cover;
          background-repeat: no-repeat;
          box-shadow: 0 30px 50px rgba(8,13,62,.15);
        }
        .Card-body {
          --margin: 2em;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 60%;
          
          margin-top: var(--margin);
          margin-bottom: var(--margin);
          margin-left: -4em;
          padding: 0 1.4em;
          background-color: #fff;
          box-shadow: rgba(0,0,0,.2) 0 .2em .2em;
        }
        .Card-title { 
          margin-bottom: .4em; 
          margin-top: .4em; 
        }

      `}
      </style>

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

        <div class="Card">
          <div class="Card-image"></div>
          <div class="Card-body">
            <h1 class="Card-title">Expertise and Support</h1>
            <p class="Card-description">
            Our team at Mexhubb comprises individuals with the experience, knowledge, and contacts needed to guide our clients through their everyday life situations. We don't just see problems; we see opportunities to grow and learn. Mexhubb is here for you, ready to turn challenges into positive experiences.
            </p>
          </div>
        </div>

      </Container>
      <br></br><br></br><br></br>
    </>
  )
}

export default ContactScreen