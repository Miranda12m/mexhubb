import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImalDE() {
    return (
        <>
            <style>
                {`
          
          .section{
            display:flex;  
            flex-wrap:wrap;
          }

          .box{
            width:400px;
            height:230px;
            display:flex;
            position:relative;
            border-radius:5px;
            margin:12px;
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

                <div class="section tabla-con-cartas2" data-aos="fade-up">
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/QkTxQ49/image00097-2.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Visa und Aufenthaltsgenehmigung</h3>
                            <p class="Stext">Arbeits- und Besuchervisa,
                                Vorübergehender und dauerhafter Aufenthalt,
                                Staatsbürgerschaft,
                                Einbürgerung
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/SQPQ2XZ/image00095-2.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Familie und persönliche Angelegenheiten</h3>
                            <p class="Stext"> Eheschließungen und Scheidungen</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/SnZtMFs/image00056-4.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Immobilien-Transaktionen</h3>
                            <p class="Stext"> Immobilienkauf &
                                Registrierung bei den Steuerbehörden
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/12VcFy7/image00070-4.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Geschäfts- und Unternehmensdienstleistungen</h3>
                            <p class="Stext"> <br></br>Firmengründung &
                                Lizenzvergabe
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/9y2v1cd/image00090-4.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Internationale Angelegenheiten</h3>
                            <p class="Stext"> Import- und Exportdienstleistungen,
                                Bewegen Sie Ihren Hausrat ins Ausland,
                                Übersetzungen ins Spanische &
                                Apostillen und Legalisierungen
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/dptgnbW/image00078-2.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Rechtliche Vertretung</h3>
                            <p class="Stext">Rechtsstreitigkeiten,
                                Unfälle und Körperverletzungsdelikte,
                                Ordnungswidrigkeiten, Straftaten und Anklagen
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                
            </Container>
        </>

    );
}