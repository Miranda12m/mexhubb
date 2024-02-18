import React from 'react'
import { Link } from "react-router-dom";
import "./css/footer.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
function FooterDE() {
    return (
        <>
            <style>
                {`
            .button-hover:hover {
                box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                transform: scale(1.02);
                transition: all 0.2s ease-in-out;
            }
            `}
            </style>
            <footer className="footer-section">
                <div class="site-footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12">
                                <h2 class="Titulos text-white mb-lg-0">Mexhubb</h2>
                            </div>

                            <div class="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                                <ul class="social-icon d-flex justify-content-lg-end">
                                    <li class="social-icon-item">
                                        <a href="https://www.facebook.com/profile.php?id=61554405899957" target='blank' class="social-icon-link" aria-label="Facebook">
                                            <FaFacebook size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover' />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.instagram.com/mexhubb/" target='blank'class="social-icon-link" aria-label="Instagram"> 
                                            <FaInstagram size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover' />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank' aria-label="Twitter">
                                            <FaXTwitter size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover'  />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank' aria-label="Threads">
                                            <FaThreads size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover'  />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Background-footer"></div>
                <div className="container">
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    {/* <div className="footer-logo">
                                        <a href="index.html"><img src="./img/Weblesslogosbg.png" className="img-fluid" alt="logo"></img></a>
                                    </div> */}
                                    <div className="footer-social-icon">
                                        <div className="footer-widget-heading">
                                            <h3>Über uns</h3>
                                        </div>
                                    </div>
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img src="https://i.ibb.co/JRGzny4/logo-sin-fondo-blanco-05-1.png" alt="logo" className="img-fluid" ></img>
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Wir freuen uns über Ihr Vertrauen in unser Unternehmen und unsere Produkte. Wir werden weiterhin hart daran arbeiten, Ihnen den besten Service zu bieten.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Nützliche Links</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                            Heim
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/contact">
                                            Kontaktiere uns
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/services">
                                            Dienstleistungen
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/tours">
                                            Touren
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/housing">
                                            Gehäuse
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/events">
                                            Veranstaltungen
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/legal">
                                                Legal
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/de/specialized">
                                            Spezialisiert
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Kontaktiere uns</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Versäumen Sie nicht, uns zu kontaktieren, wenn Sie Fragen haben</p>
                                        <p>Phone: +49 176 42000239</p>
                                        <p>Mail: contact@mexhubb.com</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p className="text-left" >Copyright &copy; 2023, Alle Rechte vorbehalten <a href="https://weblessproject.com" target='blank'>Webless Project</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Heim</a></li>
                                        <li><a href="/#/de/terms-and-conditions">Geschäftsbedingungen</a></li>
                                        <li><a href="/#/de/privacy-policy">Datenschutzrichtlinien</a></li>
                                        <li><a href="/#/de/contact" >Kontakt</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterDE