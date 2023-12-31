import React from "react";
import { Col } from "react-bootstrap";
function Alianzas() {

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
  background-color: #2f2f2f;
  background-repeat: no-repeat;
  margin-bottom: 70px;
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

                `}
            </style>
            <div data-aos="fade-right">
                <div class="site-footer-top-top">
                    <div class="container">
                        <div class="row" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', fontSize: '18px'}}>
                            <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Alianza01</Col>
                            <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Trivago</Col>
                            <Col style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>Webless</Col>
                        </div>
                    </div>
                </div>
                <div class="Background-footer"></div>
            </div>
        </>
    );
}
export default Alianzas;