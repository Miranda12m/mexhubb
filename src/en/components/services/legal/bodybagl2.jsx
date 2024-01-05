import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtom from '../../contactbutton';
export default function BodyBagl02() {

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
                                <img src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Personalized Legal
                                        <span> Assistance</span></h2>
                                    <p>For more specific inquiries or personalized assistance, we encourage you to schedule a personal appointment with our legal team. Mexhubb is committed to ensuring that you never feel alone in navigating legal complexities. We have your back in any legal situation that may arise during your stay in Mexico.
                                    </p>
                                </div>
                                <p>Our collaboration with trusted legal professionals aims to provide you with peace of mind, knowing that you have a reliable legal ally by your side. Whether it's visa matters, real estate transactions, or personal legal concerns, Mexhubb is here to assist you every step of the way. Schedule a consultation with us, and let Mexhubb be your guide through the legal landscape in Mexico.</p>
                                
                                <ContactButtom />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}