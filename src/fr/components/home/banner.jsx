import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function AppFR() {
  return (
    <>
      <style>
        {`
          .carousel-item img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            filter: brightness(0.6);
          }
          .button-hover:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            background-color: #ea2d0d;
        }
        `}
      </style>
      <MDBCarousel style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
        <MDBCarouselItem itemId={1}>
          <div className="overlay"></div>
          <img
            src='https://images.unsplash.com/photo-1600064252184-8d03b69d53e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <div className="overlay"></div>
          <img
            src='https://i.ibb.co/BNgh0Sz/20231222-151406.webp'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <div className="overlay"></div>
          <img
            src='https://i.ibb.co/NNNTH1c/image00025-4.webp'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
      </MDBCarousel>

      <div className="container" style={{ height: '100%', position: 'absolute', zIndex: '2', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <div className="row">
          <div className="col-md-12 text-white text-center" >
            <h1 className="m-b-20" >
              <strong style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '2em', fontWeight: 'bold', color: 'white' }}>
                Mexhubb              <br />
              </strong>
              <strong style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold', color: 'white' }}>Des idées à la réalité<br /></strong>
            </h1>
            <p className="m-b-40" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.3em', fontWeight: 'bold' }}>

            </p>
            <br></br>
            <p>
              <Link to="/fr/services">
                <div class="btn-box ">
                  <a href="/de/services" class="theme-btn btn-style-one button-hover">Rejoignez Mexhubb</a>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
