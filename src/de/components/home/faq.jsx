import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function FAQDE() {
    return (
        <>
            <Container>
                <div>
                    <br></br><br></br><br></br>
                    <h1 style={{ textAlign: 'center' }} data-aos="fade-right" > Häufig gestellte Fragen</h1>
                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header>Was sind die wichtigsten Dienstleistungen von Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb bietet eine breite Palette von Dienstleistungen an, um Ausländern den Übergang nach Mexiko zu erleichtern. Dazu gehören die Unterstützung bei Visa- und Aufenthaltsverfahren, die Organisation von Besichtigungen, die Hilfe beim Erwerb oder der Anmietung von Wohnungen sowie personalisierte Dienstleistungen, um die individuellen Bedürfnisse jedes Kunden zu erfüllen.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" data-aos="fade-up">
                            <Accordion.Header>Wie kann ich den Visumantrag über Mexhubb einleiten?</Accordion.Header>
                            <Accordion.Body>
                            Die Einleitung des Verfahrens ist unkompliziert. Sie können unser Team über unsere Website, per E-Mail oder telefonisch kontaktieren. Unsere Experten werden Sie durch die Anforderungen führen und Ihnen die notwendigen Informationen zur Verfügung stellen, um das Verfahren effektiv zu starten.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" data-aos="fade-up">
                            <Accordion.Header>Welche Arten von Touren bietet Mexhubb an, und wie kann ich eine buchen?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb organisiert eine Vielzahl von Touren, von kulturellen Erkundungen bis hin zu Immobilienbesichtigungen. Auf unserer Website finden Sie Einzelheiten zu unseren Touren und können online reservieren. Außerdem beraten wir Sie gerne bei der Auswahl der Tour, die Ihren Interessen am besten entspricht.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" data-aos="fade-up">
                            <Accordion.Header>Wie unterscheidet sich Mexhubb von anderen Hilfsdiensten für Expatriates in Mexiko?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb zeichnet sich durch seinen umfassenden und persönlichen Ansatz aus. Wir wickeln nicht nur rechtliche Verfahren ab, sondern bieten auch Dienstleistungen an, die auf die individuellen Bedürfnisse eines jeden Kunden zugeschnitten sind. Unsere Liebe zum Detail und unser Engagement für hervorragende Leistungen machen uns zu einem zuverlässigen Partner beim Übergang zum Leben in Mexiko.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" data-aos="fade-up">
                            <Accordion.Header>Wie sieht die Rückerstattungspolitik im Falle einer Stornierung der Dienste von Mexhubb aus?</Accordion.Header>
                            <Accordion.Body>
                            Im Falle einer Stornierung gilt eine Rückerstattungsregelung von 50 % der Gesamtkosten für die mit Mexhubb vereinbarten Dienstleistungen. Wir sind uns bewusst, dass die Umstände variieren können, aber diese Regelung ermöglicht es uns, die Verwaltungs- und Planungskosten zu decken, die mit der persönlichen Betreuung jedes einzelnen Kunden verbunden sind.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <br></br><br></br><br></br><br></br>
            </Container>
        </>
    );
}