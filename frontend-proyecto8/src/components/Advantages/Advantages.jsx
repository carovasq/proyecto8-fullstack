import React from "react";
import "./Advantages.css";

const Advantages = () => {
  return (
    <section className="d-flex justify-content-around py-5 sectionBody">
      <div className="d-flex flex-column align-items-center">
        <i className="bi bi-shield-lock fs-1"></i>
        <h5 className="d-flex flex-column align-items-center">
          <span>
            <b>Pagos seguros</b>
          </span>
          <span>con tarjeta o transferencia</span>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center">
        <i className="bi bi-brush fs-1"></i>
        <h5 className="d-flex flex-column align-items-center">
          <span>
            <b>Artistas seleccionados</b>
          </span>
          <span>de todo el mundo</span>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center">
        <i className="bi bi-truck fs-1"></i>
        <h5 className="d-flex flex-column align-items-center">
          <span>
            <b>Entrega internacional</b>
          </span>
          <span>por transportistas especializados</span>
        </h5>
      </div>
    </section>
  );
};

export default Advantages;
