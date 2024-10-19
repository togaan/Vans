import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    const location = useLocation();
    const { id } = useParams(); 
    console.log(id)

    const isLoggedIn = localStorage.getItem("loggedin")

    return (
        <header>
            <nav className="navbar p-4">
                <div className="container">
                    <Link className=" home-link fs-1 fw-bolder mt-1 text-decoration-none" to="/">#VANLIFE</Link>
                    <div className="links d-flex gap-4">
                        <Link
                            className={`link text-decoration-none fw-bold fs-3 
                                ${location.pathname === "/host" ||
                                    location.pathname === "/host/income" ||
                                    location.pathname === "/host/vans" ||
                                    location.pathname === "/host/reviews" ? "active" : ""} `}
                            to="host"
                        >Host</Link>
                        <Link
                            className={`link text-decoration-none fw-bold fs-3 
                                ${location.pathname === "/about" ? "active" :  ""}`}
                            to="about">About</Link>
                        <Link
                            className={`link text-decoration-none fw-bold fs-3 
                                ${location.pathname === "/vansPage" ? "active" :  location.pathname === `/vansPage/${id}` ? "active": ""}`}
                            to="vansPage">Vans</Link>
                        
                        {!isLoggedIn &&
                            <Link
                                className={`link text-decoration-none fw-bold fs-3 
                                    ${location.pathname === "/login" ?  "active": ""}`}
                                to="login">
                                    <FontAwesomeIcon icon={faCircleUser} />
                            </Link>
                        }
                        {isLoggedIn &&
                            <Link
                                className={`link text-decoration-none fw-bold fs-3 
                                    ${location.pathname === "/logout" ?  "active": ""}`}
                                to="logout">
                                Log out
                            </Link>
                        }
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header