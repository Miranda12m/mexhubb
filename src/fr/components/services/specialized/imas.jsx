import React from 'react';
import { Container } from 'react-bootstrap';
export default function ImasFR() {
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
            <img src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
            <div class="overlay">
              <h3 class="Ttext">Services du personnel</h3>
              <p class="Stext">Les femmes de ménage,
                Chauffeurs,
                Cuisiniers,
                Entraîneurs personnels,
                Tuteurs de langues,
                Plombiers et électriciens,
                Nounous et baby-sitters,
                Gardiens de chiens et promeneurs de chiens, et
                Entreprises de déménagement


              </p>
            </div>
          </div>
          <div class="box mdb-card" >
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
            <div class="overlay">
              <h3 class="Ttext">Services consultatifs en matière de santé</h3>
              <p class="Stext"> Médecins anglophones,
                Psychologues,
                Physiothérapeutes &
                Vétérinaires
              </p>
            </div>
          </div>
          <div class="box mdb-card" >
            <img src="https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
            <div class="overlay">
              <h3 class="Ttext">Services quotidiens</h3>
              <p class="Stext">Gymnases,
                 Espaces de co-travail,
                 Écoles de langues,
                 Écoles académiques,
                 Bars et Restaurants,
                 Hôtels, auberges et agences de voyages,
                 Pensions pour chiens,
                 Blanchisseries et tailleurs, &
                 Assurances

              </p>
            </div>
          </div>
          <div class="box mdb-card" >
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
            <div class="overlay">
              <h3 class="Ttext">Conseil d'achat</h3>
              <p class="Stext"> Propriétés et véhicules
              </p>
            </div>
          </div>
        </div>
        <br></br>
      </Container>
    </>

  );
}