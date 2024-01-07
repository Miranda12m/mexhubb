import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function FAQFR() {
    return (
        <>
            <Container>
                <div>
                    <br></br><br></br><br></br>
                    <h1 style={{ textAlign: 'center' }} data-aos="fade-right" > Questions fréquemment posées </h1>
                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header>Quels sont les principaux services proposés par Mexhubb ?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb propose une large gamme de services pour faciliter la transition des étrangers vers le Mexique. Cela comprend l'assistance dans les procédures de visa et de séjour, l'organisation de visites, l'aide à l'acquisition ou à la location de résidences et des services personnalisés pour répondre aux besoins individuels de chaque client.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" data-aos="fade-up">
                            <Accordion.Header>Comment puis-je lancer le processus de demande de visa via Mexhubb ?</Accordion.Header>
                            <Accordion.Body>
                            Le lancement du processus est simple. Vous pouvez contacter notre équipe via notre site Web, par e-mail ou par téléphone. Nos experts vous guideront à travers les exigences et vous fourniront les informations nécessaires pour démarrer efficacement le processus.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" data-aos="fade-up">
                            <Accordion.Header>Quels types de visites Mexhubb propose-t-il et comment puis-je en réserver une ?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb organise une variété de visites, allant des explorations culturelles aux visites immobilières. Vous pouvez trouver des détails sur nos visites sur notre site Web et effectuer des réservations en ligne. De plus, nous sommes disponibles pour vous conseiller sur le circuit qui correspond le mieux à vos intérêts.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" data-aos="fade-up">
                            <Accordion.Header>En quoi Mexhubb diffère-t-il des autres services d’assistance aux expatriés au Mexique ?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb se démarque par son approche globale et personnalisée. Nous traitons non seulement les procédures juridiques, mais proposons également des services adaptés aux besoins individuels de chaque client. Notre souci du détail et notre engagement envers l’excellence font de nous un partenaire fiable dans la transition vers la vie au Mexique.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" data-aos="fade-up">
                            <Accordion.Header>Quelle est la politique de remboursement en cas d’annulation des services de Mexhubb ?</Accordion.Header>
                            <Accordion.Body>
                            En cas d'annulation, une politique de remboursement de 50% du coût total des services contractés avec Mexhubb s'applique. Nous comprenons que les circonstances peuvent varier, mais cette politique nous permet de couvrir les frais d'administration et de planification associés à l'attention personnalisée que nous apportons à chaque client.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <br></br><br></br><br></br><br></br>
            </Container>
        </>
    );
}