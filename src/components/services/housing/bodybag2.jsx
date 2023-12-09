import React from 'react';
import { Container } from 'react-bootstrap';

export default function BodyBag02() {

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
        color: #999999;
        margin: 20px 0 60px;
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
        color: #999999;
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

                 `}
            </style>
            <Container>


                <section class="about" id="about">
                    <div class="container">
                        <div class="heading text-center">
                            <h2>Section
                                <span> 2</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                <br />
                                    incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" class="img-fluid" width="100%" />
                            </div>
                            <div class="col-lg-6">
                                <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat.</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>Awesome Design</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>
                                            Creative Design</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>Better Client Service</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>
                                            Digital Marketing & Branding</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>Creative Design</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <i class="far fa-star"></i>
                                            Speed And Flexibility</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}