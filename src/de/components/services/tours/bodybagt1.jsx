import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomDE from '../../contactbutton';
export default function BodyBagt01DE() {
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
                                
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">Einzigartige Perspektive</h4>
                                <p class="text-muted mt-3">Willkommen bei Mexhubb Tours, wo jede Reise eine Erkundung und eine bereichernde Erfahrung ist. Unser Engagement geht über das Anbieten von Touren hinaus - wir haben es uns zur Aufgabe gemacht, das wahre Wesen Mexikos auf einzigartige Weise zu zeigen, indem wir nicht nur die Oberfläche Mexikos zeigen, sondern tiefer in das Verständnis der Kultur selbst eintauchen und Antworten auf jeden Aspekt des Landes finden, den jeder fragen kann. 
</p>
                                <p class="text-muted mt-3">Alle unsere Touren bieten ein umfassendes Paket, das unseren Gästen ein problemloses und angenehmes Erlebnis garantiert. Von der Abholung und Rückgabe an Ihrem Standort bis hin zu einem komfortablen Fahrzeug, einem privaten und erfahrenen Chauffeur, einem sachkundigen Reiseleiter, einer Versicherung während der Reise, Snacks, Erfrischungen und allen Tickets für Sehenswürdigkeiten und Museen - wir kümmern uns um alles.</p>
                                <br></br>
                                <ContactButtomDE />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="img_about mt-3">
                                <img src="https://i.ibb.co/n1BTCRk/image00004-3.webp" alt="" class="img-fluid mx-auto d-block imagenbb" style={{maxHeight:'400px'}} />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}