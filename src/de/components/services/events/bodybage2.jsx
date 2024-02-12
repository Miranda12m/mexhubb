import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomDE from '../../contactbutton';
export default function BodyBage02DE() {

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
                                <img src="https://i.ibb.co/MGHqkKh/image00100-3.jpg" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'450px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Zeitliches Ereignis:
                                        <span> Weihnachtsmarkt</span></h2>
                                    <p>Bereit für ein Weihnachtsabenteuer? Entdecke das jetzt.
                                    </p>
                                </div>
                                <p>Der Dezember ist da und mit ihm die Weihnachtsstimmung. Mexiko-Stadt (CDMX) ist voller Lichter und Farben, die Festlichkeiten beginnen zu Beginn des letzten Monats des Jahres 2023 und das Beste ist, dass es für jeden Geschmack etwas gibt.</p>
                                <p>Sowohl in CDMX als auch in der Metropolregion des Valle de México gibt es Konzerte, Ausstellungen, Attraktionen, Führungen und natürlich Messen, viele davon mit weihnachtlichem Thema. Jeden Tag kommen in dieser Weihnachtszeit in Mexiko-Stadt mehr und mehr Aktivitäten hinzu, darunter die Posadas in den Rathäusern oder die kostenlosen Eisbahnen in einigen Gegenden. Vom 17. bis 30. Dezember findet auf dem Zócalo das Weihnachtsverbena statt. Es wird ein Jahrmarkt mit Fahrgeschäften für Kinder und Erwachsene aufgebaut, und der Eintritt ist frei.</p>
                                <br></br>
                                <ContactButtomDE />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}