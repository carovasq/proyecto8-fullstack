import React, { useState } from "react";
import "./List.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import ProfileView from "../UserProfile/ProfileView";


const CreateView = () => {
  const [idUser, setIDUser] = useState("");
  const [idProductCategory, setIDProductCategory] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [dimensionsProduct, setDimensionsProduct] = useState("");
  const [stateProduct, setStateProduct] = useState("");
  const [imagenProduct, setImagenProduct] = useState("");
  const [createSuccessful, setRegisterSuccessful] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    const formData = {
      IDUser: idUser,
      IDProductCategory: idProductCategory,
      NameProduct: nameProduct,
      DescriptionProduct: descriptionProduct,
      PriceProduct: priceProduct,
      DimensionsProduct: dimensionsProduct,
      StateProduct: stateProduct,
      ImagenProduct: imagenProduct,
    };

    // await fetch("http://localhost:5000/products/productos").then(function (
    //   res
    // ) {
    //   console.log(res);
    // });

    try {
      await fetch("http://localhost:5000/products/crear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result.message);
        });
    } catch (error) {
      console.error("Error", error);
    }
  };
  
  return (
    <>
      {createSuccessful ? (
        <ProfileView />
      ) : (
        <div className="d-flex justify-content-center mb-5">
          <Container className="w-50 px-5 pb-5 m-5 containerStyle d-flex flex-column align-items-center">
            <h2 className="mt-5">Crear producto</h2>
            <form className="d-flex flex-column formLogin">
              <label className="h4 mt-5 mb-3">IDProductCategory:</label>
              <input
                onChange={(e) => {
                  setIDProductCategory(e.target.value);
                }}
                type="text"
                id="name"
              />
              <label className="h4 mt-4 mb-3">NameProduct:</label>
              <input
                onChange={(e) => {
                  setNameProduct(e.target.value);
                }}
                type="text"
                id="address"
              />
              <label className="h4 mt-4 mb-3">DescriptionProduct:</label>
              <input
                onChange={(e) => {
                  setDescriptionProduct(e.target.value);
                }}
                type="text"
                id="email"
                required
              />
              <label className="h4 mt-4 mb-3">PriceProduct:</label>
              <input
                onChange={(e) => {
                  setPriceProduct(e.target.value);
                }}
                type="number"
                id="telephoneperson"
              />
              <label className="h4 mt-4 mb-3">DimensionsProduct:</label>
              <input
                onChange={(e) => {
                  setDimensionsProduct(e.target.value);
                }}
                type="text"
                id="dniperson"
              />
              <label className="h4 mt-4 mb-3">StateProduct:</label>
              <input
                onChange={(e) => {
                  setStateProduct(e.target.value);
                }}
                type="text"
                id="dniperson"
              />
              <label className="h4 mt-4 mb-3">ImagenProduct:</label>
              <input
                onChange={(e) => {
                  setImagenProduct(e.target.value);
                }}
                type="text"
                id="dniperson"
              />
              <button
                onClick={handleCreate}
                type="submit"
                className="button-submit h3 mt-5 mb-4"
              >
                Crear producto
              </button>
            </form>
          </Container>
        </div>
      )}
    </>
  );
};
export default CreateView;
