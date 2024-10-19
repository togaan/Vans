import React from "react";
import { NavLink, useParams, Outlet, useLoaderData, Link, defer, Await } from 'react-router-dom';
import { getVans } from "../../../api";
import { requireAuth } from "../../../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export async function loader({request}) {
    await requireAuth(request)
    return defer({hostVanDetail: getVans()})
  }

const HostVanDetail = () => {
    const newDAta = useLoaderData()
    const { id } = useParams();
   
    
   

    // if we have nested Route and we want to go back one step, we use ".." in go back link and we sepsify that link to have relative="path"
    return (
        <div className="host">
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={newDAta.hostVanDetail}>
                    {hostVanDetail => {
                        const currentHostVan = hostVanDetail.find(item => item.hostId === id); 
                        return (   
                            <div className="container ">
                                {currentHostVan ? 
                                    (<div className="">
                                        <Link
                                            to=".."
                                            relative="path"
                                            className="goBack-link text-decoration-none text-black d-flex align-items-center gap-2 ms-1 pt-4 pb-4">
                                            <FontAwesomeIcon icon={faArrowLeft} className=" fs-5  back-icon text-black-50"/>
                                            <h4 className=" pt-2 fs-5 ">Back to all vans</h4>
                                        </Link>
                                        <div className="bg-white p-4 rounded-top-3">
                                            <div className="row ">
                                                <img src={currentHostVan.imageUrl} alt="van" className="img-fluid rounded-3 col-6 " />
                                                <div className="col-6 ps-0 ps-sm-5">
                                                    <button className={`btn text-white fs-5 pt-1 pb-1 ps-4 pe-4 mt-5 
                                                        ${currentHostVan.type === "simple" ? "simple" : currentHostVan.type === "rugged" ? "rugged" : "luxury"}
                                                        `}
                                                    >{currentHostVan.type}</button>
                                                    <h2 className="mt-4 mb-3 fw-bold">{currentHostVan.name}</h2>
                                                    <h3 className="pt-1">${currentHostVan.price}<span className="fw-normal">/day</span></h3>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-4 pt-5">
                                                <NavLink
                                                    to={`.`}
                                                    end
                                                    className={`link text-decoration-none fw-bold fs-4 ${({isActive}) => isActive ? "active" : null} `}
                                                >Details</NavLink>
                                                <NavLink
                                                    to='pricing'
                                                    className={`link text-decoration-none fw-bold fs-4 ${({isActive}) => isActive ? "active" : null} `}
                                                >Pricing</NavLink>
                                                <NavLink
                                                    to='photos'
                                                    className={`link text-decoration-none fw-bold fs-4 ${({isActive}) => isActive ? "active" : null} `}
                                                >Photos</NavLink>
                                            </div>
                                            <Outlet context={{currentHostVan}}/>
                                        </div>
                                    </div>)
                                
                                : (<p>van not found
                                    <Link to="/host/vans">Back to all vans</Link>
                                </p>)}
                            </div>
                        )
                    }}
                </Await>
            </React.Suspense>
        </div>
    )
}

export default HostVanDetail