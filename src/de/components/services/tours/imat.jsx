import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImatDE() {
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

                <div class="section tabla-con-cartas3" data-aos="fade-up">
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/Wg7gX3v/image00011.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Zeitreisende</h3>
                            <p class="Stext">Schloss Chapultepec, Anthropologiemuseum, Revolutionsdenkmal,
                                Pyramiden von Teotihuacan und Basilika von Guadalupe,
                                3 Frida Kahlo & Diego Rivera Museen,
                                Trajineras von Xochimilco und Coyoacan Zentrum,
                                Historisches Zentrum,
                                San Angel und die Pyramiden von Cuicuilco, &
                                Azteca-Stadion und Lucha Libre

                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/Z1Q8jwM/image00097-3.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Fernweh </h3>
                            <p class="Stext"> Puebla und Cholula,
                                Queretaro und die Weinstraße,
                                San Miguel de Allende,
                                Cuernavaca und Taxco,
                                Tepoztlan und Tlayacapan,
                                Pena de Bernal und die Käseroute &
                                Valle de Bravo
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/C70Gr0h/20231222-155729.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Foodie-Liebhaber</h3>
                            <p class="Stext"> Verkostung von Tequila, Mezcal und Pulque,
                                Tacos-Verkostung,
                                Verkostung von Street Food &
                                Verkostung regionaler Aromen

                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/jgwNRy6/image00041-4.jpg" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Naturforscher</h3>
                            <p class="Stext"> Tolantongo-Grotten,
                                Nevado de Toluca,
                                Vulkane Popo und Iztla,
                                Los Dinamos,
                                El Ajusco,
                                Desierto de los Leones,
                                Vulkan Malinche &
                                Cerro la Estrella Park

                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
              
            </Container>
        </>

    );
}