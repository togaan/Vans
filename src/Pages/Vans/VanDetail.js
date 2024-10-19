import React from "react";
import { useParams, useLocation, useLoaderData, defer, Await } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getVans } from "../../api";
// import {faLinkedin, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function loader() {
    return defer({vanDetail: getVans()})
  }

const VanDetail = () => {
    const newDAta = useLoaderData()
    const location = useLocation()
    const { id } = useParams(); // Extract the ID from the URL
    
    
    return (
        <div className="explorer-van">
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={newDAta.vanDetail}>
                    {vanDetail => {
                        const search = location.state?.search || ""
                        const typeFilter = location.state?.typeFilter || "all"
                        const item = vanDetail.find(item => item.id === id); // Find the item by ID

                        return (                   
                            <div className="">
                                {item ? (<div>       
                                    <Link
                                        to={`..${search}`}
                                        relative="path"
                                        className="goBack-link text-decoration-none  d-flex align-items-center gap-2 ms-5 ">
                                        <FontAwesomeIcon icon={faArrowLeft} className=" fs-5  back-icon"/>
                                        <h4 className=" pt-2 fs-5">Back to {typeFilter} vans</h4>
                                    </Link>

                                    <div className="container mt-4">
                                        <div className="row">
                                            
                                            <div className="vanImage col-12 col-lg-6 mb-3"><img src={item.imageUrl} alt="van" className="img-fluid rounded-3" /></div>
                                            <div className="info col-12  col-lg-6 p-5">
                                                <button className={`btn text-white fs-5 pt-1 pb-1 ps-4 pe-4  
                                                ${item.type === "simple" ? "simple" : item.type === "rugged" ? "rugged" : "luxury"}
                                                `}>{item.type}</button>
                                                <h1 className="mt-3 fs-2">{item.name}</h1>
                                                <h1 className="mt-3 fs-2">${item.price}/day</h1>
                                                <h4 className="mt-5  fs-5 ">{item.description}</h4>
                                                <div className="rent-van d-flex justify-content-start ">
                                                    <button className="btn text-white w-50 mt-5 fw-bold fs-5">Rent this van</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                ) : (<p>van not found
                                        <Link to="/vansPage">Back to all vans</Link>
                                    </p>)
                                }
                            </div>
                       )
                    }}
                </Await>
            </React.Suspense>
        </div>
    )
}

export default VanDetail