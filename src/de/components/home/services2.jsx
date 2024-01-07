import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Services2DE() {
  AOS.init();
  return (
    <>
      <style>
        {`
section {
    padding: 60px 0;
    min-height: 100vh;
}
a, a:hover, a:focus, a:active {
    text-decoration: none;
    outline: none;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}.bg-gray {
    background-color: #f9f9f9;
}

.site-heading h2 {
  display: block;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.site-heading h2 span {
  color: #FF3B19;
}

.site-heading h4 {
  display: inline-block;
  padding-bottom: 20px;
  position: relative;
  text-transform: capitalize;
  z-index: 1;
}

.site-heading h4::before {
  background: #FF3B19 none repeat scroll 0 0;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;
}

.site-heading {
  margin-bottom: 60px;
  overflow: hidden;
  margin-top: -5px;
}

.carousel-shadow .owl-stage-outer {
  margin: -15px -15px 0;
  padding: 15px;
}

.we-offer-area .our-offer-carousel .owl-dots .owl-dot span {
  background: #ffffff none repeat scroll 0 0;
  border: 2px solid;
  height: 15px;
  margin: 0 5px;
  width: 15px;
}

.we-offer-area .our-offer-carousel .owl-dots .owl-dot.active span {
  background: #FF3B19 none repeat scroll 0 0;
  border-color: #FF3B19;
}

.we-offer-area .item {
  background: #ffffff none repeat scroll 0 0;
  border-left: 2px solid #FF3B19;
  -moz-box-shadow: 0 0 10px #cccccc;
  -webkit-box-shadow: 0 0 10px #cccccc;
  -o-box-shadow: 0 0 10px #cccccc;
  box-shadow: 0 0 10px #cccccc;
  overflow: hidden;
  padding: 30px;
  position: relative;
  z-index: 1;
}

.we-offer-area.text-center .item {
  border: medium none;
  padding: 67px 40px 64px;
}

.we-offer-area.text-center .item i {
  background: #FF3B19 none repeat scroll 0 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  font-size: 40px;
  height: 80px;
  line-height: 70px;
  position: relative;
  text-align: center;
  width: 80px;
  z-index: 1;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  margin-bottom: 25px;
}

.we-offer-area.text-center .item i::after {
  border: 2px solid #FF3B19;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: "";
  height: 90px;
  left: -5px;
  position: absolute;
  top: -5px;
  width: 90px;
  z-index: -1;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
}

.we-offer-area.item-border-less .item {
  border: medium none;
}

.we-offer-area .our-offer-items.less-carousel .equal-height {
  margin-bottom: 30px;
}

.we-offer-area.item-border-less .item .number {
  font-family: "Poppins",sans-serif;
  font-size: 50px;
  font-weight: 900;
  opacity: 0.1;
  position: absolute;
  right: 30px;
  top: 30px;
}

.our-offer-carousel.center-active .owl-item:nth-child(2n) .item,
.we-offer-area.center-active .single-item:nth-child(2n) .item {
  background: #FF3B19 none repeat scroll 0 0;
}

.our-offer-carousel.center-active .owl-item:nth-child(2n) .item i,
.our-offer-carousel.center-active .owl-item:nth-child(2n) .item h4,
.our-offer-carousel.center-active .owl-item:nth-child(2n) .item p,
.we-offer-area.center-active .single-item:nth-child(2n) .item i,
.we-offer-area.center-active .single-item:nth-child(2n) .item h4,
.we-offer-area.center-active .single-item:nth-child(2n) .item p {
  color: #ffffff;
}

.we-offer-area .item i {
  color: #FF3B19;
  display: inline-block;
  font-size: 60px;
  margin-bottom: 20px;
}

.we-offer-area .item h4 {
  font-weight: 600;
  text-transform: capitalize;
}

.we-offer-area .item p {
  margin: 0;
}

.we-offer-area .item i,
.we-offer-area .item h4,
.we-offer-area .item p {
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
}

.we-offer-area .item::after {
  background: #FF3B19 none repeat scroll 0 0;
  content: "";
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  transition: all 0.35s ease-in-out;
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -ms-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  width: 100%;
  z-index: -1;
}

.we-offer-area .item:hover::after {
  left: 0;
}

.we-offer-area .item:hover i,
.we-offer-area .item:hover h4,
.we-offer-area .item:hover p {
  color: #ffffff !important;
}

.we-offer-area.text-center .item:hover i::after {
  border-color: #ffffff !important;
}

.we-offer-area.text-center .item:hover i {
  background-color: #ffffff !important;
  color: #FF3B19 !important;
}

.we-offer-area.text-left .item i {
  background: #FF3B19 none repeat scroll 0 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  color: #ffffff;
  display: inline-block;
  font-size: 60px;
  height: 100px;
  line-height: 100px;
  margin-bottom: 30px;
  position: relative;
  width: 100px;
  z-index: 1;
  text-align: center;
}

.we-offer-area.text-left .item i::after {
  border: 2px solid #FF3B19;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  content: "";
  height: 120px;
  left: -10px;
  position: absolute;
  top: -10px;
  width: 120px;
}

 .fondo{
 }

 .we-offer-area.text-center .fondo {
  background: url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1; 
}

.we-offer-area.text-center .fondo2 {
  background: url(https://images.unsplash.com/photo-1619523015505-09ff57046d46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1; 
}

.we-offer-area.text-center .fondo3 {
  background: url(https://images.unsplash.com/photo-1520098183066-2a5609904268?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo3::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35); 
  z-index: -1;
}

.we-offer-area.text-center .fondo4 {
  background: url(https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo4::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1; 
}

.we-offer-area.text-center .fondo5 {
  background: url(https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo5::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1; 
}

.we-offer-area.text-center .fondo6 {
  background: url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat;
  border: medium none;
  background-size: cover; 
  padding: 67px 40px 64px;
}
.we-offer-area.text-center .fondo6::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1; 
}

.tabla-con-cartas {
  width: 100%;
}

@media (max-width: 768px) {
  .tabla-con-cartas {
    overflow-x: scroll; 
  }
}

@media (min-width: 769px) {
  .our-offer-items.less-carousel {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
  }
}

@media (max-width: 768px) {
  .our-offer-items.less-carousel {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .item{
    height: 353px;
  }
}

.margenes{
  margin-top: 5%;
  margin-bottom: 5%;
}
                `}
      </style>
      <Container>
        <div class="we-offer-area text-center margenes">
          <div class="container" >
            <div class="row">
              <div class="col-md-12">
                <div class="site-heading text-center" data-aos="fade-right">
                  <h2>What we <span>Offer</span></h2>
                  <h4>Simplifying life, Tailoring Solutions</h4>
                </div>
              </div>
            </div>
            <div className="tabla-con-cartas">
              <div class="row our-offer-items less-carousel ">
                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to="/en/housing" style={{ color: 'white' }} >
                    <div class="item fondo" data-aos="fade-up">
                      <i> <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-house-check-fill" viewBox="0 0 16 16" >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                        <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
                      </svg></i>
                      <h4>Housing Services</h4>
                      <p>
                        Mexhubb's Housing Services, where finding your ideal home in Mexico City is not just a process, it's an experience.
                      </p>
                    </div>
                  </Link>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to="/en/tours" style={{ color: 'white' }}>
                    <div class="item fondo2" data-aos="fade-up">
                      <i><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-compass-fill" viewBox="0 0 16 16">
                        <path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24m-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
                      </svg></i>
                      <h4>Mexhubb Tours</h4>
                      <p>
                        Mexhubb Tours, where every journey is an exploration and an enriching experience that delve deep into the cultural essence.
                      </p>
                    </div>
                  </Link>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to='/en/events' style={{ color: 'white' }}>
                    <div class="item fondo3" data-aos="fade-up">
                      <i><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                      </svg></i>
                      <h4>Mexhubb Events</h4>
                      <p>
                        Born out of a passion for sharing our experiences with the world, we offer access to exclusive places and special activities.
                      </p>
                    </div>
                  </Link>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to='/en/legal' style={{ color: 'white' }}>
                    <div class="item fondo4" data-aos="fade-up">
                      <i><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                      </svg></i>
                      <h4>Legal Services</h4>
                      <p>
                        Our collaborative approach ensures that you receive expert guidance and support in various legal matters.
                      </p>
                    </div>
                  </Link>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to="/en/specialized" style={{ color: 'white' }}>
                    <div class="item fondo5" data-aos="fade-up">
                      <i><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg></i>
                      <h4>Specialized Services</h4>
                      <p>
                        We understand that your needs are unique, and we're here to offer a wide array of specialized services.
                      </p>
                    </div>
                  </Link>
                </div>

                <div class="col-md-4 col-sm-6 equal-height">
                  <Link to="/en/contact" style={{ color: 'white' }}>
                    <div class="item fondo6" data-aos="fade-up">
                      <i><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16" style={{ alignItems: 'center', verticalAlign: 'center' }}>
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                      </svg></i>
                      <h4>Contact Us</h4>
                      <p>
                        No matter how specific your request, Mexhubb is dedicated to going the extra mile to assist you.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>

    </>
  );
}
