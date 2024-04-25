import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./UpdateProduct.css";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const { values, setValues } = useState({
    id: id,
    title: "",
    category: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/artPieces/"+id)
      .then(res => {
        setValues({...values, title: res.data.name, email: res.data.email})
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3000/artPieces/" + id, values)
      .then(res => {
        navigate('/profile');
      })
      .cath(err => console.log(err))
  }

  return (
    <div className="containerStyle containerAddProductStyle p-4 d-flex flex-column align-items-center">
      <h2>
        <b>Edita los datos del Cuadro</b>
      </h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column formLogin">
        <h3 className="mt-4">
          <b>Información de la Pieza de arte</b>
        </h3>
        <div>
          <label htmlFor="titleArt" className="h4 mt-3 mb-3">
            Titulo:
          </label>
          <input
            type="text"
            id="titleArt"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="descriptionArt" className="h4 mt-3 mb-3">
            Descripción:
          </label>
          <input
            type="text"
            id="descriptionArt"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dimentionsArt" className="h4 mt-3 mb-3">
            Dimensiones
          </label>
          <input
            type="text"
            id="dimentionsArt"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="categoryArt" className="h4 mt-4 mb-3">
            Categoría:
          </label>
          <input
            type="text"
            id="categoryArt"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="priceArt" className="h4 mt-4 mb-3">
            Precio:
          </label>
          <input
            type="number"
            id="priceArt"
            required
            value={values.name}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="imageArt" className="h4 mt-4 mb-3">
            Foto:
          </label>
          <input type="file" id="imageArt" required />
        </div>
        <button type="submit" className="button-submit h3 mt-5">
          Subir producto
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
