import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function AboutUsDE() {
    return (
        <>
            <style>
                {`
            
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {}
            a,
            a:hover,
            a:focus,
            a:active {
                text-decoration: none;
                outline: none;
            }
            
            a,
            a:active,
            a:focus {
                color: #FF3B19;
                text-decoration: none;
                transition-timing-function: ease-in-out;
                -ms-transition-timing-function: ease-in-out;
                -moz-transition-timing-function: ease-in-out;
                -webkit-transition-timing-function: ease-in-out;
                -o-transition-timing-function: ease-in-out;
                transition-duration: .2s;
                -ms-transition-duration: .2s;
                -moz-transition-duration: .2s;
                -webkit-transition-duration: .2s;
                -o-transition-duration: .2s;
            }
            
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }
            img {
        max-width: 100%;
        height: auto;
    }
            section {
               /* min-height: 100vh;*/
            }
    
    .sec-title{
      position:relative;
      z-index: 1;
      margin-bottom:60px;
    }
    
    .sec-title .title{
      position: relative;
      display: block;
      font-size: 18px;
      line-height: 24px;
      color: #FF3B19;
      font-weight: 500;
      margin-bottom: 15px;
    }
    
    .sec-title h2{
      position: relative;
      display: block;
      font-size:40px;
      line-height: 1.28em;
      color: #222222;
      font-weight: 600;
      padding-bottom:18px;
    }
    
    .sec-title h2:before{
      position:absolute;
      content:'';
      left:0px;
      bottom:0px;
      width:50px;
      height:3px;
      background-color:#d1d2d6;
    }
    
    .sec-title .text{
      position: relative;
      font-size: 16px;
      line-height: 26px;
      color: #848484;
      font-weight: 400;
      margin-top: 35px;
    }
    
    .sec-title.light h2{
      color: #ffffff;
    }
    
    .sec-title.text-center h2:before{
      left:50%;
      margin-left: -25px;
    }
    
    .list-style-one{
      position:relative;
    }
    
    .list-style-one li{
      position:relative;
      font-size:16px;
      line-height:26px;
      color: #222222;
      font-weight:400;
      padding-left:20px;
      margin-bottom: 12px;
    }
    
    .list-style-one li:before {
        content: "\f058";
        position: absolute;
        left: 0;
        top: 0px;
        display: block;
        font-size: 18px;
        padding: 0px;
        color: #FF3B19;
        font-weight: 600;
        -moz-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1.6;
    }
    
    .list-style-one li a:hover{
      color: #44bce2;
    }
    
    .btn-style-one{
      position: relative;
      display: inline-block;
      font-size: 17px;
      line-height: 30px;
      color: #ffffff;
      padding: 10px 30px;
      font-weight: 600;
      overflow: hidden;
      letter-spacing: 0.02em;
      background-color: #FF3B19;
    }
    
    .btn-style-one:hover{
      background-color: #ea2d0d;
      color: #ffffff;
    }
    .about-section{
      position: relative;
    }
    
    .about-section .sec-title{
      margin-bottom: 45px;
    }
    
    .about-section .content-column{
      position: relative;
      margin-bottom: 50px;
    }
    
    .about-section .content-column .inner-column{
      position: relative;
      padding-left: 30px;
    }
    
    .about-section .text{
      margin-bottom: 40px;
      font-size: 16px;
      line-height: 26px;
      color: #848484;
      font-weight: 400;
    }
    
    .about-section .list-style-one{
      margin-bottom: 45px;
    }
    
    .about-section .btn-box{
      position: relative;
    }
    
    .about-section .btn-box a{
      padding: 15px 50px;
    }
    
    .about-section .image-column{
      position: relative;
    }
    
    .about-section .image-column .text-layer{
        position: absolute;
        right: -110px;
        top: 50%;
        font-size: 325px;
        line-height: 1em;
        color: #ffffff;
        margin-top: -175px;
        font-weight: 500;
    }
    
    .about-section .image-column .inner-column{
      position: relative;
      padding-left: 120px;
      padding-bottom: 125px;
    }
    
    .about-section .image-column .inner-column:before{
      position: absolute;
      left: -75px;
      top: 65px;
      height: 100%;
      width: 100%;
      background-image:url(https://i.ibb.co/fxJ1jtC/about-circle-1.png);
      content: "";
    }
    
    .about-section .image-column .image-1{
      position: relative;
    }
    
    .about-section .image-column .image-2{
      position: absolute;
      left: 0;
      bottom: 0;
    }
    
    .about-section .image-column .image-2 img,
    .about-section .image-column .image-1 img{
      box-shadow: 0 30px 50px rgba(8,13,62,.15);
    }
    
    .about-section .image-column .video-link{
      position: absolute;
      left: 70px;
      top: 170px;
    }
    
    .about-section .image-column .video-link .link{
      position: relative;
      display: block;
      font-size: 22px;
      color: #191e34;
      font-weight: 400;
      text-align: center;
      height: 100px;
      width: 100px;
      line-height: 100px;
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 30px 50px rgba(8,13,62,.15);
      -webkit-transition: all 300ms ease;
      -moz-transition: all 300ms ease;
      -ms-transition: all 300ms ease;
      -o-transition: all 300ms ease;
      transition: all 300ms ease;
    }
    
    .about-section .image-column .video-link .link:hover{
      background-color: #191e34;
      color: #f
    }
    .button-hover:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
                `}
            </style>
            <Container>


                <div class="about-section">
                    <div class="container">
                        <div class="row">
                            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2" data-aos="fade-up">
                                <div class="inner-column">
                                    <div class="sec-title">
                                        <span class="title">Über unser Unternehmen</span>
                                        <h2>Mexiko erwartet Sie,<br />Mexhubb öffnet die Tür</h2>
                                    </div>
                                    <div class="text">Willkommen bei Mexhubb, Ihrer führenden Beratungsagentur, die sich darauf spezialisiert hat, Ausländern, die Mexiko besuchen oder dort leben, umfassende Lösungen anzubieten. Bei Mexhubb verfolgen wir ein einziges Ziel: Vertrauen, Zuverlässigkeit, Professionalität und Effizienz durch ein umfassendes Angebot an Dienstleistungen zu schaffen. Als junges und dynamisches Unternehmen haben wir uns darauf spezialisiert, die einzigartigen Bedürfnisse von digitalen Nomaden, Expats, Touristen, Residenten und Einheimischen zu erfüllen und ihnen in ihren alltäglichen Lebenssituationen ein treuer Verbündeter zu sein.</div>
                                    <ul class="list-style-one">
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style={{ marginRight: '9px', color: '#FF3B19' }}>
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Einzigartige Herangehensweise</li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style={{ marginRight: '9px', color: '#FF3B19' }}>
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Fachwissen und Unterstützung</li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16" style={{ marginRight: '9px', color: '#FF3B19' }}>
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                            </svg>
                                            Auswirkungen auf die Gemeinschaft</li>
                                    </ul>
                                    <Link to='/de/services'>
                                    
                                    <div class="btn-box ">
                                        <a href="/de/services" class="theme-btn btn-style-one button-hover">Mehr über uns erfahren</a>
                                    </div>
                                    </Link>
                                </div>
                            </div>

                            <div class="image-column col-lg-6 col-md-12 col-sm-12" data-aos="fade-right">
                                <div class="inner-column wow fadeInLeft">
                                    <figure class="image-1"><img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ maxHeight: '520px' }} /></figure>
                                    <figure class="image-2"><img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ maxHeight: '220px' }} /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </>
    );
}