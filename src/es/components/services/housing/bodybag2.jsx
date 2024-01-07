import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomES from '../../contactbutton';
export default function BodyBag02ES() {

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
                                <img src="https://images.unsplash.com/photo-1677425164047-376be1f7de83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" class="img-fluid imagenbb" height="100%" />
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Nuestro hogar,
                                        <span> tu camino</span></h2>
                                    <p>¿Listo para encontrar tu hogar perfecto? Explore nuestras opciones de alojamiento ahora.
                                    </p>
                                </div>
                                <p>En Mexhubb creemos que encontrar la casa adecuada debe ser una experiencia placentera. Nuestros servicios de vivienda no se tratan sólo de alquileres; se trata de crear un espacio cómodo y seguro que se alinee con su estilo de vida. Elija Mexhubb para alojamiento, donde la facilidad, la transparencia y la flexibilidad se unen para hacer que su estadía en la Ciudad de México sea inolvidable.</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg> Espacios cómodos y seguros</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Facilidad, transparencia y flexibilidad</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Contratos adaptables</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Transición sin problemas</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Estancia tranquila y sin preocupaciones</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Servicio de alojamiento simplificado</h4>
                                    </div>
                                </div>
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