import React from 'react'
import { Link } from "react-router-dom";
import "./css/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
function FooterFR() {
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
                                        <a href="https://www.facebook.com/profile.php?id=61554405899957" target='blank' class="social-icon-link">
                                            <FaFacebook size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover' />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.instagram.com/mexhubb/" target='blank'class="social-icon-link">
                                            <FaInstagram size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover' />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank'>
                                            <FaXTwitter size={20} style={{ marginRight: '10px', color: 'white' }} class='button-hover'  />
                                        </a>
                                    </li>

                                    <li class="social-icon-item">
                                        <a href="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank'>
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
                                            <h3>À propos de nous</h3>
                                        </div>
                                    </div>
                                    <div className="footer-logo">
                                        <Link to="/fr/home">
                                            <img src="https://i.ibb.co/JRGzny4/logo-sin-fondo-blanco-05-1.png" alt="logo" className="img-fluid" ></img>
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Nous apprécions votre confiance en notre entreprise et nos produits. Nous continuerons à travailler dur pour vous fournir les meilleurs services.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Liens utiles</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/fr/home">
                                            Maison
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/contact">
                                            Contactez-nous
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/services">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/tours">
                                            Visites
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/housing">
                                            Logement
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/events">
                                            Événements
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/legal">
                                                Legal
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/fr/specialized">
                                            Spécialisé
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Contactez-nous</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Ne manquez pas de nous contacter si vous avez des questions</p>
                                        <p>Téléphone: +52 00 0000 0000</p>
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
                                    <p className="text-left" >Copyright &copy; 2023, Tous droits réservés <a href="https://weblessproject.com" target='blank'>Webless Project</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/#/fr/home">Maison</a></li>
                                        <li><a href="/#/fr/terms-and-conditions">Termes et conditions</a></li>
                                        <li><a href="/#/fr/privacy-policy">Privacy Policies</a></li>
                                        <li><a href="/#/fr/contact" >Contact</a></li>
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

export default FooterFR