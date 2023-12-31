import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import './SignIn.css';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from "../../Utils/config/firebase";
import { Link } from 'react-router-dom'; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(13).required("Password is required"),
});

const SignIn = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();  // Cleanup subscription on unmount
    }, []);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate(); 

    const googleSignIn = async(data) => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    const onSubmitHandler = async(data) => {
        const { email, password } = data;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in!!');
            reset();
            navigate('/');
        } catch {
            console.error('error in Loggin in' + errors);
            alert('Error user credentials not matching the Database');
        }
    };

    const signOutHandler = async () => {
        try {
            await signOut(auth);
            console.log('User signed out!');
            alert('Sign Out successful')
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <div className='signin'>
            <div className='title'>Login</div>
            <form className= 'formSignIn' onSubmit={handleSubmit(onSubmitHandler)} action='/'>
                <input className='Input' {...register("email")} placeholder="Email" type="email" />
                <p>{errors.email?.message}</p>

                <input {...register("password")} placeholder="Password" type="password" />
                <p>{errors.password?.message}</p>

                <button className='signInButton' type="submit">Login</button>
                <button className='alternativeSignInOptionsButton' onClick={googleSignIn}>
                    Login Using Google <FaGoogle className= 'google-icon' size={20} />
                </button> 
                <span className="toggleSignPages">Don't have an account? 
                    <Link className="link" to="/signup"> SignUp </Link>
                </span>
            </form>
            {user && <button className='signOutButton' onClick={signOutHandler}>Sign Out</button>}
        </div>
    );
};

export default SignIn;
