import React from "react";
//import { axiosConfig } from "../../../axiosConfig";
const apiUrl = import.meta.env.VITE_APP_API_URL;
const getProductos = async () => {
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`productos`,
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

  const getSubCategorias = async () => {
    console.log(apiUrl);
    try {
      const response = await fetch(
        apiUrl+`sub_categorias`,
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

  const getProductosPorCategoria = async (id) => {
    try {
      const response = await fetch(
        apiUrl+`productos/productos_por_categoria/${id}`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      const result = await response.json();
      //console.log(result);
      return result;
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };

  const getProductosPorSubCategoria = async (id) => {
    try {
      const response = await fetch(
        apiUrl+`productos/productos_por_subcategoria/${id}`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      const result = await response.json();
      //console.log(result);
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
    getProductos,
    getProductosPorCategoria,
    getProductosPorSubCategoria,
    getSubCategorias
  }