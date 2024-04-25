import React, { useEffect, useState } from "react";
import "./WallArt.css";

const WallArt = () => {
  const [imgPaths, setImgPaths] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("../../../db.json");
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        const data = await response.json();
        const primerosImgPaths = data.artPieces
          .slice(0, 8)
          .map((piece) => piece.imgPath);
        setImgPaths(primerosImgPaths);
      } catch (error) {
        console.error("Error:", error);
      }};
    cargarDatos();
  }, []);

  return (
    <>
      <div className="bodyTour">
        <div className="containerTour">
          <div className="scroller">
            {/* Agrega el contenido de las salas aquí */}
            <div className="room room--current">
              <div className="room__side room__side--back">
                <img className="room__img" src={imgPaths[0]} />
                <img className="room__img" src={imgPaths[1]} />
              </div>
              <div className="room__side room__side--left">
                <img className="room__img" src={imgPaths[2]} />
                <img className="room__img" src={imgPaths[3]} />
                <img className="room__img" src={imgPaths[4]} />
              </div>
              <div className="room__side room__side--right">
                <img className="room__img" src={imgPaths[5]} />
                <img className="room__img" src={imgPaths[6]} />
                <img className="room__img" src={imgPaths[7]} />
              </div>
              <div className="room__side room__side--bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WallArt;
