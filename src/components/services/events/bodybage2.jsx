import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtom from '../../contactbutton';
export default function BodyBage02() {

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
                                <img src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2022/11/27/2863816.jpg" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'450px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Temporal Event: 
                                        <span> Christmas Fair</span></h2>
                                    <p>Ready for a Christmas adventure? Explore this now.
                                    </p>
                                </div>
                                <p>The month of December has arrived and with this the Christmas spirit, Mexico City (CDMX) is filled with lights and colors, the festivities begin from the beginning of the last month of 2023 and the best thing is that there is something for all tastes.</p>
                                <p>In both CDMX and the Metropolitan Area of the Valley of Mexico you can enjoy concerts, exhibitions, attractions, tours and of course fairs, many with a Christmas theme. Every day more and more activities are added during this Christmas season in Mexico City , among them the posadas that take place in the town halls or the free ice rinks in some areas. From December 17 to December 30, the Christmas Verbena will be held in the Zócalo. A fair will be set up with rides for children and adults and admission will be free.</p>
                                <br></br>
                                <ContactButtom />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}