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
                            <h3 class="Ttext">Personnel Services</h3>
                            <p class="Stext">Housekeepers,
                                Chauffeurs,
                                Chefs,
                                Personal Trainers,
                                Language Tutors,
                                Plumbers and Electricians,
                                Nannies and Babysitters,
                                Dog Sitters and Dog Walkers, &
                                Moving Companies


                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Health Advisory Services</h3>
                            <p class="Stext"> English-Speaking Doctors,
                                Psychologists,
                                Physiotherapists &
                                Veterinarians
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Daily Services</h3>
                            <p class="Stext"> Gyms,
                                Co-Working Spaces,
                                Language Schools,
                                Academic Schools,
                                Bars and Restaurants,
                                Hotels, Hostels, and Travel Agencies,
                                Dog Pensions,
                                Laundries and Tailors, &
                                Insurances

                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/NT6LrnL/image00061-4.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Buying Advisory</h3>
                            <p class="Stext"> Property & Vehicles
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
            </Container>
        </>

    );
}