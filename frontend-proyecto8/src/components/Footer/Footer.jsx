import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <h6 className="footer-text ">
          © 2024, CG - Todos los derechos reservados
        </h6>
        <div className="footer-rrss">
          <div className="iconStyle">
            <a
              href="https://www.facebook.com/tucuenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src\assets\rrss-facebook.png"
                alt="icono-rrss-facebook"
              />
            </a>
          </div>

          <div className="iconStyle">
            <a
              href="https://twitter.com/tucuenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src\assets\rrss-twitter.png" alt="icono-rrss-twitter" />
            </a>
          </div>

          <div className="iconStyle">
            <a
              href="https://www.instagram.com/tucuenta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="src\assets\rrss-instagram.png"
                alt="icono-rrss-instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div>
          <img
            src="src\assets\pago-visa.svg"
            alt="icono-pago-visa"
            className="icon-rrss"
          />
        </div>
        <div>
          <img
            src="src\assets\pago-tarjeta.svg"
            alt="icono-pago-tarjeta"
            className="icon-rrss"
          />
        </div>
        <div>
          <img
            src="src\assets\pago-paypal.svg"
            alt="icono-pago-paypal"
            className="icon-rrss"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
