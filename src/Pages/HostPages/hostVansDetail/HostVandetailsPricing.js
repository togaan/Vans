import React from "react";
import { useOutletContext } from "react-router-dom"


const HostVanDetailsPricing = () => {

    const {currentHostVan} = useOutletContext()

    return (
        <div className="">
            <div className="container">
                <div className="pt-5 ps-1 pe-4 pb-5"> 
                    <h3 className="pt-1">${currentHostVan.price}<span className="fw-normal">/day</span></h3>
                </div>
            </div>
            
        </div>
    )
}

export default HostVanDetailsPricing