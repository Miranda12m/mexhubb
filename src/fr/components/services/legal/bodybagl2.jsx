import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomFR from '../../contactbutton';
export default function BodyBagl02FR() {

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
                                <img src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Juridique personnalisé
                                        <span> Assistance</span></h2>
                                    <p>Pour des demandes plus spécifiques ou une assistance personnalisée, nous vous encourageons à prendre rendez-vous personnel avec notre équipe juridique. Mexhubb s'engage à faire en sorte que vous ne vous sentiez jamais seul face aux complexités juridiques. Nous vous soutenons dans toute situation juridique pouvant survenir pendant votre séjour au Mexique.
                                    </p>
                                </div>
                                <p>Notre collaboration avec des professionnels du droit de confiance vise à vous offrir une tranquillité d'esprit, sachant que vous avez un allié juridique fiable à vos côtés. Qu'il s'agisse de questions de visa, de transactions immobilières ou de problèmes juridiques personnels, Mexhubb est là pour vous aider à chaque étape du processus. Planifiez une consultation avec nous et laissez Mexhubb être votre guide à travers le paysage juridique du Mexique.</p>
                                
                                <ContactButtomFR />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}