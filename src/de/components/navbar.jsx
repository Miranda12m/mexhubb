import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import LanguageSelectorDE from "./LanguageSelectorDE";

function NavbarDE({ currentPage, height = 100 }) {
  useEffect(() => {
    const select = (el, all = false) => {
      el = el.trim();
      if (!el) {
        console.error("Empty selector provided."); // Puedes mostrar un mensaje de error o manejar el caso según sea necesario
        return null;
      }
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };


    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select("#header");
      if (!header) {
        console.error("Element with ID 'header' not found.");
        return;
      }

      let offset = header.offsetHeight;
      let elementPos = select(el)?.offsetTop;

      if (elementPos !== undefined) {
        window.scrollTo({
          top: elementPos - offset,
          behavior: "smooth",
        });
      }
    };


    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > height) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Mobile nav toggle
     */
    on("click", "#mobile-nav-toggle", function (e) {
      const navbar = select("#navbar");
      navbar.classList.toggle("navbar-mobile");
    });

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        const navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          const navbar = select("#navbar");
          if (navbar.classList.contains("navbar-mobile")) {
            navbar.classList.remove("navbar-mobile");
          }

          // Scroll to the target element
          scrollto(this.hash);

          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          // Reload the page
          window.location.reload();
        }
      },
      true
    );
  }, [currentPage, height]);
  AOS.init();
  return (
    <>
    <style>
      {`
      .iconhover{
        color: white;
      }
      .iconhover:hover {
        color: #FF3B19;
      }
      .button-hover:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
      `}
    </style>
      <div className="all-wrapper " data-aos-easing='ease' data-aos-duration='400' data-aos-delay='0'>
        <header id="header" className="fixed-top desktop-menu menu-top-w">
          <div className="container d-flex align-items-center justify-content-lg-between">
            <h1 className="me-auto me-lg-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, .7)' }}>
              <Link to="/de/home">                                            <img src="https://i.ibb.co/sH0YnSy/logo-sin-fondo-blanco-06.png" alt="logo" className="img-fluid" style={{ maxHeight: '45px' }}></img>
              </Link>
            </h1>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                  <Link id="home" to="/de/home">
                  Heim
                  </Link>
                </li>
                <li style={{ textShadow: '2px 2px 4px   rgba(0, 0, 0, 1)' }}>
                  <Link id="tour" to="/de/services">
                  Dienstleistungen
                  </Link>
                </li>
                <li style={{ textShadow: '2px 2px 4px  rgba(0, 0, 0, 1)' }}>
                  <Link id="aboutus" to="/de/contact">
                  Kontakt
                  </Link>
                </li>
              </ul>
              <i
                className="bi bi-list mobile-nav-toggle"
                id="mobile-nav-toggle"
              ></i>
            </nav>
            <div class="d-flex justify-content-lg-end align-items-center">
            <LanguageSelectorDE />
              <ul class="social-icon d-flex justify-content-lg-end">
                <li class="social-icon-item ">
                  <a href="https://www.facebook.com/profile.php?id=61554405899957" target='blank' class="social-icon-link ">
                    <FaFacebook size={20} style={{ marginRight: '10px' }} class=' button-hover iconhover' />
                  </a>
                </li>

                <li class="social-icon-item">
                  <a href="https://www.instagram.com/mexhubb/" target='blank' class="social-icon-link ">
                    <FaInstagram size={20} style={{ marginRight: '10px' }} class='button-hover iconhover' />
                  </a>
                </li>

                <li class="social-icon-item">
                  <a href="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank'>
                    <FaXTwitter size={20} style={{ marginRight: '10px'}} class='button-hover iconhover' />
                  </a>
                </li>

                <li class="social-icon-item">
                  <Link to="https://www.twitter.com/mexhubb/" class="social-icon-link" target='blank'>
                    <FaThreads size={20} style={{ marginRight: '10px' }} class='button-hover iconhover' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavbarDE;
