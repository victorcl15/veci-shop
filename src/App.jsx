import * as React from "react";
import "./App.css";
import NavBarIndex from "./components/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginController } from "./components/login/controllers/LoginController";
import Portal from "./components/portal-web";
import InfoProductoIndex from "./components/info-producto";
import GestionProductoIndex from "./components/gestion-productos";
import { RegisterUserController } from "./components/register/controllers/RegisterUserController";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginController />} />
        <Route path="/register" element={<RegisterUserController />} />
        <Route path="/home" element={<Portal />} />
        <Route path="/producto" element={<InfoProductoIndex />} />
        <Route path="/gestion_producto" element={<GestionProductoIndex />} />
      </Routes>
    </>
  );
}

export default App;
