import React from "react";
import { PortalWebController } from "./controllers/PortalWebController";
import NavBarIndex from "../navbar";

export default function Portal() {
    return (
        <>
            <NavBarIndex></NavBarIndex>
            <PortalWebController></PortalWebController>
        </>
    )
}