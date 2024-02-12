import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomES from '../../contactbutton';
export default function BodyBagl02ES() {

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
                                <img src="https://i.ibb.co/5MZjt4w/image00045-4.jpg" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Asistencia Legal
                                        <span> Personalizada</span></h2>
                                    <p>Para consultas más específicas o asistencia personalizada, le recomendamos programar una cita personal con nuestro equipo legal. Mexhubb se compromete a garantizar que usted nunca se sienta solo al navegar por las complejidades legales. Te respaldamos en cualquier situación legal que pueda surgir durante tu estancia en México.
                                    </p>
                                </div>
                                <p>Nuestra colaboración con profesionales legales de confianza tiene como objetivo brindarle la tranquilidad de saber que tiene un aliado legal confiable a su lado. Ya sea que se trate de asuntos de visa, transacciones de bienes raíces o inquietudes legales personales, Mexhubb está aquí para ayudarlo en cada paso del camino. Programe una consulta con nosotros y deje que Mexhubb sea su guía a través del panorama legal en México.</p>
                                
                                <ContactButtomES />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}