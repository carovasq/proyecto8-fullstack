import React, { useState } from "react";
import "./List.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import ProfileView from "../UserProfile/ProfileView";


const ListView = () =>
{
  return (
    <>
      <div className="table-container">
        <h1>Lista de Productos</h1>
        <table className="product-table">
          <thead>
            <th>IDProduct</th>
            <th>IDUser</th>
            <th>IDProductCategory</th>
            <th>NameProduct</th>
            <th>DescriptionProduct</th>
            <th>PriceProduct</th>
            <th>DimensionsProduct</th>
            <th>StateProduct</th>
            <th>ImagenProduct</th>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ListView;
