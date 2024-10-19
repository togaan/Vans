import React from "react";
import { Link } from "react-router-dom";
const EmptyPage = () => {
    return (
        <div className="empty-page d-flex align-items-center">
            <div className="container ">
                <h1 className="fs-1 fw-bolder text-center">Sorry, the page you were looking for was not found.</h1>
                <div className="d-flex justify-content-center w-100 mt-5">
                    <Link
                        to="/"
                        className="empty-page-link text-white text-decoration-none w-50 text-center p-3 fs-4 fw-bold rounded-3"
                    >Return to home</Link>
                </div>
            </div>    
        </div>
    )
}

export default EmptyPage