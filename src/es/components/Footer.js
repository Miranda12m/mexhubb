import React from 'react'
import { Link } from "react-router-dom";
import "./css/footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
function FooterES() {
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
                                            <h3>Acerca de</h3>
                                        </div>
                                    </div>
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img src="https://i.ibb.co/JRGzny4/logo-sin-fondo-blanco-05-1.png" alt="logo" className="img-fluid" ></img>
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Agradecemos su confianza en nuestra empresa y nuestros productos. Seguiremos trabajando duro para brindarles los mejores servicios.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Enlaces Utiles</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                Inicio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/contact">
                                                Contacto
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/services">
                                                Servicios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/tours">
                                                Tours
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/housing">
                                                Alojamiento
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/events">
                                                Eventos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/legal">
                                                Legal
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/es/specialized">
                                                Especializados
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Contactanos</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>No dejes de contactarnos si tienes alguna pregunta</p>
                                        <p>Telefono: +49 176 42000239</p>
                                        <p>Correo: contact@mexhubb.com</p>
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
                                    <p className="text-left" >Copyright &copy; 2023, Todos los Derechos Reservados <a href="https://weblessproject.com" target='blank'>Webless Project</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/#/es/terms-and-conditions">Terminos y Condiciones</a></li>
                                        <li><a href="/#/es/privacy-policy">Politicas de Privacidad</a></li>
                                        <li><a href="/#/es/contact" >Contacto</a></li>
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

export default FooterES