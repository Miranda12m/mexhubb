import React from 'react';
import { FaBath, FaBed, FaVectorSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import ContactButton2 from '../../contactbutton2';
import Carousel from 'react-bootstrap/Carousel';

export default function Houses() {

    return (
        <>
            <style>
                {`
            *,
            *::before,
            *::after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                user-select: none;
                outline: none;
                border: none;
                list-style: none;
                scroll-behavior: smooth;
            }
            
            @media (max-width: 820px) {
                .containerh {
                    width: 310px !important;
                    justify-content: center !important;
                }
            
                
            }
            
            @media (min-width: 821px) and (max-width: 1100px) {
                .containerh {
                    width: 760px !important;
                    align-items: space-between !important;
                    justify-content: center !important;
                    min-height: 1020px;
                }
                .container > div {
                    margin: 10px;
                }
            }
            
            i,
            .bodyh > p:first-of-type {
                opacity: 0.6;
            }
            
            i > span {
                margin-left: 8px;
            }
            
           
            .containerh {
                min-height: 520px;
                padding: 25px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 40px auto;
                flex-wrap: wrap;
            }
            
            .tileh {
                width: fit-content;
                background-color: white;
                position: relative;
            }
            
            .feautered::before {
                content: "featured";
                position: absolute;
                background: #eb7a49;
                width: 80px;
                height: 25px;
                z-index: 9;
                color: white;
                font-weight: bold;
                text-align: center;
                line-height: 25px;
                font-size: 0.825rem;
                top: -12.5px;
            }
            
            .feautered::after {
                content: "";
                position: absolute;
                top: -12.5px;
                left: 80px;
                width: 0;
                height: 0;
                border-left: 12.5px solid #eb7a49;
                border-top: 12.5px solid transparent;
                border-bottom: 12.5px solid transparent;
            }
            
            img {
                width: 100%;
                height: 100%;
                transition: 1s;
            }
            
            .headerh,
            .bodyh {
                position: relative;
                overflow: hidden;
                width: 340px;
                height: 260px;
                margin-bottom: 20px;
            }
            
            .bodyh {
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            
            .price {
                font-weight: bold;
                font-size: 0.825rem;
            }
            
            .specs {
                display: flex;
                justify-content: space-around;
                margin-bottom: 10px;
            }
            
            .price > p {
                color: #53b3aa;
                font-size: 1.7rem;
            }
            
            .layer-content {
                border: 2px solid white;
                background-color: transparent;
                color: white;
                text-align: center;
                height: 50px;
                width: 140px;
                padding: 0px 10px;
                line-height: 50px;
                font-weight: bold;
                position: absolute;
                left: -90px;
                top: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
                transition: 0.6s;
            }
            .hot::before {
                content: "HOT";
                position: absolute;
                color: white;
                background-color: #dd3535;
                padding: 3px 8px;
                border-radius: 2px;
                font-weight: bold;
                left: 15px;
                bottom: 15px;
                z-index: 5;
            }
            
            .layer {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 0;
                background-color: #ff3b19;
                opacity: 0.6;
                transition: 0.5s;
            }
            
            .header-icons {
                position: absolute;
                bottom: 15px;
                right: 15px;
            }
            
            .header-icons i {
                color: white;
                margin: 0px 5px;
                cursor: pointer;
                font-size: 24px;
            }
            
            .headerh:hover > .layer {
                width: 100% !important;
            }
            
            .headerh:hover > .layer > .layer-content {
                left: 50%;
            }
            
            .headerh:hover > img {
                transform: scale(1.1);
            }
            
            .header-icons > :first-child:hover {
                color: #dd3535;
            }
            .header-icons > :last-child:hover {
                color: rgb(81, 81, 206);
            }
            
            .mdb-card:hover {
                box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                transform: scale(1.02);
                transition: all 0.6s ease-in-out;
            }
            .carousel-item img {
                width: 100%;
                object-fit: cover;
                filter: brightness(0.9);
            }
            `}
            </style>

            <div class="containerh" style={{ alignItems: 'center' }}>
                <div class="tileh feautered mdb-card" style={{ marginBottom: '30px' }} data-aos='fade-up'>
                    <div class="headerh hot">
                        <Carousel style={{ height: '260px', opacity: '1' }}>
                            <Carousel.Item style={{ height: '260px' }}>
                                <img src="https://img10.naventcdn.com/avisos/18/01/41/51/13/56/360x266/1132459570.jpg?isFirstImage=true" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/51/13/56/1200x1200/1132459559.jpg" alt='...' style={{ height: '260px' }} />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/51/13/56/1200x1200/1132459551.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                        </Carousel>

                        <div class="header-icons">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                    </div>
                    <div class="bodyh">
                        <h4>Terre Residential Department</h4>
                        <p>Department of three bedrooms in excellent condition located next to Televisa. Located on the 13th floor is interior.</p>
                        <div class="specs">
                            <i><FaBath /><span>3</span></i>
                            <i><FaBed /><span>3</span></i>
                            <i><FaVectorSquare /><span>1650 sq ft</span></i>
                        </div>
                        <Row>
                            <Col>
                                <div class="price">
                                    For Sale<p>$427,000</p>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: '12px' }}>
                                    <ContactButton2 />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
                <div class="tileh mdb-card" style={{ marginBottom: '30px' }} data-aos='fade-up'>
                    <div class="headerh hot">
                        <Carousel style={{ height: '260px', opacity: '1' }}>
                            <Carousel.Item style={{ height: '260px' }}>
                                <img src="https://img10.naventcdn.com/avisos/18/00/66/78/53/22/360x266/369046080.jpg?isFirstImage=true" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/368580178.jpg" alt='...' style={{ height: '260px' }} />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046065.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046066.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/00/66/78/53/22/1200x1200/369046067.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                        </Carousel>

                        <div class="header-icons">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                    </div>
                    <div class="bodyh">
                        <h4>Paseo Reforma Department</h4>
                        <p>New York Loft Department located in the emblematic Plaza Residences México City building, on Paseo de la Reforma, it is simply impressive.</p>
                        <div class="specs">
                            <i><FaBath /><span>1</span></i>
                            <i><FaBed /><span>1</span></i>
                            <i><FaVectorSquare /><span>1920 sq ft</span></i>
                        </div>
                        <Row>
                            <Col>
                                <div class="price">
                                    For Sale<p>$865,000</p>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: '12px' }}>
                                    <ContactButton2 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div class="tileh mdb-card" style={{ marginBottom: '30px' }} data-aos='fade-up'>
                    <div class="headerh">

                    <Carousel style={{ height: '260px', opacity: '1' }}>
                            <Carousel.Item style={{ height: '260px' }}>
                            <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/92/72/79/1200x1200/1140112239.jpg?isFirstImage=true" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/92/72/79/1200x1200/1140112242.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/92/72/79/1200x1200/1140112248.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="https://img10.naventcdn.com/avisos/resize/18/01/41/92/72/79/1200x1200/1140112244.jpg" alt='...' style={{ height: '260px' }} />
                            </Carousel.Item>
                        </Carousel>


                        <div class="header-icons">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                    </div>
                    <div class="bodyh">
                        <h4>Condesa Department</h4>
                        <p>It is a spectacular and modern project of luxury departments in one of the best areas, more central and of greater surplus value in the CDMX.</p>
                        <div class="specs">
                            <i><FaBath /><span>2</span></i>
                            <i><FaBed /><span>1</span></i>
                            <i><FaVectorSquare /><span>700 sq ft</span></i>
                        </div>
                        <Row>
                            <Col>
                                <div class="price">
                                    For Sale<p>$200,000</p>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: '12px', alignItems:'right', verticalAlign:'right' }}>
                                    <ContactButton2 />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </>

    );


}