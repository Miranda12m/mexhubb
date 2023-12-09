import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function ServicesOp() {
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
            color: #5ad67d;
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
            color: #5ad67d;
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
            background: #5ad67d;
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
    

        `}
            </style>

            <Container>
                <Link to='/housing' style={{ color: 'black' }}>
                    <div class="blog-card mdb-card" data-aos="fade-right">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                            <ul class="details">
                                <li class="author"><a href="#">John Doe</a></li>
                                <li class="date">Aug. 24, 2015</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Code</a></li>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1 class='mb'>Housing Services</h1>
                            <h2 >Opening a door to the future</h2>
                            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/tours' style={{ color: 'black' }}>
                    <div class="blog-card alt mdb-card" data-aos="fade-right">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                            <ul class="details">
                                <li class="author"><a href="#">Jane Doe</a></li>
                                <li class="date">July. 15, 2015</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Code</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>Mexhubb Tours</h1>
                            <h2>Java is not the same as JavaScript</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/events' style={{ color: 'black' }}>
                    <div class="blog-card mdb-card" data-aos="fade-right">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                            <ul class="details">
                                <li class="author"><a href="#">John Doe</a></li>
                                <li class="date">Aug. 24, 2015</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Code</a></li>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>Mexhubb Events</h1>
                            <h2>Opening a door to the future</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/legal' style={{ color: 'black' }}>
                    <div class="blog-card alt mdb-card" data-aos="fade-right">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                            <ul class="details">
                                <li class="author"><a href="#">Jane Doe</a></li>
                                <li class="date">July. 15, 2015</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Code</a></li>
                                        <li><a href="#">JavaScript</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>Legal Services</h1>
                            <h2>Java is not the same as JavaScript</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to='/specialized' style={{ color: 'black' }}>
                    <div class="blog-card mdb-card" data-aos="fade-right">
                        <div class="meta">
                            <div class="photo" style={{ backgroundImage: "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)" }}></div>
                            <ul class="details">
                                <li class="author"><a href="#">John Doe</a></li>
                                <li class="date">Aug. 24, 2015</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Code</a></li>
                                        <li><a href="#">HTML</a></li>
                                        <li><a href="#">CSS</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>Specialized Services</h1>
                            <h2>Opening a door to the future</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
                </Link>
            </Container>

        </>
    );
}