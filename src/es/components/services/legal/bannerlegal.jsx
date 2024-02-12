import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function BannerLegalES() {
  return (
    <>
      <style>
        {`
          .carousel-item img {
            width: 100%;
            height: 50vh;
            object-fit: cover;
            filter: brightness(0.6);
          }
        `}
      </style>
      <MDBCarousel style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '50vh' }}>
        <MDBCarouselItem itemId={1}>
          <div className="overlay"></div>
          <img
            src='https://i.ibb.co/PQVvC6Y/IMG-7481.jpg'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <div className="overlay"></div>
          <img
            src='https://i.ibb.co/zngtDVY/IMG-7587.jpg'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <div className="overlay"></div>
          <img
            src='https://i.ibb.co/QkTxQ49/image00097-2.jpg'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
      </MDBCarousel>

      <div className="container" style={{ height: '50%', position: 'absolute', zIndex: '2', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <div className="row">
          <div className="col-md-12 text-white text-center" data-aos="fade-right">
            <h1 className="m-b-20" >
              <strong style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.8em', fontWeight:'bold', color: 'white'}}>Servicios Legales</strong>
            </h1>
            <p className="m-b-40" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.3em', fontWeight:'bold'}}>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
