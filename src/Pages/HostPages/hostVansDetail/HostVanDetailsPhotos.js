import React from "react";
import { useOutletContext } from "react-router-dom"


const HostVanDetailsPhotos = () => {

    const {currentHostVan} = useOutletContext()

    return (
        <div className="">
            <div className="container ">
                <div className="pt-5 ps-1 pe-4 pb-5"> 
                    <img src={currentHostVan.imageUrl}  alt="van" className="img-fluid rounded-3 w-25 h-25"/> 
                </div>
                
        </div>
        
    </div>
    )
}

export default HostVanDetailsPhotos