import React from "react";
import { NavLink } from "react-router-dom";

const HostNav = () => {
    // to handle active element in react router we either use location pathname or we use the NavLink that should have 
    // property called isActive which represents the active element 
    // Note: When we use NavLink property we must give "end" to the first NavLink to tell it 

    return (
        <header>
            <nav className="host-nav pt-5">
                <div className="container d-flex gap-4">
                    <NavLink
                        className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? "active" : null} `}
                        to="."
                        end
                    >Dashboard</NavLink>
                    <NavLink
                        className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? "active" : null} `}
                        to="income"
                    >Income</NavLink>
                    <NavLink
                        className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? "active" : null} `}
                        to="vans"
                    >Vans</NavLink>
                    <NavLink
                        className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? "active" : null} `}
                        to="reviews"
                    >Reviews</NavLink>
                </div>
            </nav> 
        </header>
    )
}

export default HostNav