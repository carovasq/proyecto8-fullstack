import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

function NavBar() {
  const handleUploadProductClick = () => {
    Swal.fire({
      title: "¡Aún no has iniciado sesión!",
      text: "Por favor, inicia sesión.",
      showConfirmButton: true,
      confirmButtonColor: "#FF635E",
      confirmButtonText: "OK",
    });
  };

  const location = useLocation();

  return (
    <>
      <Navbar className="navbar-style">
        <NavLink to="/login" className="navbar-top">
          <p>Soy artista y quiero exponer en CG</p>
        </NavLink>
        <div className="navbar-bot">
          <NavLink to="/" className="navbar-left">
            <button className="iconos">
              <img src="src\assets\icon-house.svg" alt="" />
            </button>
          </NavLink>

          <NavLink to="/" className="justify-content-center">
            <img
              src="src\assets\cg-logo.png"
              className="cg-logo"
              alt="Logo de Júzcar"
            />
          </NavLink>
          <div className="d-flex navbar-right">
            <NavLink
              to="/login"
              className=" iconos"
              onClick={handleUploadProductClick}
            >
              <img src="src\assets\icon-user.png" alt="" />
            </NavLink>
            <NavLink to="/profile" className=" iconos">
              <img src="src\assets\icon-heart.svg" alt="" />
            </NavLink>
            <NavLink to="/" className=" iconos">
              <img src="src\assets\icon-carrito.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
