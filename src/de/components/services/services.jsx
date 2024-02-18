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
        <Link to='/de/housing' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/ck5nvQs/IMG-7461.webp)" }}></div>

              <ul class="details">
                <br></br>
                <li class="author">Warum Mexhubb für die Unterbringung wählen?</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Nahtloser Prozess</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Vielfältige Optionen</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Transparente Vorgänge</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Kautionsversicherung</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Maßgeschneiderte Verträge</li>
              </ul>
            </div>
            <div class="description">
              <h1 class='mb'>Gehäuse Dienstleistungen</h1>
              <h2 >Unser Zuhause, Ihr Weg</h2>
              <p > Willkommen bei Mexhubb's Housing Services, wo die Suche nach Ihrem idealen Zuhause in Mexiko-Stadt nicht nur ein Prozess ist, sondern ein Erlebnis. Unser Ansatz ist darauf ausgerichtet, Ihnen die gesamte Reise so angenehm wie möglich zu gestalten. </p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Mehr Sehen <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/de/tours' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/bmHrQ4z/image00077.webp)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Erfahren Sie mehr über unsere Reisekategorien</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Zeitreisende</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Fernweh</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Naturforscher</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Foodie-Liebhaber</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personalisierte Touren</li>
              </ul>
            </div>
            <div class="description">
              <h1>Mexhubb Touren</h1>
              <h2>Einzigartige Perspektive</h2>
              <p>Willkommen bei Mexhubb Tours, wo jede Reise eine Entdeckung und eine bereichernde Erfahrung ist. Unser Engagement geht weit über das Anbieten von Touren hinaus. Wir widmen uns der Präsentation der wahren Essenz Mexikos.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Mehr Sehen <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/de/events' style={{ color: 'black' }}>
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/Jqt3bZY/20231222-151802.webp)" }}></div>
              <ul class="details">
                <br></br>
                <li class="author">Unsere Dienstleistungen umfassen unter anderem:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Sprachaustauschpartys</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Kulturelles Eintauchen</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Wellness</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Coworking-Räume</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Bar Hopping</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Sportliche Aktivitäten</li>
              </ul>
            </div>
            <div class="description">
              <h1>Mexhubb Veranstaltungen</h1>
              <h2>Jeder Moment gehört dir</h2>
              <p>Wir sind eine lebendige Gemeinschaft, die authentische und unvergessliche Erlebnisse bietet. Entstanden aus der Leidenschaft, unsere Erfahrungen mit der Welt zu teilen, bieten wir Zugang zu exklusiven Orten und Aktivitäten.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Mehr Sehen <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/de/legal' style={{ color: 'black' }}>
          <div class="blog-card alt mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/DKCbB08/image00045-4.webp)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Wir bieten in Zusammenarbeit mit unseren geschätzten Partnern:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Visa und Aufenthaltsgenehmigung</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Immobilien-Transaktionen</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Geschäfts- und Unternehmensdienstleistungen</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Juristische Vertretung</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Persönlicher Rechtsbeistand</li>
              </ul>
            </div>
            <div class="description">
              <h1>Juristische Dienstleistungen</h1>
              <h2>Ihr juristischer Verbündeter in Mexiko</h2>
              <p>Willkommen bei Mexhubb's Legal Services, wo wir mit renommierten Anwälten, Anwaltskanzleien und Notariaten zusammenarbeiten, um ein umfassendes Angebot an Rechtshilfe zu bieten. </p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Mehr Sehen <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
        <Link to='/de/specialized' style={{ color: 'black' }} >
          <div class="blog-card mdb-card" data-aos="fade-right">
            <div class="meta">
              <div class="photo" style={{ backgroundImage: "url(https://i.ibb.co/8b7XfzR/IMG-7587.webp)" }}></div>
              <ul class="details">
              <br></br>
                <li class="author">Entdecken Sie unsere spezialisierten Servicekategorien:</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personaldienstleistungen</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Gesundheitliche Beratungsdienste</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Tägliche Dienste</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Kaufberatung</li>
                <li class="date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
                </svg> Personalisierte Unterstützung</li>
              </ul>
            </div>
            <div class="description">
              <h1>Spezialisierte Dienstleistungen</h1>
              <h2>Maßgeschneiderte Lösungen für jeden Bedarf</h2>
              <p> Wir bei Mexhubb wissen, dass Ihre Bedürfnisse einzigartig sind, und bieten Ihnen über unser umfangreiches Netzwerk von Partnern und Mitarbeitern eine breite Palette an spezialisierten Dienstleistungen.</p>
              <p class="read-more">
                <a href="#" class="btns btn-learn">Mehr Sehen <span class="arrow">❯</span></a>
              </p>
            </div>
          </div>
        </Link>
      </Container>

    </>
  );
}