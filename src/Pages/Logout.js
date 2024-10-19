import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        return navigate(`/`)
    }

    const goBackToPreviousPage = () => {
        window.history.back();
    }
    return (
        <div className="logout">
            <div className="container pt-5">
                <div className="alert alert-warning p-5" role="alert">
                    <h1 className="text-center">Are you sure you want to log out</h1>
                    <div className="d-flex justify-content-around pt-5">
                        <button
                            onClick={handleLogout}
                            className="btn btn-primary"
                        >Log out
                        </button>

                        <button
                            onClick={goBackToPreviousPage}
                            className="btn  btn-dark "
                        >cansle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout