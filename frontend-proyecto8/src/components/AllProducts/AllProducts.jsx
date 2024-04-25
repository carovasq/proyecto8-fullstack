import React, { useEffect, useState } from "react";
import "./AllProducts.css";
// import { NavLink, useLocation } from "react-router-dom";

const AllProducts = () => {
  const [artPieces, setArtPieces] = useState([]);
  

  useEffect(() => {
    // Carga los datos del archivo db.json
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setArtPieces(data.artPieces))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterArtPiece = (value) => {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() === button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value === "allPiecesArt") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  };

  const handleSearch = () => {
    let searchInput = document
      .getElementById("search-input")
      .value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let authors = document.querySelectorAll(".author-name");

    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
      let productValue = element.innerText.toUpperCase().includes(searchInput);
      let authorValue = authors[index].innerText.toUpperCase().includes(searchInput);

      if (productValue || authorValue) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  };

  useEffect(() => {
    filterArtPiece("allPiecesArt");
  }, [artPieces]);

  return (
    <div className="bodyAllProducts">
      <div className="wrapper">
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="Search product name here..."
            onChange={handleSearch}
          />
          {/* <button id="search">Search</button> */}
        </div>
        <div id="buttons">
          <button
            className="button-value"
            onClick={() => filterArtPiece("allPiecesArt")}
          >
            Todas las obras
          </button>
          <button
            className="button-value"
            onClick={() => filterArtPiece("arteAbstracto")}
          >
            Arte abstracto
          </button>
          <button
            className="button-value"
            onClick={() => filterArtPiece("realismoContemporaneo")}
          >
            Realismo contemporáneo
          </button>

          <button
            className="button-value"
            onClick={() => filterArtPiece("expresionismo")}
          >
            Expresionismo
          </button>

          <button
            className="button-value"
            onClick={() => filterArtPiece("arteDigital")}
          >
            Arte digital
          </button>

          <button
            className="button-value"
            onClick={() => filterArtPiece("neoPop")}
          >
            Neo-pop
          </button>
        </div>
        <div id="products">
          {artPieces.map((piece, index) => (
            <div key={index} className={`card ${piece.category} hide`}>
              <div className="image-container">
                <img src={piece.imgPath} alt={piece.title} />
              </div>
              <div className="container">
                <h6 className="product-name">{piece.title.toUpperCase()}</h6>
                <h6 className="author-name">{piece.author ? piece.author.toUpperCase():"sin autor"}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
