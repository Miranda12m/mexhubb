import React from "react";
import { Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoReorderThree, IoDocumentText } from "react-icons/io5";
import { FaHouseChimney } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function Navbars() {
  return (
    <>
      <style>
        {`
                  .button-hover:hover {
                      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                      transform: scale(1.02);
                      transition: all 0.2s ease-in-out;
                  }
                  /* Estilos para la sección superior del pie de página del sitio */
.site-footer-top-top {
  background-color: #151414;
  background-repeat: no-repeat;
  margin-bottom: 50px;
  padding-top: 30px;
  padding-bottom: 30px;
}

/*---------------------------------------
  SOCIAL ICON               
-----------------------------------------*/
/* Estilos para los iconos sociales */
.social-icon {
  margin: 0;
  padding: 0;
}

/* Estilos para cada elemento de icono social */
.social-icon-item {
  list-style: none;
  display: inline-block;
  vertical-align: top;
}

/* Estilos para el enlace del icono social */
.social-icon-link {
  background: var(--secondary-color);
  border-radius: var(--border-radius-large);
  color: var(--white-color);
  font-size: var(--copyright-font-size);
  display: block;
  margin-right: 10px;
  text-align: center;
  width: 35px;
  height: 35px;
  line-height: 36px;
  transition: background 0.2s, color 0.2s;
}

/* Estilos al pasar el mouse por encima del enlace del icono social */
.social-icon-link:hover {
  background: var(--primary-color);
  color: var(--white-color);
}

/* Estilos para el texto dentro del enlace del icono social */
.social-icon-link span {
  display: block;
}

/* Estilos para la animación de giro del icono social al pasar el mouse por encima */
.social-icon-link span:hover::before {
  animation: spinAround 2s linear infinite;
}

/* Animación para girar el icono social */
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
.linksns{
    color:white;
}
.linksns:hover{
    color: orange;
}

@media (max-width: 767px) {
  .row {
    flex-wrap: wrap;
  }

  .col {
    flex-basis: 30%;
    margin-bottom: 20px;
    font-size: 16.5px;

  }
  .site-footer-top-top {
    padding-bottom: 10px;
  }
  .margenextra{
    padding-bottom:5px;
  }
}



                `}
      </style>
      <div >
        <div class="site-footer-top-top">
          <div class="container">
          <div className="row" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: '20px', textAlign: 'center' }} data-aos="fade-right" >
          <Col className='margenextra' style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/services' className="linksns" ><IoReorderThree /> All </Link>
          </Col>
          <Col className='margenextra' style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/housing' className="linksns" ><FaHouseChimney /> Housing</Link>
          </Col>
          <Col className='margenextra' style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/tours' className="linksns"><FaMapMarkedAlt /> Tours</Link>
          </Col>
          <Col  style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/events' className="linksns"><MdEvent /> Events</Link>
          </Col>
          <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/legal' className="linksns"><IoDocumentText /> Legal</Link>
          </Col>
          <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', borderLeft:'1px solid black', borderRight:'1px solid black' }}>
            <Link to='/specialized' className="linksns"><RiContactsFill /> Specialized</Link>
          </Col>
        </div>
          </div>
        </div>
        <div class="Background-footer"></div>
      </div>
    </>
  );
}
export default Navbars;