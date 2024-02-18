import React from 'react';
import { Container } from 'react-bootstrap';
export default function Imae() {
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
                            <h3 class="Ttext">Language exchange parties</h3>
                            <p class="Stext">Where you can practice and perfect your language skills in a fun and social environment.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/898k7VS/image00094.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Cultural immersion</h3>
                            <p class="Stext">We immerse you in the rich and diverse Mexican culture through authentic activities and events.</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/HYKPrt9/IMG-7385.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Wellness activities</h3>
                            <p class="Stext">We offer wellness activities to maintain a balance between body and mind during your journey.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/LQ7HTDW/image00014-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext3">Coworking spaces</h3>
                            <p class="Stext3">We provide shared workspaces for those who need to stay productive during their stay.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/ssGXLXp/20231222-155729.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Bar Hopping</h3>
                            <p class="Stext2">We take you to the best local bars to enjoy Mexican nightlife.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/xYQmCVC/image00037.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Sports activities</h3>
                            <p class="Stext2">We organize sports events to keep you active and full of energy.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>

    );
}