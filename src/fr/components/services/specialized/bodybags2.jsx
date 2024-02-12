import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomFR from '../../contactbutton';

export default function BodyBags02FR() {

    return (
        <>
            <style>
                {`
    .about {
        padding: 40px 0;
    }
    
    .about .heading h2 {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
        padding: 0;
    
    }
    
    .about .heading h2 span {
        color: #FF3B19;
    }
    
    .about .heading p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.7;
        color: black;
        padding: 0;
    }
    
    .about h3 {
        font-size: 25px;
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
    
    .about p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.7;
        color: black;
        margin: 20px 0 15px;
        padding: 0;
    }
    
    .about h4 {
        font-size: 15px;
        font-weight: 500;
        margin: 8px 0;
    }
    
    .about h4 i {
        color: #F24259;
        margin-right: 10px;
    }
    .imagenbb {
        box-shadow: 0 30px 50px rgba(8,13,62,.15);
    }
                 `}
            </style>
            <Container>


                <section class="about" id="about">
                    <div class="container" >

                        <div class="row">
                            <div class="col-lg-6" data-aos='fade-right' style={{marginBottom:'20px'}}>
                                <img src="https://i.ibb.co/5jnkxff/IMG-7481.jpg" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}} />
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Vos solutions,
                                        <span> Pas de problèmes</span></h2>
                                    <p>Notre objectif est de proposer des solutions plutôt que des problèmes. Quelle que soit la spécificité de votre demande, Mexhubb s'engage à faire un effort supplémentaire pour vous aider. Nous voulons nous assurer que votre séjour au Mexique se déroule sans tracas, rendant votre vie plus facile et plus agréable.
                                    </p>
                                </div>
                                <p>Si vous avez besoin d’un service, nommez-le simplement et nous le couvrirons. Mexhubb est votre destination unique pour une gamme diversifiée de services spécialisés. Laissez-nous rendre votre séjour au Mexique exceptionnel.</p>
                                <p>Planifiez une consultation avec nous et laissez Mexhubb être votre guide au Mexique.</p>
                                <br></br>
                                <ContactButtomFR />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}