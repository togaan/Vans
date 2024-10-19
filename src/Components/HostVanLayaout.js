import React from "react";
import HostVanDetail from "../Pages/HostPages/hostVansDetail/HostVanDetail";
import { Outlet } from "react-router-dom";

const HostVanLayaout = () => {
    return (
        <>
            <HostVanDetail />
            <Outlet/>
        </>
    )
}

export default HostVanLayaout