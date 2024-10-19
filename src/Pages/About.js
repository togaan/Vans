import React from "react";
//import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="about ">
            
            <div className="img"></div>

            <div className="about-text pt-5 ps-5 pe-4 ">
                <h1 className=" fw-bolder">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="fs-5 mt-4">
                    Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="fs-5">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>

            <div className="d-flex justify-content-center">
                <div className="explorer-vans m-5  p-5 rounded-3  ">
                    <h1>Your destination is waiting.</h1>
                    <h1>Your van is ready.</h1>
                    <button className="btn text-white fw-bold fs-3 mt-5  p-3 ps-4 pe-4">Explore our vans</button>
                </div>
            </div>
            
        </div>
    )
}

export default About