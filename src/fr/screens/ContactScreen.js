import React from 'react'
import { Container } from 'react-bootstrap';
import ContactFormFR from '../components/contact/ContactForm';
import BannerContactFR from '../components/contact/bannerc';
function ContactScreenFR() {
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
            url(https://i.ibb.co/V9qVz3c/image00074-3.jpg);
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

      <BannerContactFR />
      <div style={{ backgroundColor: 'white', width: '100%' }}>

        <br />
        <br />
        <br />
        <h3 data-aos="fade-right" style={{ fontSize: '18px', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>Nous comprenons que le parcours de chaque individu est distinct et notre engagement est d'adapter nos services pour les aider dans toute situation pouvant survenir pendant leur séjour au Mexique.</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        <ContactFormFR></ContactFormFR>
      </Container>

      <br></br>
      <Container>

        <div class="Card">
          <div class="Card-image"></div>
          <div class="Card-body">
            <h1 class="Card-title">Expertise et accompagnement</h1>
            <p class="Card-description">
            Notre équipe chez Mexhubb est composée de personnes possédant l'expérience, les connaissances et les contacts nécessaires pour guider nos clients dans leurs situations de la vie quotidienne. Nous ne voyons pas seulement des problèmes ; nous voyons des opportunités de grandir et d’apprendre. Mexhubb est là pour vous, prêt à transformer les défis en expériences positives.
            </p>
          </div>
        </div>

      </Container>
      <br></br><br></br><br></br>
    </>
  )
}

export default ContactScreenFR