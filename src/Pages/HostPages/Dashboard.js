import React from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { getVans } from "../../api";
import { requireAuth } from "../../utils";

// Loader function to fetch data from local JSON file
export async function loader({ request }) {
    await requireAuth(request)
    return defer({ vans: getVans() })
}


const Dashboard = () => {
    const dataPromise = useLoaderData()
    return (
        <div className="host dashboard pt-5">
            
            <div className="dashboard-info p-1 p-sm-2 p-md-3 p-lg-4">
                <div className="container">
                    <h1 className="fw-bold mt-5">Welcome!</h1>
                    <div className="d-flex justify-content-between">
                        <p className="fs-5">Income last 30 days</p>
                        <p className="fs-5">Details</p>
                    </div>
                    <h1 className="fs-1 fw-bolder mb-5">$2,260</h1>
                </div>
            </div>

            <div className="review-score p-1 p-sm-2 p-md-3 p-lg-4">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-4">
                            <h3 className="fw-bold">Review score</h3>
                            <FontAwesomeIcon icon={faStar} className="fs-5" />
                            <h3 className="pt-1">5.0<span className="fw-normal">/5</span></h3>
                        </div>
                        <p className="fs-5 pt-1">Details</p>
                    </div>
                </div>
            </div>

            <div className="listed-vans p-1 p-sm-2 p-md-3 p-lg-4">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <h2 className="fw-bold">Your listed vans</h2>
                        <p className="fs-5">View all</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="mt-2 pb-5 row ">
                    <React.Suspense fallback={<h2>Loading host vans...</h2>}>
                        <Await resolve={dataPromise.vans}>
                            {vans => {
                                return (
                                    vans.map(item => (
                                        <Link 
                                            to={`/host/vans/${item.hostId}`}
                                            key={item.id}
                                            className="host-vans-item text-decoration-none text-black d-flex gap-3 mt-4 ms-3 ms-sm-4 gap-5 p-4 rounded-3 col-11 col-lg-5"
                                            >
                                            <img src={item.imageUrl} alt="img" className="img-fluid rounded-3" />
                                            <div>
                                                <h4>{item.name}</h4>
                                                <p className="fs-5">${item.price}/day</p>
                                            </div>
                                        </Link>
                                    ))
                                )
                            }}                          
                        </Await>
                    </React.Suspense>
                </div>
            </div>
        </div>
    )
}

export default Dashboard