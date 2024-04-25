import React, { useState } from "react";
import "./LoginView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ProfileView from "../UserProfile/ProfileView";


const LoginView = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    fetch("http://localhost:5000/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.token) {
          // localStorage.setItem('token', result.token)
          setLoginSuccessful(true);
        } else {
          setLoginSuccessful(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  return (
    <>
      {loginSuccessful ? <ProfileView /> : <div className="d-flex justify-content-center mb-5">
        <Container className="w-50 px-5 pb-5 m-5 containerStyle d-flex flex-column align-items-center">
          <img
            className="modal-photo"
            src="src\assets\cg-logo.png"
            alt=""
            width="340px"
            height="auto"
          />
          <h2>Iniciar Sesión</h2>
          <form className="d-flex flex-column formLogin">
            <label className="h4 mt-5 mb-3">Nombre de usuario:</label>
            <input onChange={(e) => { setUsername(e.target.value); }}
              type="text"
              id="username"
              required />
            <label className="h4 mt-4 mb-3">Contraseña:</label>
            <input onChange={(e) => { setPassword(e.target.value); }}
              type="password"
              id="password"
              required />
            <button type="submit" className="button-submit h3 mt-5 mb-4" onClick={handleLogin}>
              Iniciar Sesión
            </button>
          </form>
          <div className="d-flex ">
            <h5>¿No tienes cuenta?&nbsp;</h5>
            <NavLink to="/register" className="button-register h5">
              Regístrate aquí
            </NavLink>
          </div>
        </Container>
      </div>}
    </>
  );
};
export default LoginView;
