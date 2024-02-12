import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomDE from '../../contactbutton';
export default function BodyBagl02DE() {

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
                                <img src="https://i.ibb.co/5MZjt4w/image00045-4.jpg" alt="about" class="img-fluid imagenbb" width="100%" style={{maxHeight:'370px'}}/>
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Personalisierte Rechtsberatung
                                        <span> Unterstützung</span></h2>
                                    <p>Wenn Sie spezifischere Fragen haben oder persönliche Unterstützung benötigen, empfehlen wir Ihnen, einen persönlichen Termin mit unserem Anwaltsteam zu vereinbaren. Mexhubb setzt sich dafür ein, dass Sie sich bei der Bewältigung der komplexen Rechtslage nicht allein gelassen fühlen. Wir stehen Ihnen in jeder rechtlichen Situation zur Seite, die während Ihres Aufenthalts in Mexiko auftreten kann.
                                    </p>
                                </div>
                                <p>Unsere Zusammenarbeit mit vertrauenswürdigen Rechtsexperten soll Ihnen die Gewissheit geben, dass Sie einen zuverlässigen rechtlichen Verbündeten an Ihrer Seite haben. Ob es um Visaangelegenheiten, Immobilientransaktionen oder persönliche rechtliche Belange geht, Mexhubb steht Ihnen bei jedem Schritt zur Seite. Vereinbaren Sie einen Beratungstermin mit uns, und lassen Sie Mexhubb Ihr Wegweiser durch die mexikanische Rechtslandschaft sein.</p>
                                
                                <ContactButtomDE />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}