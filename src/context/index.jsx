import React, { useEffect } from "react";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useState,
} from "react";

//--------->

const ProductoContext = createContext();

export const useProducto = () => {
  return useContext(ProductoContext);
};

export const ProductoProvider = ({ children }) => {
  const initialProducto = useMemo(() => {
    const storedProducto = localStorage.getItem("producto");
    return storedProducto ? JSON.parse(storedProducto) : "";
  }, []);
  console.log(initialProducto);
  //const [token, setToken] = useState(initialToken);
  const [producto, setProducto] = useState(initialProducto);

  useEffect(() => {
    const storedProducto = localStorage.getItem("producto");
    if (storedProducto) {
      setProducto(JSON.parse(storedProducto));
      console.log(JSON.parse(storedProducto));
    }
  }, []); // Se ejecutará solo una vez al montar el component

  const productoElegido = (newProducto) => {
    setProducto(newProducto);
    localStorage.setItem("producto", JSON.stringify(newProducto));
  };

  const limpiarProducto = () => {
    setProducto("");
    localStorage.removeItem("producto");
  };

  return (
    <ProductoContext.Provider
      value={{ producto, productoElegido, limpiarProducto }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

//-----

//--------->
const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const initialLogin = useMemo(() => {
    const storedUsuario = localStorage.getItem("usuario");
    return storedUsuario ? JSON.parse(storedUsuario) : "";
  }, []);
  //const [token, setToken] = useState(initialToken);
  const [usuario, setUsuario] = useState(initialLogin);

  useEffect(() => {
    const storedUsuario = localStorage.getItem("usuario");
    if (storedUsuario) {
      setUsuario(JSON.parse(storedUsuario));
      console.log(JSON.parse(storedUsuario));
    }
  }, []); // Se ejecutará solo una vez al montar el componente

  const login = (newUsuario) => {
    console.log(newUsuario);
    setUsuario(newUsuario);
    localStorage.setItem("usuario", JSON.stringify(newUsuario));
  };

  const logout = () => {
    setUsuario("");
    localStorage.removeItem("usuario");
  };

  return (
    <LoginContext.Provider value={{ usuario, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

//-----
