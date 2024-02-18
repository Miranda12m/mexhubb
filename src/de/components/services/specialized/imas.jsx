import React from 'react';
import { Container } from 'react-bootstrap';
export default function Imas() {
    return (
        <>
            <style>
                {`
          
          .section{
            display:flex;  
            flex-wrap:wrap;
          }

          .box{
            width: 48%;
            min-width: 300px;
            height:270px;
            display:flex;
            position:relative;
            border-radius:5px;
            margin:12px;
          }
          @media only screen and (max-width: 767px) {
            .box {
              height: 330px;
            }
          }
          .image{
            width:100%;
            object-fit:cover;
            border-radius:5px;
          }
          .overlay{
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            width:100%;
            height:100%;
            background:#00000094;
            border-radius:5px;
          }
          .Ttext{
            position:absolute;
            top:45%;
            left:50%;
            color:#ffff;
            text-align:center;
            transform:translate(-50%,-50%);
            transition:all .3s ease;
            
          }
          .Stext{
            position:absolute;
            top:65%;
            left:50%;
            transform:translate(-50%,-50%);
            width:80%;
            opacity:0;
            text-align:center;
            color:#ffff;
            transition:all .2s ease;
          }
          .box:hover .Ttext{
            top:42%;
            bottom:8%;  transition:all .5s ease;
          }
          .box:hover .Stext{
            opacity:1;
            bottom:0%;
            top:60%;  
            transition:all .5s ease;
          }
          
          .mdb-card:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: all 0.3s ease-in-out;
        }

        .tabla-con-cartas2 {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .tabla-con-cartas2 {
            overflow-x: scroll; 
          }
        }

        @media (min-width: 769px) {
          .section {
            flex-wrap: wrap;
            justify-content: center;
            overflow-x: hidden;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: auto;
          }
          .box {
            min-width: 300px;
          }
        }

        `}
            </style>

            <Container>

                <div class="section tabla-con-cartas2" data-aos="fade-up">
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/FYb0SV3/image00023.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Personaldienstleistungen</h3>
                            <p class="Stext">Haushälterinnen,
                                Chauffeure,
                                Köche,
                                Personal-Trainer,
                                Sprachlehrer,
                                Klempner und Elektriker,
                                Kindermädchen und Babysitter,
                                Hundesitter und Hundeausführer, &
                                Umzugsunternehmen


                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/DbsT8gC/image00004-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Gesundheitliche Beratungsdienste</h3>
                            <p class="Stext"> Englischsprachige Ärzte,
                                Psychologen,
                                Physiotherapeuten &
                                Tierärzte
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/TWfs908/image00063-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Tägliche Dienste</h3>
                            <p class="Stext"> Turnhallen,
                                Co-Working Spaces,
                                Sprachschulen,
                                Akademische Schulen,
                                Bars und Restaurants,
                                Hotels, Herbergen und Reisebüros,
                                Hundepensionen,
                                Wäschereien und Schneidereien, &
                                Versicherungen

                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/NT6LrnL/image00061-4.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Kaufberatung</h3>
                            <p class="Stext"> Immobilien & Fahrzeuge
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>

    );
}