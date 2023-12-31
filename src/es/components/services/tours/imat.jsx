import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImatES() {
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
            height: 270px;
            display:flex;
            position:relative;
            border-radius:5px;
            margin:12px;
          }

          @media only screen and (max-width: 767px) {
            .box {
              height: 420px;
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

        .tabla-con-cartas3 {
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
          .box:hover .Stext{
            opacity:1;
            bottom:0%;
            top:54%;  
            transition:all .5s ease;
          }
        }

        `}
            </style>

            <Container>

                <div class="section tabla-con-cartas3">
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1512813389649-acb9131ced20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Viajeros del Tiempo</h3>
                            <p class="Stext">Castillo de Chapultepec, Museo de Antropología, Monumento a la Revolución,
                                 Pirámides de Teotihuacán y Basílica de Guadalupe,
                                 3 Museos Frida Kahlo y Diego Rivera,
                                 Trajineras de Xochimilco y Centro Coyoacán,
                                 Centro Histórico,
                                 San Ángel y las Pirámides de Cuicuilco, &
                                 Estadio Azteca y Lucha Libre
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1551279880-03041531948f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Pasión de viajar</h3>
                            <p class="Stext"> Puebla y Cholula,
                                 Querétaro y la Ruta del Vino,
                                 San Miguel de Allende,
                                 Cuernavaca y Taxco,
                                 Tepoztlán y Tlayacapan,
                                 Peña de Bernal y la Ruta del Queso &
                                 Valle de Bravo
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1529704640551-eef9ba5d774a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Amantes de la comida</h3>
                            <p class="Stext"> Grutas de Tolantongo,
                                 Nevado de Toluca,
                                 Volcanes Popo e Iztla,
                                 Los Dinamos,
                                 El Ajusco,
                                 Desierto de los Leones,
                                 Volcán Malinche y
                                 parque cerro la estrella

                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" data-aos="fade-up">
                        <img src="https://images.unsplash.com/photo-1589592168688-ace8efe5099f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Buscadores de la naturaleza</h3>
                            <p class="Stext"> Degustación de Tequila, Mezcal y Pulque,
                                 Degustación de tacos,
                                 Degustación de comida callejera y
                                 Degustación de Sabores Regionales

                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
              
            </Container>
        </>

    );
}