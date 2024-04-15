import NavBarIndex from "../navbar";
import { GestionProductoController } from "./controllers/GestionProductoController";

export default function GestionProductoIndex() {
  return (
    <>
      <NavBarIndex></NavBarIndex>
      <GestionProductoController></GestionProductoController>
    </>
  );
}
