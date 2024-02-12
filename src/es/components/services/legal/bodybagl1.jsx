import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomES from '../../contactbutton';
export default function BodyBagl01ES() {
    return (
        <>
            <style>
                {`
        h1, h2, h3, h4, h6 {
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
        .point {
            font-size: 15px;
            font-weight: 500;
            margin: 8px 0;
        }
        
        .point h5 i {
            color: #F24259;
            margin-right: 10px;
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
                                
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">Tu aliado legal en mexico</h4>
                                <p class="text-muted mt-3">Bienvenido a los Servicios Legales de Mexhubb, donde nos asociamos con abogados, bufetes de abogados y notarías de renombre para brindar una gama integral de asistencia legal. Nuestro enfoque colaborativo garantiza que usted reciba orientación y apoyo expertos en diversos asuntos legales. Estos son algunos de los servicios legales que ofrecemos en colaboración con nuestros estimados socios:</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Visas y Residencia</h5>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Asuntos familiares y personales</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Transacciones inmobiliarias</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Servicios empresariales y corporativos</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Asuntos Internacionales</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class='point'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Representacion Legal</h4>
                                    </div>
                                </div>
                                <br></br>
                                <ContactButtomES />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="img_about mt-3">
                                <img src="https://i.ibb.co/3YhXCDP/image00019-3.jpg" alt="" class="img-fluid mx-auto d-block imagenbb" style={{maxHeight:'370px'}} />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}