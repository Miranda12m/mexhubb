import React from 'react';
import { Container } from 'react-bootstrap';
export default function Imal() {
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
                        <img src="https://i.ibb.co/QK0Nqb0/image00097-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Visas and Residency</h3>
                            <p class="Stext">Work and Visitor Visas,
                                Temporary and Permanent Residence,
                                Citizenship,
                                Naturalization
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/qJPJttM/image00095-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Family and Personal Matters</h3>
                            <p class="Stext"> Marriage and Divorces</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/RHzTQWH/image00056-4.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Real Estate Transactions</h3>
                            <p class="Stext"> Property Purchase &
                                Registration with Tax Authorities
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://i.ibb.co/WpBXHtH/image00070-4.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Business and Corporate Services</h3>
                            <p class="Stext"> <br></br>Company Formation &
                                Licensing
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/hMcXFtx/image00090-4.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">International Affairs</h3>
                            <p class="Stext"> Import and Export Services,
                                Move Your Household Goods Abroad,
                                Translations into Spanish &
                                Apostilles and Legalizations
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://i.ibb.co/3CbzgbY/image00078-2.webp" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Legal Representation</h3>
                            <p class="Stext"> Lawsuits,
                                Accidents and Personal Injury Cases,
                                Misdemeanors, Offenses, and Charges
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                
            </Container>
        </>

    );
}