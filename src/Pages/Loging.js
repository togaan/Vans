import React from "react";
import {useLoaderData, Form, redirect, useActionData, useNavigation, Link } from 'react-router-dom';
import { loginUser } from "../api";



export function loginLoader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")


    // get the path that the user were in before he want to login, so we rediract the user after he login to the same path
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

    // Get user data by calling the loginUser function
    const userData = await loginUser(); // Ensure this returns the user data correctly.

    // Check the authentication status
    const searchedUserFromDatabase = userData.findIndex(item => item.email === email)

    if (userData && email === userData[searchedUserFromDatabase].email && password === userData[searchedUserFromDatabase].password) {
        
        localStorage.setItem("loggedin", true);
        
        // Perform the redirect
        return redirect(pathname);
    } else {
        return 'No user with those credentials found!'
        
    }

}   

const Login = () => {
    const message = useLoaderData()
    const error = useActionData() 
    const navigaiton = useNavigation()

    return (
        <div className="login ">

            <div className="container ">
                <h1 className="fw-bold text-center  pb-5 pt-5">Sign in to your account</h1>
                { message && <h3 className="fw-bold text-danger text-center  pt-5 pb-3">{message}</h3> }
                {error && <h3 className="fw-bold text-danger text-center  pt-5 pb-3">{error}</h3> }
                <Form
                    method="post"
                    replace
                    className="login-form m-auto ">
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="Email address"  
                    />
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                   
                    <button
                        disabled={navigaiton.state === "submitting"}
                        className="btn w-100 text-white fs-5 fw-bold mt-5 mb-5" >
                        { navigaiton.state === "submitting" ? "Logging in..." : "Log in"}
                    </button> 
                </Form>

                <div className="d-flex justify-content-center">
                    <Link
                        to='/createAcount'
                        className="text-decoration-none text-black text-cente pt-3 fs-5"
                        >Don’t have an account? <span className="create-acount">Create one now</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login