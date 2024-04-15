const apiUrl = import.meta.env.VITE_APP_API_URL;
const getProductosPorUsuario = async (id) => {
    try {
      const response = await fetch(
        apiUrl+`productos/productos_por_usuario/${id}`,
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

  const getCategorias = async () => {
    try {
      const response = await fetch(
        apiUrl+`categorias/`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      const result = await response.json();
     // console.log(result);
      return result;
      // const { users } = await response.json();
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
      const message = "Error del servidor al realizar la solicitud";
      const status = false;
      return { status, message };
    }
  };

  const actualizarProducto = async (id, editarProducto) => {
    try {
      const response = await fetch(
        apiUrl+`productos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editarProducto),
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
  const crearProducto = async (newProducto) => {
    try {
      const response = await fetch(
        apiUrl+`productos/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProducto),
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

  const eliminarProducto = async (id) => {
    try {
      const response = await fetch(
        apiUrl+`productos/${id}`,
        {
          method: "DELETE",
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

  export {
    getProductosPorUsuario,
    getCategorias,
    actualizarProducto,
    crearProducto,
    eliminarProducto
  }