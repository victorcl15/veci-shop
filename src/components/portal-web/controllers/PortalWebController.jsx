import { useEffect, useState } from "react";
import { PortalWeb } from "../modules/PortalWeb";
import { getProductos } from "../services/portalWebService";
import { useLogin, useProducto } from "../../../context";
import { useNavigate } from "react-router-dom";

export function PortalWebController() {
    const Navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const { producto, productoElegido, limpiarProducto } = useProducto();
  const { usuario, login, logout } = useLogin(); 
  const requestProductos = async () => {

     const arrayProductos = await getProductos();
     console.log(arrayProductos);
    // setProductos(arrayProductos);

    if(arrayProductos.status !== false) {
      if(Array.isArray(arrayProductos)) {

        console.log(arrayProductos);
        //console.log(arrayProductos);
        setProductos(arrayProductos);
      } else {
        setProductos([]);
      }
  } else {
    setProductos([]);
  }
  };

  const irInfoProducto = (e) => {
    e.preventDefault();
    const { dataset } = e.currentTarget;
    const data = {
        id: dataset.productoid,
        nombre: dataset.nombre,
        descripcion: dataset.descripcion,
        precio: dataset.precio,
        stock: dataset.stock,
        img: dataset.img,
        usuario: dataset.usuario,
        categoria: dataset.categoria,
      };
productoElegido(data);

if(producto && producto!==""){
    Navigate("/producto");
}
console.log(data);
  }
  useEffect(() => {
    requestProductos();
    console.log(usuario);
  }, []);
  return (
    <>
      <PortalWeb productos={productos} irInfoProducto={irInfoProducto}></PortalWeb>
    </>
  );
}
