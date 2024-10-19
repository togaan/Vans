import React from "react";
import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";
const HostLayout = () => {
    return (
        <>
            <HostNav/>
            <Outlet/>
        </>
    )
}

export default HostLayout