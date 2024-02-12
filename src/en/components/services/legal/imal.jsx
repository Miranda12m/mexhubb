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
                        <img src="https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
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
                        <img src="https://images.unsplash.com/photo-1553915632-175f60dd8e36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Family and Personal Matters</h3>
                            <p class="Stext"> Marriage and Divorces</p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Real Estate Transactions</h3>
                            <p class="Stext"> Property Purchase &
                                Registration with Tax Authorities
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card" >
                        <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
                        <div class="overlay">
                            <h3 class="Ttext">Business and Corporate Services</h3>
                            <p class="Stext"> <br></br>Company Formation &
                                Licensing
                            </p>
                        </div>
                    </div>
                    <div class="box mdb-card">
                        <img src="https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="image" alt='...' />
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
                        <img src="https://i.ibb.co/dptgnbW/image00078-2.jpg" class="image" alt='...' />
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