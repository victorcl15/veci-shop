import { useState, useEffect } from "react";
import Login from "../modules/Login.jsx";
import { getLogin } from "../services/loginService";
import { useLogin } from "../../../context";
import { useNavigate } from "react-router-dom";

export function LoginController() {
  const Navigate = useNavigate();
  const handleIrHome = () => {
    
    Navigate("/home");
  }
  return <>
    <Login
    handleIrHome={handleIrHome}
    ></Login>
  </>;
}