import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {createUserDocFromAuth, auth } from "../../Utils/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
 

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).max(13).required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required("Confirm password is required")
});


export default function SignUp() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate(); 

  const onSubmitHandler = async (data) => {
    const {name, email, password } = data;
   
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);      
      reset();
      console.log('Created the email and password')

      await createUserDocFromAuth(userCredential.user, {name, password})
      
      console.log('Created the Doc!');

      navigate('/signin');

    } catch (error) {
      console.error("Error is " + error)
    }
  };

  return (
    <div className='login'>
      <div className='title'>Create DevLink Account</div>
      <form className="form" onSubmit={handleSubmit(onSubmitHandler)}>
        <input {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>

        <input {...register("email")} placeholder="Email" type="email" />
        <p>{errors.email?.message}</p>

        <input {...register("password")} placeholder="Password" type="password" />
        <p>{errors.password?.message}</p>

        <input {...register("confirmPassword")} placeholder="Confirm Password" type="password" />
        <p>{errors.confirmPassword?.message}</p>

        <button className = 'signUpsubmit' type="submit">Sign Up</button><br/>
        <span className="toggleSignPages">Already have an account? 
          <a className="link" href="/signin" > Login </a>
        </span>
      </form>
    </div>
  );
}