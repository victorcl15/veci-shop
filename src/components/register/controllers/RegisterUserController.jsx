import { useNavigate } from "react-router-dom";
import RegisterUser from "../modules/RegisterUser";
import { useState } from "react";
import { createUsuario } from "../services/registroService";
import { useLogin } from "../../../context";

export function RegisterUserController() {
  const Navigate = useNavigate();
  const { usuario, login, logout } = useLogin();
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    contrasena: "",
    direccion: "",
    esVendedor: false,
  });

  const requestCreateUsuario = async (usuario) => {
    try {
      const result = await createUsuario(usuario);
      const resultJSON = JSON.stringify(result, null, 2);
      console.log(`Usuario creado `, resultJSON);
      login(resultJSON);
      handleIrHome();
    } catch (e) {
      console.error("Error al obtener datos:", e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await requestCreateUsuario(formData);
  };

  const handleInputChangeSwitch = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleIrHome = () => {
    Navigate("/home");
  };

  return (
    <>
      <RegisterUser
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        handleInputChangeSwitch={handleInputChangeSwitch}
      ></RegisterUser>
    </>
  );
}
