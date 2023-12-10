import React from 'react';
import { Container } from 'react-bootstrap';
export default function Imah() {
    return (
        <>
            <style>
                {`
          
          .section{
            display:flex;  
            flex-wrap:wrap;
            justify-content:center;
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
            top:40%;
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
            top:55%;  
            transition:all .5s ease;
          }
          
          .mdb-card:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: all 0.3s ease-in-out;
        }


        `}
            </style>

            <Container>

                <div class="section">
                    <div class="box mdb-card">
                        <img src="https://images.pexels.com/photos/1003864/pexels-photo-1003864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Flight</h3>
                                <p class="Stext"> This is ease booking for flights. Don't miss the best offers. Hurry Up !</p>
                            </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://images.pexels.com/photos/45923/pexels-photo-45923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Bus</h3>
                                <p class="Stext"> This is ease booking for flights. Don't miss the best offers. Hurry Up !</p>
                            </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Hotel</h3>
                                <p class="Stext"> This is ease booking for flights. Don't miss the best offers. Hurry Up !</p>
                            </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://images.pexels.com/photos/4526430/pexels-photo-4526430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="image" alt='...' />
                            <div class="overlay">
                                <h3 class="Ttext">Recharge</h3>
                                <p class="Stext"> This is ease booking for flights. Don't miss the best offers. Hurry Up !</p>
                            </div>
                    </div>
                </div>
            </Container>
        </>

    );
}