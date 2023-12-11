import React from 'react';
import { Container } from 'react-bootstrap';

export default function BodyBag02() {

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
                            <div class="col-lg-6" data-aos='fade-right'>
                                <img src="https://images.unsplash.com/photo-1625255312232-be213007ec00?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about" class="img-fluid imagenbb" width="100%" />
                            </div>
                            <div class="col-lg-6" data-aos='fade-up'>
                                <div class="heading ">
                                    <h2>Our Home,
                                        <span> Your Way</span></h2>
                                    <p>Ready to find your perfect home? Explore our housing options now.
                                    </p>
                                </div>
                                <p>At Mexhubb, we believe that finding the right home should be an enjoyable experience. Our housing services are not just about rentals; they're about creating a comfortable and secure space that aligns with your lifestyle. Choose Mexhubb for housing, where ease, transparency, and flexibility come together to make your stay in Mexico City unforgettable.</p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg> Comfortable and secure spaces</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Ease, transparency, and flexibility</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Adaptable contracts</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Seamless transition</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>Smooth and worry-free stay</h4>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ marginRight: '5px', color: '#FF3B19' }}>
                                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                            </svg>
                                            Streamlined housing service</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}