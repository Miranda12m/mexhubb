import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImahDE() {
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
                        <img src="https://i.ibb.co/P1Hs2kk/image00076-4.jpg" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Nahtloser Prozess</h3>
                                <p class="Stext">Wir haben unseren Wohnungsservice gestrafft, um einen reibungslosen Ablauf zu gewährleisten.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://i.ibb.co/LYr9gC8/image00037-4.jpg" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Vielfältige Optionen</h3>
                                <p class="Stext"> Entdecken Sie eine Reihe von Wohnmöglichkeiten in den begehrtesten Vierteln von Mexiko-Stadt.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://i.ibb.co/dptgnbW/image00078-2.jpg" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Transparente Vorgänge</h3>
                                <p class="Stext"> Wir kümmern uns um alles und gewährleisten eine transparente und sichere Transaktion.</p>
                            </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://i.ibb.co/dWmwgfG/image00045-4.jpg" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Maßgeschneiderte Verträge</h3>
                                <p class="Stext"> Unsere Mietverträge sind für Ausländer oder Privatpersonen gedacht, die flexibel sein wollen.</p>
                            </div>
                    </div>
                </div>
            </Container>
        </>

    );
}