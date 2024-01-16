import React from 'react'
import { Container } from 'react-bootstrap';
import ContactFormDE from '../components/contact/ContactForm';
import BannerContactDE from '../components/contact/bannerc';
function ContactScreenDE() {
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

      <BannerContactDE />
      <div style={{ backgroundColor: 'white', width: '100%' }}>

        <br />
        <br />
        <br />
        <h3 data-aos="fade-right" style={{ fontSize: '18px', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>Wir verstehen, dass die Reise jedes Einzelnen anders ist, und unser Ziel ist es, unsere Dienstleistungen so anzupassen, dass sie ihnen in jeder Situation helfen, die während ihres Aufenthalts in Mexiko auftreten kann.</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        <ContactFormDE ></ContactFormDE >
      </Container>

      <br></br>
      <Container>

        <div class="Card">
          <div class="Card-image"></div>
          <div class="Card-body">
            <h1 class="Card-title">Fachwissen und Support</h1>
            <p class="Card-description">
            Unser Team bei Mexhubb besteht aus Personen mit der Erfahrung, dem Wissen und den Kontakten, die erforderlich sind, um unsere Kunden durch ihre Alltagssituationen zu begleiten. Wir sehen nicht nur Probleme; Wir sehen Möglichkeiten zum Wachsen und Lernen. Mexhubb ist für Sie da und bereit, Herausforderungen in positive Erfahrungen zu verwandeln.
            </p>
          </div>
        </div>

      </Container>
      <br></br><br></br><br></br>
    </>
  )
}

export default ContactScreenDE