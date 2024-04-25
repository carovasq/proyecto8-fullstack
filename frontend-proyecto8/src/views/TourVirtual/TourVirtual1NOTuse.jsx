import React, { useEffect, useState } from "react";
import "./TourVirtual.css";

const TourVirtual = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    // Carga los datos del archivo db.json
    fetch("../../../db.json")
      .then((response) => response.json())
      .then((data) => setArtPieces(data.artPieces))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="bodyTour">
        <div className="containerTour">
          <div className="scroller">
            {/* Agrega el contenido de las salas aquí */}
            {artPieces.map((piece, index) => (
              <div key={index} className="room room--current">
                <div className="room__side room__side--back">
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                </div>
                <div className="room__side room__side--left">
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                </div>
                <div className="room__side room__side--right">
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                  <img
                    className="room__img"
                    src={piece.imgPath}
                    alt={piece.title}
                  />
                </div>
                <div className="room__side room__side--bottom"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default TourVirtual;
