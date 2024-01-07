import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ServicesOpDE() {
  
  return (
    <>


      <style>
        {`
        * {
            box-sizing: border-box;
          }
          
          .blog-card {
            display: flex;
            flex-direction: column;
            margin: 1rem auto;
            box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 3%;
            background: #fff;
            line-height: 1.4;
            border-radius: 5px;
            overflow: hidden;
            z-index: 0;
          }
          
          .blog-card a {
            color: inherit;
          }
          
          .blog-card a:hover {
            color: #ff3b19;
          }
          
          .blog-card:hover {
            .photo {
              transform: scale(1.3) rotate(3deg);
            }
          }
          
          .blog-card .meta {
            position: relative;
            z-index: 0;
            height: 200px;
          }
          
          .blog-card .photo {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-size: cover;
            background-position: center;
            transition: transform 0.2s;
          }
          
          .blog-card .details,
          .blog-card .details ul {
            margin: auto;
            padding: 0;
            list-style: none;
          }
          
          .blog-card .details {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -100%;
            margin: auto;
            transition: left 0.2s;
            background: rgba(0, 0, 0, 0.6);
            color: #fff;
            padding: 10px;
            width: 100%;
            font-size: 0.9rem;
          }
          
          .blog-card .details a {
            text-decoration: dotted underline;
          }
          
          .blog-card .details ul li {
            display: inline-block;
          }
          
          .blog-card .details .author:before {
            font-family: FontAwesome;
            margin-right: 10px;
            content: "\f007";
          }
          
          .blog-card .details .date:before {
            font-family: FontAwesome;
            margin-right: 10px;
            content: "\f133";
          }
          
          .blog-card .details .tags ul:before {
            font-family: FontAwesome;
            content: "\f02b";
            margin-right: 10px;
          }
          
          .blog-card .details .tags li {
            margin-right: 2px;
          }
          
          .blog-card .details .tags li:first-child {
            margin-left: -4px;
          }
          
          .blog-card .description {
            padding: 1rem;
            background: #fff;
            position: relative;
            z-index: 1;
          }
          
          .blog-card .description h1,
          .blog-card .description h2 {
            font-family: Poppins, sans-serif;
          }
          
          .blog-card .description h1 {
            line-height: 1;
            margin: 2%;
            font-size: 1.7rem;
          }
          
          .blog-card .description h2 {
            font-size: 1rem;
            margin: 2%;
            font-weight: 300;
            text-transform: uppercase;
            color: #a2a2a2;
            margin-top: 5px;
          }
          
          .blog-card .description .read-more {
            text-align: right;
          }
          
          .blog-card .description .read-more a {
            color: #ff3b19;
            display: inline-block;
            position: relative;
          }
          
          .blog-card .description .read-more a:after {
            content: "\f061";
            font-family: FontAwesome;
            margin-left: -10px;
            opacity: 0;
            vertical-align: middle;
            transition: margin 0.3s, opacity 0.3s;
          }
          
          .blog-card .description .read-more a:hover:after {
            margin-left: 5px;
            opacity: 1;
          }
          
          .blog-card p {
            position: relative;
            margin: 2%;
          }
          
          .blog-card p:first-of-type {
            margin-top: 1.25rem;
          }
          
          .blog-card p:first-of-type:before {
            content: "";
            position: absolute;
            height: 5px;
            background: #ff3b19;
            width: 35px;
            top: -0.75rem;
            border-radius: 3px;
          }
          
          .blog-card:hover .details {
            left: 0%;
          }
          
          @media (min-width: 640px) {
            .blog-card {
              flex-direction: row;
            }
          
            .blog-card .meta {
              flex-basis: 40%;
              height: auto;
            }
          
            .blog-card .description {
              flex-basis: 60%;
            }
          
            .blog-card .description:before {
              transform: skewX(-3deg);
              content: "";
              background: #fff;
              width: 30px;
              position: absolute;
              left: -10px;
              top: 0;
              bottom: 0;
              z-index: -1;
            }
          
            .blog-card.alt {
              flex-direction: row-reverse;
            }
          
            .blog-card.alt .description:before {
              left: inherit;
              right: -10px;
              transform: skew(3deg);
            }
          
            .blog-card.alt .details {
              padding-left: 25px;
            }
          }

          .mdb-card:hover {
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
        }
    









        .btn {
          display: inline-block;
          background: #e2e2e2;
          border: 0;
          line-height: 2.5em;
          padding: 0 0 0 1em;
          margin-bottom: 1em;
          outline: none;
          text-decoration: none;
          color: #666;
          
          .arrow {
            display: inline-block;
            line-height: 2.5em;
            text-align: center;
            background: #333;
            color: white;
            font-size: 1em;
            width: 2.5em;
            transition: margin 200ms;
            margin-left: .75em;
          }
          
          &:hover {
            background: #e2e2e2;
            .arrow {
              margin-left: 1.25em;
              background-color: darken(#333,5%);
            } 
          }
          &:active {
            background: #ccc;
            .arrow {
              margin-left: 1.5em;
            } 
          }
        }
        
        .btn-info {
          .arrow {
            background-color: indianred;
          }
          &:hover {
            .arrow {
              background-color: desaturate(darken(indianred,5%),5%);
            }
          }
        }
        
        .btn-learn {
          .arrow {
            background-color: #ff3b19;
          }
          &:hover {
            .arrow {
              background-color: desaturate(darken(salmon,5%),5%);
            }
          }
        }
        
        
        
        
        // Remove Focus 
        
        button::-moz-focus-inner {
            border: none;
        }
        
        
        
        `}
      </style>

      <Container>
        <Link to='/en/housing' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1674681512510-e06db64f53fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>

              <ul class="details">
                <br></br>
                <li class="author">Why Choose Mexhubb for Housing?</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Seamless Process</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Diverse Options</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Transparent Transactions</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Deposit Assurance</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Tailored Contracts</li>
              </ul>
            </div>
            <div class="description">
              <h1 class='mb'>Housing Services</h1>
              <h2 >Our Home, Your Way</h2>
              <p > Welcome to Mexhubb's Housing Services, where finding your ideal home in Mexico City is not just a process—it's an experience. Our approach is designed to make the entire journey easygoing. </p>
              <p class="read-more">
                <a href="#" class="btn btn-learn">Learn More <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/en/tours' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1561025478-827f5fad6374?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Know more about our Categories of Tours</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Time Travellers</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Wanderlust</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Nature Seekers</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Foodie Lovers</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personalized Tours</li>
              </ul>
            </div>
            <div class="description">
              <h1>Mexhubb Tours</h1>
              <h2>A Unique Perspective</h2>
              <p>Welcome to Mexhubb Tours, where every journey is an exploration and enriching experience. Our commitment goes beyond offering tours we're dedicated to showcasing the Mexico's true essence.</p>
              <p class="read-more">
                <a href="#" class="btn btn-learn">Learn More <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/en/events' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1520098183066-2a5609904268?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
              <ul class="details">
                <br></br>
                <li class="author">Our services include, but are not limited to:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Language exchange parties</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Cultural immersion</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Wellness</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Coworking spaces</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Bar Hopping</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Sports activities</li>
              </ul>
            </div>
            <div class="description">
              <h1>Mexhubb Events</h1>
              <h2>Every moment is yours</h2>
              <p>We are a vibrant community that provides authentic and memorable experiences. Born out of a passion for sharing our experiences to the world, we offer access to exclusive places and activities.</p>
              <p class="read-more">
                <a href="#" class="btn btn-learn">Learn More <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/en/legal' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">We offer in collaboration with our esteemed partners:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Visas and Residency</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Real Estate Transactions</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Business and Corporate Services</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Legal Represntation</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personalized Legal Assistance</li>
              </ul>
            </div>
            <div class="description">
              <h1>Legal Services</h1>
              <h2>Your Legal Ally in Mexico</h2>
              <p>Welcome to Mexhubb's Legal Services, where we partner with reputable lawyers, law firms, and notary offices to provide a comprehensive range of legal assistance. </p>
              <p class="read-more">
                <a href="#" class="btn btn-learn">Learn More <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/en/specialized' style={{ color: 'black' }} >
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Explore our specialized service categories:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personnel Services</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Health Advisory Services</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Daily Services</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Buying Advisory</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personalized Assistance</li>
              </ul>
            </div>
            <div class="description">
              <h1>Specialized Services</h1>
              <h2>Tailored Solutions for Every Need</h2>
              <p> At Mexhubb, we understand that your needs are unique, and we're here to offer a wide array of specialized services through our extensive network of partners and collaborators.</p>
              <p class="read-more">
                <a href="#" class="btn btn-learn">Learn More <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
      </Container>

    </>
  );
}