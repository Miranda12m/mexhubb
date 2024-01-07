import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomES from '../../contactbutton';

export default function BodyBags02ES() {

    return (
        <>
            <style>
                {`
    .about {
        padding: 40px 0;
    }
    
    .about .heading h2 {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
        padding: 0;
    
    }
    
    .about .heading h2 span {
        color: #FF3B19;
    }
    
    .about .heading p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.7;
        color: black;
        padding: 0;
    }
    
    .about h3 {
        font-size: 25px;
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
    
    .about p {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.7;
        color: black;
        margin: 20px 0 15px;
        padding: 0;
    }
    
    .about h4 {
        font-size: 15px;
        font-weight: 500;
        margin: 8px 0;
    }
    
    .about h4 i {
        color: #F24259;
        margin-right: 10px;
    }
    .imagenbb {
        box-shadow: 0 30px 50px rgba(8,13,62,.15);
    }
                 `}
            </style>
            <Container>


                <section class="about" id="about">
                    <div class="container" >

                        <div class="row">
                            <div class="col-lg-6" data-aos='fade-right' style={{marginBottom:'20px'}}>
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}} />
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Tus soluciones,
                                        <span>Sin problemas</span></h2>
                                    <p>Nuestro objetivo es ofrecer soluciones en lugar de problemas. No importa cuán específica sea su solicitud, Mexhubb se dedica a hacer un esfuerzo adicional para ayudarlo. Queremos asegurarnos de que su estadía en México sea sin complicaciones, haciendo su vida más fácil y placentera.
                                    </p>
                                </div>
                                <p>Si hay un servicio que necesita, simplemente nómbrelo y lo cubriremos. Mexhubb es su destino único para una amplia gama de servicios especializados. Hagamos que su estancia en México sea excepcional.</p>
                                <p>Agenda una consulta con nosotros y deja que Mexhubb sea tu guía en México.</p>
                                <br></br>
                                <ContactButtomES />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}