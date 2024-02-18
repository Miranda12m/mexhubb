import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomES from '../../contactbutton';
export default function BodyBage02ES() {

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
                                <img src="https://i.ibb.co/zJ63JSW/image00100-3.webp" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'450px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Evento Temporal: 
                                        <span> Feria navideña</span></h2>
                                    <p>¿Listo para una aventura navideña? Explora esto ahora.
                                    </p>
                                </div>
                                <p>Llegó el mes de diciembre y con esto el espíritu navideño, la Ciudad de México (CDMX) se llena de luces y colores, las festividades comienzan desde inicios del último mes de 2023 y lo mejor es que hay para todos los gustos.</p>
                                <p>Tanto en la CDMX como en la Zona Metropolitana del Valle de México podrás disfrutar de conciertos, exposiciones, atracciones, recorridos y por supuesto ferias, muchas de ellas con temática navideña. Cada día se suman más actividades durante esta temporada navideña en la Ciudad de México, entre ellas las posadas que se realizan en los ayuntamientos o las pistas de hielo gratuitas en algunas zonas. Del 17 al 30 de diciembre se llevará a cabo la Verbena Navideña en el Zócalo. Se montará una feria con atracciones para niños y adultos y la entrada será gratuita.</p>
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