import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
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
        `}
      </style>
      <MDBCarousel style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>
        <MDBCarouselItem itemId={1}>
          <div className="overlay"></div>
          <img
            src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <div className="overlay"></div>
          <img
            src='https://images.pexels.com/photos/7414931/pexels-photo-7414931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='d-block vw-100'
            alt='...'
          />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <div className="overlay"></div>
          <img
            src='https://images.pexels.com/photos/1573471/pexels-photo-1573471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
              <strong style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '2em', fontWeight:'bold', color: 'white'}}>Mexhubb<br /></strong>
              <strong style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',fontWeight:'bold', color: 'white'}}>Your Partner in Mexico City<br /></strong>
            </h1>
            <p className="m-b-40" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '1.3em', fontWeight:'bold'}}>
              
            </p>
            <br></br>
            <p>
              <Link to="/services">
              <button type="button" className="btn btn-success">Book your adventure now!</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
