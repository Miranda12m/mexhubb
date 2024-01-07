import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImahFR() {
    return (
        <>
            <style>
                {`
          
          .section{
            display:flex;  
            flex-wrap:wrap;
          }

          .box{
            width:300px;
            height:230px;
            display:flex;
            position:relative;
            border-radius:5px;
            margin:5px;
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
            top:38%;
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

                <div class="section tabla-con-cartas2">
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Processus transparent</h3>
                                <p class="Stext"> Nous avons rationalisé notre service de logement pour garantir une expérience sans tracas.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Diverse options</h3>
                                <p class="Stext"> Explorez une gamme d'options de logement dans les quartiers les plus recherchés de Mexico.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Transactions transparentes</h3>
                                <p class="Stext"> Nous nous occupons de tout, garantissant une transaction transparente et sécurisée.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Contrats sur mesure</h3>
                                <p class="Stext"> Nos contrats de location s'adressent aux étrangers ou aux particuliers dans un esprit de flexibilité. </p>
                            </div>
                    </div>
                </div>
            </Container>
        </>

    );
}