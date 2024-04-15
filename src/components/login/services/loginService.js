import React from "react";
//import { axiosConfig } from "../../../axiosConfig";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const getLogin = async (usuario) => {
    console.log(usuario);
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`usuarios/login`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario)
          }
      );
      const result = await response.json();
      console.log(result);
      
      if(result.success !== false){
        return result;
      }else{
        return result;
      }
      
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const success = false;
      return { success, message };
    }
  };

  export {
    getLogin
  }