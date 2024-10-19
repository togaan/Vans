import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../api";
import { requireAuth } from "../../utils"

export async function loader({request}) {
    await requireAuth(request)
    return defer({hostVans: getVans()})
}
  
const HostVans = () => {

    const newDAta = useLoaderData()

    return (
        <div className="host host-vans">
            <div className="container pt-5">
                <h1 className="fw-bold pt-3 ps-3">Your listed vans</h1>

                <div className="mt-2 pb-5 row ">
                    <React.Suspense fallback={<h2>Loading host vans...</h2>}>
                        <Await resolve={newDAta.hostVans}>
                            {hostVans => {
                                return (
                                    hostVans.map(item => (
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

export default HostVans