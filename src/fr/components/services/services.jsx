import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ServicesOpFR() {
  
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
    









        .btns {
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
        <Link to='/fr/housing' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/s1WCdZx/IMG-7461.jpg)" }}></div>

              <ul class="details">
                <br></br>
                <li class="author">Pourquoi choisir Mexhubb pour le logement ?</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Processus transparent</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Diverses options</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Transactions transparentes</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Garantie des dépôts</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Contrats sur mesure</li>
              </ul>
            </div>
            <div class="description">
              <h1 class='mb'>Services de logement</h1>
              <h2 >Notre maison, à votre façon</h2>
              <p > Bienvenue dans les services de logement de Mexhubb, où trouver votre maison idéale à Mexico n'est pas seulement un processus, c'est une expérience. Notre approche est conçue pour rendre l’ensemble du voyage facile. </p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Voir plus <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/fr/tours' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/ssyyq5v/image00077.jpg)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">En savoir plus sur nos catégories de circuits</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Voyageurs du temps</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Esprit d'aventure</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Chercheurs de nature</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Amoureux des gourmands</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Visites personnalisées</li>
              </ul>
            </div>
            <div class="description">
              <h1>Visites à Mexhubb</h1>
              <h2>Une perspective unique</h2>
              <p>Bienvenue chez Mexhubb Tours, où chaque voyage est une exploration et une expérience enrichissante. Notre engagement va au-delà de l'offre de circuits, nous nous engageons à présenter la véritable essence du Mexique.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Voir plus <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/fr/events' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/ThB35Bx/20231222-151802.jpg)" }}></div>
              <ul class="details">
                <br></br>
                <li class="author">Nos services comprennent, sans toutefois s'y limiter :</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Soirées d'échange linguistique</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Immersion culturelle</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Bien-être</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Espaces de coworking</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Tournée des bars</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Activités sportives</li>
              </ul>
            </div>
            <div class="description">
              <h1>Événements Mexhubb</h1>
              <h2>Chaque instant est à toi</h2>
              <p>Nous sommes une communauté dynamique qui offre des expériences authentiques et mémorables. Nés de la passion de partager nos expériences avec le monde, nous offrons l'accès à des lieux et des activités exclusifs.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Voir plus <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/fr/legal' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/dWmwgfG/image00045-4.jpg)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Nous proposons en collaboration avec nos estimés partenaires :</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Visas et résidence</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Opérations immobilières</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Services aux entreprises et aux entreprises</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Représentation légale</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Assistance juridique personnalisée</li>
              </ul>
            </div>
            <div class="description">
              <h1>Services juridiques</h1>
              <h2>Votre allié juridique au Mexique</h2>
              <p>Bienvenue dans les services juridiques de Mexhubb, où nous collaborons avec des avocats, des cabinets d'avocats et des notaires réputés pour fournir une gamme complète d'assistance juridique. </p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Voir plus <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/fr/specialized' style={{ color: 'black' }} >
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/zngtDVY/IMG-7587.jpg)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Explorez nos catégories de services spécialisés :</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Services du personnel</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Services consultatifs en matière de santé</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Services quotidiens</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Conseil d'achat</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Assistance personnalisée</li>
              </ul>
            </div>
            <div class="description">
              <h1>Services spécialisés</h1>
              <h2>Des solutions sur mesure pour chaque besoin</h2>
              <p> Chez Mexhubb, nous comprenons que vos besoins sont uniques et nous sommes là pour offrir une large gamme de services spécialisés grâce à notre vaste réseau de partenaires et de collaborateurs.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Voir plus <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
      </Container>

    </>
  );
}