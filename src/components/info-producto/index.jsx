import NavBarIndex from "../navbar";
import { InfoProductoController } from "./controllers/InfoProductoController";

export default function InfoProductoIndex() {
  return (
    <>
      <NavBarIndex></NavBarIndex>
      <InfoProductoController></InfoProductoController>
    </>
  );
}
