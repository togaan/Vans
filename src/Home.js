import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home ">
        
            <nav className="navbar p-4">
                <div className="container">
                    <Link className=" home-link fs-1 fw-bolder mt-1 text-decoration-none" to="/">#VANLIFE</Link>
                    <div className="links d-flex gap-4">
                        <Link className="link text-decoration-none fw-bold fs-3" to="/about">About</Link>
                        <Link className="link text-decoration-none fw-bold fs-3" to="/vansPage">Vans</Link>
                    </div>
                </div>

            </nav>

            <div className="home-body d-flex justify-content-center p-5">
                <div className="contant p-3 mt-5">
                    <h1 className=" fs-1 fw-bolder text-white">You got the travel plans, we got the travel vans.</h1>
                    <p className=" fs-6  text-white mt-3 mb-5">
                        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                    </p>
                    <button className="btn text-center w-100 mt-3 p-3 text-white fs-3 fw-bold">Find your van</button>
                </div>
            </div>

            <footer className="text-white text-center pt-5 fs-4">
                Ⓒ 2022 #VANLIFE
            </footer>
        </div>
    )
}

export default Home