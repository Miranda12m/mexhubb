import React from 'react';
import { Container } from 'react-bootstrap';
export default function BodyBag01() {
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
        
            padding-bottom: 80px;
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
            color: #eb3d90;
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
        
        `}

            </style>
            <Container>

            
            <section class="section_all" id="about">
                <div class="container">
                    <div class="row vertical_content_manage mt-5">
                        <div class="col-lg-6" data-aos="fade-right">
                            <div class="about_header_main mt-3">
                                <div class="about_icon_box">
                                    <p class="text_custom font-weight-bold">Lorem Ipsum is simply dummy text</p>
                                </div>
                                <h4 class="about_heading text-capitalize font-weight-bold mt-4">Lorem Ipsum is simply dummy text of the printing industry.</h4>
                                <p class="text-muted mt-3">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                                <p class="text-muted mt-3"> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-left">
                            <div class="img_about mt-3">
                                <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="" class="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>

                
                </div>
            </section>
            </Container>
        </>

    );
}