import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImaeFR() {
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
            height:220px;
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
            .box:hover .Ttext3{
                top:38% !important; 
                bottom:8%; 
                transition:all .5s ease;
              }
          }

          .Ttext2{
            position:absolute;
            top:45%;
            left:50%;
            color:#ffff;
            text-align:center;
            transform:translate(-50%,-50%);
            transition:all .3s ease;
            
          }
          .Stext2{
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
          .box:hover .Ttext2{
            top:45%;
            bottom:8%;  transition:all .5s ease;
          }
          .box:hover .Stext2{
            opacity:1;
            bottom:0%;
            top:60%;  
            transition:all .5s ease;
          }

          .Ttext3{
            position:absolute;
            top:45%;
            left:50%;
            color:#ffff;
            text-align:center;
            transform:translate(-50%,-50%);
            transition:all .3s ease;
            
          }
          .Stext3{
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
          .box:hover .Ttext3{
            top:45%;
            bottom:8%;  transition:all .5s ease;
          }
          .box:hover .Stext3{
            opacity:1;
            bottom:0%;
            top:60%;  
            transition:all .5s ease;
          }

        `}
            </style>

            <Container>

                <div class="section tabla-con-cartas2" data-aos="fade-up">
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/5cnm7XS/20231222-151621.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Soirées d'échange linguistique</h3>
                            <p class="Stext">Où vous pourrez pratiquer et perfectionner vos compétences linguistiques dans un environnement amusant et social.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/898k7VS/image00094.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Immersion culturelle</h3>
                            <p class="Stext">Nous vous immergeons dans la culture mexicaine riche et diversifiée à travers des activités et événements authentiques.</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/HYKPrt9/IMG-7385.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Activités bien-être</h3>
                            <p class="Stext">Nous vous proposons des activités bien-être pour maintenir un équilibre entre le corps et l'esprit pendant votre voyage.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/LQ7HTDW/image00014-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext3">Espaces de coworking</h3>
                            <p class="Stext3">Nous proposons des espaces de travail partagés à ceux qui ont besoin de rester productifs pendant leur séjour.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/ssGXLXp/20231222-155729.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Tournée des bars</h3>
                            <p class="Stext2">Nous vous emmenons dans les meilleurs bars locaux pour profiter de la vie nocturne mexicaine.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/xYQmCVC/image00037.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Activités sportives</h3>
                            <p class="Stext2">Nous organisons des événements sportifs pour vous garder actif et plein d'énergie.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>

    );
}