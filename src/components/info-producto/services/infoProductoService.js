import React from "react";
//import { axiosConfig } from "../../../axiosConfig";
const apiUrl = import.meta.env.VITE_APP_API_URL;
const getProductoPorId = async (id) => {
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`productos/${id}`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      const result = await response.json();
      console.log(result);
      return result;
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };


  const UpdateDireccion = async (id, direccion) => {
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`productos/${id}`,
        {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(direccion),
          }

      );
      const result = await response.json();
      console.log(result);
      return result;
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };


  const crearVenta = async (nuevaVenta) => {
    try {
      const response = await fetch(
        apiUrl+`ventas/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaVenta),
        }
      );
      const result = await response.json();
      return result;
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };

  const UpdateStock = async (id, stock) => {
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`productos/${id}`,
        {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(stock),
          }

      );
      const result = await response.json();
      console.log(result);
      return result;
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };

  export {
    getProductoPorId,
    UpdateDireccion,
    crearVenta,
    UpdateStock
  }