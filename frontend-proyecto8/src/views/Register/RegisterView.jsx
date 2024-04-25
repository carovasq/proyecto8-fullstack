import React, { useState } from "react";
import "./RegisterView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RegisterView = () => {
  const [username, setUsername] = useState("");
  const [passworduser, setPassworduser] = useState("");
  const [nameperson, setNameperson] = useState("");
  const [addressperson, setAddressperson] = useState("");
  const [emailperson, setEmailperson] = useState("");
  const [telephoneperson, setTelephoneperson] = useState("");
  const [dniperson, setDniperson] = useState("");
  const [registerSuccessful, setRegisterSuccessful] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = {
      NameUser: username,
      PasswordUser: passworduser,
      NamePerson: nameperson,
      AddressPerson: addressperson,
      EmailPerson: emailperson,
      TelephonePerson: telephoneperson,
      DNIPerson: dniperson
    };

    await fetch("http://localhost:5000/auth/usuario").then(function (res) {
      console.log(res);
    });

    try {
      await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message)
      })
    } catch (error) {
      console.error('Error', error);
    }



  };

  return (
    <>
      {registerSuccessful ? (
        <ProfileView />
      ) : (
        <div className="d-flex justify-content-center mb-5">
          <Container className="w-50 px-5 pb-5 m-5 containerStyle d-flex flex-column align-items-center">
            <h2 className="mt-5">Regístrate</h2>
            <form className="d-flex flex-column formLogin">
              <label className="h4 mt-5 mb-3">Nombre de usuario:</label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                id="username"
                required
              />

              <label className="h4 mt-4 mb-3">Contraseña:</label>
              <input
                onChange={(e) => {
                  setPassworduser(e.target.value);
                }}
                type="password"
                id="passworduser"
                required
              />
              <hr />
              <label className="h4 mt-5 mb-3">Nombre y apellidos:</label>
              <input
                onChange={(e) => {
                  setNameperson(e.target.value);
                }}
                type="text"
                id="name"
              />
              <label className="h4 mt-4 mb-3">Dirección:</label>
              <input
                onChange={(e) => {
                  setAddressperson(e.target.value);
                }}
                type="text"
                id="address"
              />
              <label className="h4 mt-4 mb-3">Correo electrónico:</label>
              <input
                onChange={(e) => {
                  setEmailperson(e.target.value);
                }}
                type="email"
                id="email"
                required
              />
              <label className="h4 mt-4 mb-3">Teléfono:</label>
              <input
                onChange={(e) => {
                  setTelephoneperson(e.target.value);
                }}
                type="tel"
                id="telephoneperson"
              />
              <label className="h4 mt-4 mb-3">DNI:</label>
              <input
                onChange={(e) => {
                  setDniperson(e.target.value);
                }}
                type="text"
                id="dniperson"
              />
              <button
                onClick={handleRegister}
                type="submit"
                className="button-submit h3 mt-5 mb-4"
              >
                Regístrate
              </button>
            </form>
            <div className="d-flex ">
              <h5>¿Ya tienes cuenta?&nbsp;</h5>
              <NavLink to="/login" className="button-register h5">
                Inicia sesión
              </NavLink>
            </div>
          </Container>
        </div>
      )}
    </>
  );
};
export default RegisterView;
