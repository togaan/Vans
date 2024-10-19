import React from "react";
import { Form, redirect, useNavigation} from 'react-router-dom';
import { db, auth } from "../api";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';


  
export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email)
    console.log(password)
    try {
        // Create user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user) {
            throw new Error('User creation failed'); // Handle the case where user is not defined
        }

        // Add user data to Firestore, check properties available in user object
        await setDoc(doc(db, 'users', user.uid), {
            email: user.email,
            // Password should NOT be stored! This is a security risk!
            // password: user.password, // Comment out this line
            createdAt: new Date(),
        });

        return redirect('/');

    } catch (error) {
        if (error.code === 'auth/invalid-email') {
            console.error('Invalid email format');
        } else if (error.code === 'auth/email-already-in-use') {
            console.error('Email already in use');
        } else if (error.code === 'auth/weak-password') {
            console.error('Password is too weak');
        }
        console.error('Error creating user:', error.message);
        throw new Error(`User registration failed: ${error.message}`);
        
    }
    
}

const CreateAccount = () => {

    const navigaiton = useNavigation()
    
    return (
        <div className="create-acount">
            <div className="container ">
                <h1 className="fw-bold text-center  pb-5 pt-5">Create an account</h1>
                
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
                        { navigaiton.state === "submitting" ? "Createing..." : "Create"}
                    </button> 
                </Form>
            </div>
        </div>
    )
}

export default CreateAccount