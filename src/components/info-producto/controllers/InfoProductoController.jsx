import { useEffect, useState } from "react";
import { InfoProducto } from "../modules/InfoProducto";
import { useProducto } from "../../../context";
import { crearVenta, getProductoPorId, UpdateDireccion, UpdateStock } from "../services/infoProductoService";
import { ModalConfirmarCompra } from "../modules/ModalConfirmarCompra";
import { useRouteError } from "react-router-dom";

export function InfoProductoController() {
    const [expanded, setExpanded] = useState(false);
    const [direccion, setDireccion] = useState({});
    const [cantidad, setCantidad] = useState(1);
    const [infoProducto, setInfoProducto] = useState();
    const [openconfirmacion, setOpenConfirmacion] = useState(false);
    const { producto, productoElegido, limpiarProducto} = useProducto();
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(() => {
      if(producto.id !== "" && producto.id){
        requestProducto()
      }
      
    
    }, [])

    const requestProducto = async () => {
      const result = await getProductoPorId(producto.id);
      setInfoProducto(result);
    } 


    const handleOpenConfirmacion = (event) => {
      event.preventDefault();
      setOpenConfirmacion(true);
      const { dataset } = event.currentTarget;
      const data = {
        direccion: dataset.direccion,
      };
      setDireccion(data);
    };


    const handleCloseConfirmacion = () => setOpenConfirmacion(false);


    const handleChangeDireccion = (e) => {
        setDireccion({direccion: e.target.value})
    }

    const handleSubmitConfirmacion = (e) => {
      e.preventDefault();

      const { dataset } = e.currentTarget;

      const precioFinal = cantidad * infoProducto.precio
      const stockFinal = infoProducto.stock - cantidad

      const data = {
        usuario: infoProducto.usuario._id,
        producto: infoProducto._id,
        cantidad: cantidad,
        precioTotal: precioFinal
      };
      const dataStock = {
        stock: stockFinal
      }
      requestNuevaVenta(data)
      requestStockActualizada(infoProducto._id, dataStock)
      console.log(data)

    }


    const requestNuevaVenta = async (nuevaVenta) => {
      const result = await crearVenta(nuevaVenta);
      handleCloseConfirmacion()
    } 

    const requestDireccionActualizada = async (id, direccion) => {
      const result = await UpdateDireccion(id, direccion);
    }
    
    const requestStockActualizada = async (id, stock) => {
      const result = await UpdateStock(id, stock);
      //console.log(result);
      setInfoProducto(result);
    } 

    const handleIncrement = () => {
      if (cantidad < infoProducto.stock) {
        setCantidad(cantidad + 1);
      }  
    };
  
    const handleDecrement = () => {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    };

    const handleSubirDireccion =  (e) => {
      e.preventDefault();
      const { dataset } = e.currentTarget;
      requestDireccionActualizada(dataset.id,dataset.direccion)
    }

  return <>
  <InfoProducto
  expanded={expanded}
  handleExpandClick={handleExpandClick}
  producto={producto}
  infoProducto={infoProducto}
  handleIncrement = {handleIncrement}
  handleDecrement = {handleDecrement}
  cantidad = {cantidad}
  handleOpenConfirmacion = {handleOpenConfirmacion}
  ></InfoProducto>

    <ModalConfirmarCompra
      open = {openconfirmacion}
      handleCloseConfirmacion = {handleCloseConfirmacion}
      direccion = {direccion}
      handleChangeDireccion = {handleChangeDireccion}
      handleSubmit = {handleSubmitConfirmacion}
      handleSubirDireccion = {handleSubirDireccion}
    >

    </ModalConfirmarCompra>


  </>;
}
