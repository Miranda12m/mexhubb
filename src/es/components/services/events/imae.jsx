import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImaeES() {
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
                        <img src="https://i.ibb.co/8YSMxtP/20231222-151621.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Fiestas de intercambio de idiomas</h3>
                            <p class="Stext">Donde podrás practicar y perfeccionar tus habilidades lingüísticas en un ambiente divertido y social.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/cNVBQ9X/image00094.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Inmersión cultural</h3>
                            <p class="Stext">Te sumergimos en la rica y diversa cultura mexicana a través de actividades y eventos auténticos.</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/sHgtHgx/IMG-7385.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Actividades de bienestar</h3>
                            <p class="Stext">Ofrecemos actividades de bienestar para mantener el equilibrio entre cuerpo y mente durante tu viaje.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/TbK8nZf/image00014-2.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext3">Espacios de coworking</h3>
                            <p class="Stext3">Ofrecemos espacios de trabajo compartidos para aquellos que necesitan mantenerse productivos durante su estadía.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/C70Gr0h/20231222-155729.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Bar en bar</h3>
                            <p class="Stext2">Te llevamos a los mejores bares locales para disfrutar de la vida nocturna mexicana.
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/ykgXjmn/image00037.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext2">Actividades deportivas</h3>
                            <p class="Stext2">Organizamos eventos deportivos para mantenerte activo y lleno de energía.
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>

    );
}