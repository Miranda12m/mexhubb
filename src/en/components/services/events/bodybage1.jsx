import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtom from '../../contactbutton';
export default function BodyBage01() {
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
                                
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">Mexhubb Events is more than an agency</h4>
                                <p class="text-muted mt-3">Mexhubb Events is more than an agency; we are a vibrant community that provides authentic and memorable experiences. Born out of a passion for sharing our experiences with the world, we offer access to exclusive places and special activities. Each event is tailored to your preferences, ensuring that every moment is authentically yours. Join us and experience the magic of Mexhubb Events! </p>
                                <p class="text-muted mt-3">At Mexhubb, we believe that traveling is more than just visiting places; it’s about living experiences, meeting new people, learning about different cultures, and creating unforgettable memories. Come and join us to enjoy all that Mexico has to offer!</p>
                                <br></br>
                                <ContactButtom />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="img_about mt-3">
                                <img src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid mx-auto d-block imagenbb" style={{maxHeight:'370px'}} />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}