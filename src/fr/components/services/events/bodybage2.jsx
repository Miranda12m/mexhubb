import React from 'react';
import { Container } from 'react-bootstrap';
import ContactButtomFR from '../../contactbutton';
export default function BodyBage02FR() {

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
                                    <h2>Événement temporel :
                                        <span> Foire de noel</span></h2>
                                    <p>Prêt pour une aventure de Noël ? Explorez ceci maintenant.
                                    </p>
                                </div>
                                <p>Le mois de décembre est arrivé et avec cela l'esprit de Noël, Mexico (CDMX) se remplit de lumières et de couleurs, les festivités commencent dès le début du dernier mois de 2023 et le meilleur c'est qu'il y en a pour tous les goûts.</p>
                                <p>Tant au CDMX que dans la Zone Métropolitaine de la Vallée de Mexico, vous pourrez profiter de concerts, d'expositions, d'attractions, de visites et bien sûr de foires, dont beaucoup ont pour thème Noël. Chaque jour, de plus en plus d'activités s'ajoutent pendant cette période de Noël à Mexico, parmi lesquelles les posadas qui ont lieu dans les mairies ou les patinoires gratuites dans certaines zones. Du 17 décembre au 30 décembre, le Noël de la Verveine aura lieu au Zócalo. Une foire sera mise en place avec des manèges pour enfants et adultes et l'entrée sera gratuite.</p>
                                <br></br>
                                <ContactButtomFR />
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}