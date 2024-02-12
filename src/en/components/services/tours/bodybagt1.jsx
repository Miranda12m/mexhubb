import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtom from '../../contactbutton';
export default function BodyBagt01() {
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
                                
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">A Unique Perspective</h4>
                                <p class="text-muted mt-3">Welcome to Mexhubb Tours, where every journey is an exploration and an enriching experience. Our commitment goes beyond offering tours – we're dedicated to showcasing the true essence of Mexico in an unique way by showing not only Mexico's surface but diving deeper into understanding the culture itself and finding answers for every aspect of the country for anyone to ask. 
</p>
                                <p class="text-muted mt-3">All our tours offer a comprehensive package, ensuring a hassle-free and enjoyable experience for our guests. From pick-up and drop-off at your location to a comfortable vehicle, a private and experienced chauffeur, a knowledgeable tour guide, insurance during the trip, snacks, refreshments, and all tickets to attractions and museums – we take care of everything.</p>
                                <br></br>
                                <ContactButtom />
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up">
                            <div class="img_about mt-3">
                                <img src="https://i.ibb.co/gM10SPQ/image00004-3.jpg" alt="" class="img-fluid mx-auto d-block imagenbb" style={{maxHeight:'400px'}} />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}