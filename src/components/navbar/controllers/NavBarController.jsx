import { useState } from "react";
import { NavBar } from "../modules/NavBar";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../context";

export function NavBarController() {
  const Navigate = useNavigate();
  const { usuario, login, logout } = useLogin(); 
  const pages = ["Inicio", "Vendedor"];
  const settings = ["Cuenta", "Cerrar Sesión"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    const {dataset} = e.currentTarget;
    console.log(dataset.name)
    if(dataset.name === "Vendedor"){
      if(usuario.esVendedor !== false){
        Navigate("/gestion_producto");
      } else {
      handleClick();
    }
  }
    if(dataset.name === "Inicio"){
      Navigate("/home");
    }
    
  };

  const handleCloseUserMenu = (e) => {
    const {dataset} = e.currentTarget;
    if(dataset.namesetting === "Cerrar Sesión"){
      logout();
      Navigate("/login");
    }
    setAnchorElUser(null);
  };
  const handleIrGestionProducto = (e) => {
    e.preventDefault();
    const {dataset} = e.currentTarget;
    console.log(dataset.name)
  }
  return (
    <>
      <NavBar
        pages={pages}
        settings={settings}
        anchorElNav={anchorElNav}
        anchorElUser={anchorElUser}
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        handleIrGestionProducto={handleIrGestionProducto}
        open={open}
        handleClose={handleClose}
      ></NavBar>
    </>
  );
}
