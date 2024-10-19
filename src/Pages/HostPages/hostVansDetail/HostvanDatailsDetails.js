import React from "react";
import { useOutletContext } from "react-router-dom"


const HostVanDetailsDetails = () => {

    const {currentHostVan} = useOutletContext()
    return (
        <div className=""> 
            <div className="container ">
                <div className=" pt-5 ps-1 pe-4 pb-5 ">
                    <div className="d-flex align-currentHostVans-center gap-1 mb-3">
                        <h4 className="fw-bold fs-5">Name:</h4>
                        <h4 className="fs-5">{currentHostVan.name}</h4>
                    </div>
                    <div className="d-flex align-currentHostVans-center gap-1 mb-3">
                        <h4 className="fw-bold fs-5">Category:</h4>
                        <h4 className="fs-5">{currentHostVan.type}</h4>
                    </div>
                    <div className="mb-2 ">
                        <h4 className="fw-bold fs-5">Description:</h4>
                        <h4 className="fs-5">{currentHostVan.description}</h4>
                    </div >
                    <div className="d-flex align-currentHostVans-center gap-1 mt-4">
                        <h4 className="fw-bold fs-5">Visibility:</h4>
                        <h4 className="fs-5">{currentHostVan.visibility}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostVanDetailsDetails