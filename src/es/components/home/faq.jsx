import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function FAQES() {
    return (
        <>
            <Container>
                <div>
                    <br></br><br></br><br></br>
                    <h1 style={{ textAlign: 'center' }} data-aos="fade-right" > Preguntas Frecuentes</h1>
                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header>¿Cuáles son los principales servicios que ofrece Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb brinda una amplia gama de servicios para facilitar la transición de extranjeros a México. Esto incluye asistencia con trámites de visa y residencia, organización de tours, ayuda con la adquisición o alquiler de residencias y servicios personalizados para satisfacer las necesidades individuales de cada cliente.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" data-aos="fade-up">
                            <Accordion.Header>¿Cómo puedo iniciar el proceso de solicitud de visa a través de Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            Iniciar el proceso es sencillo. Puede ponerse en contacto con nuestro equipo a través de nuestro sitio web, correo electrónico o teléfono. Nuestros expertos lo guiarán a través de los requisitos y le brindarán la información necesaria para iniciar efectivamente el proceso.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" data-aos="fade-up">
                            <Accordion.Header>¿Qué tipos de tours ofrece Mexhubb y cómo puedo reservar uno?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb organiza una variedad de tours, desde exploraciones culturales hasta recorridos inmobiliarios. Puede encontrar detalles sobre nuestros tours en nuestro sitio web y hacer reservas en línea. Además, estamos disponibles para asesorarte sobre el tour que mejor se adapte a tus intereses.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" data-aos="fade-up">
                            <Accordion.Header>¿En qué se diferencia Mexhubb de otros servicios de asistencia a expatriados en México?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb se destaca por su enfoque integral y personalizado. No sólo nos encargamos de los trámites legales sino que también ofrecemos servicios adaptados a las necesidades individuales de cada cliente. Nuestra atención al detalle y compromiso con la excelencia nos convierten en un socio confiable en la transición a la vida en México.                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" data-aos="fade-up">
                            <Accordion.Header>¿Cuál es la política de reembolso en caso de cancelación de los servicios de Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            En caso de cancelación aplica una política de reembolso del 50% del costo total de los servicios contratados con Mexhubb. Entendemos que las circunstancias pueden variar, pero esta póliza nos permite cubrir los costos administrativos y de planificación asociados con la atención personalizada que brindamos a cada cliente.                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <br></br><br></br><br></br><br></br>
            </Container>
        </>
    );
}