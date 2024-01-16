import React from 'react'
import { Container } from 'react-bootstrap';
import ContactFormES from '../components/contact/ContactForm';
import BannerContactES from '../components/contact/bannerc';
function ContactScreenES() {
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

      <BannerContactES />
      <div style={{ backgroundColor: 'white', width: '100%' }}>

        <br />
        <br />
        <br />
        <h3 data-aos="fade-right" style={{ fontSize: '18px', textAlign: 'center', marginLeft: '20%', marginRight: '20%' }}>Entendemos que el viaje de cada individuo es distinto y nuestro compromiso es adaptar nuestros servicios para ayudarlos en cualquier situación que pueda surgir durante su estadía en México.</h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        <ContactFormES></ContactFormES>
      </Container>

      <br></br>
      <Container>

        <div class="Card">
          <div class="Card-image"></div>
          <div class="Card-body">
            <h1 class="Card-title">Experiencia y soporte</h1>
            <p class="Card-description">
            Nuestro equipo en Mexhubb está compuesto por personas con la experiencia, el conocimiento y los contactos necesarios para guiar a nuestros clientes en sus situaciones de la vida cotidiana. No sólo vemos problemas; Vemos oportunidades para crecer y aprender. Mexhubb está aquí para ti, listo para convertir los desafíos en experiencias positivas.            </p>
          </div>
        </div>

      </Container>
      <br></br><br></br><br></br>
    </>
  )
}

export default ContactScreenES