import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import "./App.css";
// import UpLoadForm from "./components/UploadForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
