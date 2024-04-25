import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SidebarModal.css";

function SidebarModal() {
  return (
    <div className="sidebar d-flex flex-column justify-content-between bg-dark text-white p-4">
      <div>
        <span className="fs-4 me-3 text-white">Hola, user</span>
        <hr className="text-secundary mt-2" />
        <ul className="nav nav-pills flex-column px-0">
          <li className="nav-item py-1">
            <NavLink to="/profile" className="nav-link text-white px-2">
              <i className="bi bi-person me-3 fs-5"></i>
              <span className="fs-5">Cuenta</span>
            </NavLink>
          </li>
          <li className="nav-item py-1">
            <a href="" className="nav-link text-white px-2">
              <i className="bi bi-person-plus me-3 fs-5"></i>
              <span className="fs-5">Artistas</span>
            </a>
          </li>
          <li className="nav-item py-1">
            <a href="" className="nav-link text-white px-2">
              <i className="bi bi-people me-3 fs-5"></i>
              <span className="fs-5">Clientes</span>
            </a>
          </li>
          <li className="nav-item py-1">
            <a href="" className="nav-link text-white px-2">
              <i className="bi bi-tag me-3 fs-5"></i>
              <span className="fs-5">Obras</span>
            </a>
          </li>
          <li className="nav-item py-1">
            <NavLink to="/" className="nav-link text-white px-2">
              <i className="bi bi-cash-coin me-3 fs-5"></i>
              <span className="fs-5">Orders</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-secundary" />
        <NavLink
          to="/"
          className="nav-link text-white px-2 closeSesion py-2 rounded"
        >
          <i className="bi bi-box-arrow-left me-3 fs-5"></i>
          <span className="fs-5">Cerrar sesión</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SidebarModal;
