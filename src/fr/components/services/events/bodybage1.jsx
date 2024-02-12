import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomFR from '../../contactbutton';
export default function BodyBage01FR() {
    return (
        <>
            <style>
                {`
        h1, h2, h3, h4, h5, h6 {
            color: #2c3145;
        }
        a, a:hover, a:focus, a:active {
            text-decoration: none;
            outline: none;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        
        .section_all {
            position: relative;
        
            padding-bottom: 50px;
        }
        .section-title {
            font-weight: 700;
            text-transform: capitalize;
            letter-spacing: 1px;
        }
        
        .section-subtitle {
            letter-spacing: 0.4px;
            line-height: 28px;
            max-width: 550px;
        }
        
        .section-title-border {
            background-color: #000;
            height: 1 3px;
            width: 44px;
        }
        
        .section-title-border-white {
            background-color: #fff;
            height: 2px;
            width: 100px;
        }
        .text_custom {
            color: #FF3B19;
        }
        
        .about_icon i {
            font-size: 22px;
            height: 65px;
            width: 65px;
            line-height: 65px;
            display: inline-block;
            background: #fff;
            border-radius: 35px;
            color: #00bd2a;
            box-shadow: 0 8px 20px -2px rgba(158, 152, 153, 0.5);
        }
        
        .about_header_main .about_heading {
            max-width: 450px;
            font-size: 24px;
        }
        
        .about_icon span {
            position: relative;
            top: -10px;
        }
        
        .about_content_box_all {
            padding: 28px;
        }
        .imagenbb {
            box-shadow: 0 30px 50px rgba(8,13,62,.15);
        }
        
        `}

            </style>
            <Container>

            
            <section class="section_all" id="about">
                <div class="container">
                    <div class="row vertical_content_manage mt-5">
                        <div class="col-lg-6" data-aos="fade-right">
                            <div class="about_header_main mt-3">
                                
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">Mexhubb Events est plus qu'une agence</h4>
                                <p class="text-muted mt-3">Mexhubb Events est plus qu'une agence ; nous sommes une communauté dynamique qui offre des expériences authentiques et mémorables. Nés de la passion de partager nos expériences avec le monde, nous offrons l'accès à des lieux exclusifs et à des activités spéciales. Chaque événement est adapté à vos préférences, garantissant que chaque instant soit authentiquement le vôtre. Rejoignez-nous et vivez la magie des événements Mexhubb ! </p>
                                <p class="text-muted mt-3">Chez Mexhubb, nous pensons que voyager ne se limite pas à visiter des lieux ; il s'agit de vivre des expériences, de rencontrer de nouvelles personnes, de découvrir différentes cultures et de créer des souvenirs inoubliables. Venez nous rejoindre pour profiter de tout ce que le Mexique a à offrir !</p>
                                <br></br>
                                <ContactButtomFR />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="img_about mt-3">
                                <img src="https://i.ibb.co/9cw8QYh/20231222-152528.jpg" alt="" class="img-fluid mx-auto d-block imagenbb" style={{maxHeight:'370px'}} />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}