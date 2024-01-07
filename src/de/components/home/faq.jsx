import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function FAQDE() {
    return (
        <>
            <Container>
                <div>
                    <br></br><br></br><br></br>
                    <h1 style={{ textAlign: 'center' }} data-aos="fade-right" > Frequently Asked Questions </h1>
                    <br></br>
                    <Accordion>
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header>What are the main services offered by Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb provides a wide range of services to facilitate the transition of foreigners to Mexico. This includes assistance with visa and residence procedures, organizing tours, helping with the acquisition or rental of residences, and personalized services to meet the individual needs of each client.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" data-aos="fade-up">
                            <Accordion.Header>How can I initiate the visa application process through Mexhubb?</Accordion.Header>
                            <Accordion.Body>
                            Initiating the process is straightforward. You can contact our team through our website, email, or phone. Our experts will guide you through the requirements and provide the necessary information to effectively start the process.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" data-aos="fade-up">
                            <Accordion.Header>What types of tours does Mexhubb offer, and how can I book one?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb organizes a variety of tours, from cultural explorations to real estate tours. You can find details about our tours on our website and make reservations online. Additionally, we are available to advise you on the tour that best suits your interests.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" data-aos="fade-up">
                            <Accordion.Header>How does Mexhubb differ from other expatriate assistance services in Mexico?</Accordion.Header>
                            <Accordion.Body>
                            Mexhubb stands out for its comprehensive and personalized approach. We not only handle legal procedures but also offer services tailored to the individual needs of each client. Our attention to detail and commitment to excellence make us a reliable partner in transitioning to life in Mexico.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" data-aos="fade-up">
                            <Accordion.Header>What is the refund policy in the event of cancellation of Mexhubb's services?</Accordion.Header>
                            <Accordion.Body>
                            In the event of cancellation, a refund policy of 50% of the total cost of the contracted services with Mexhubb applies. We understand that circumstances may vary, but this policy allows us to cover administrative and planning costs associated with the personalized attention we provide to each client.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <br></br><br></br><br></br><br></br>
            </Container>
        </>
    );
}