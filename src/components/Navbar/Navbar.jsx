import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
        <div >
            <h1 style={{margin:'5px'}}>
                DevLink MarketPlace
            </h1>
        </div>
        <div className='nav-items'>
            <Link to='/home' className='link'>
                Find DEV
            </Link>
            <Link to='/home' className='link'>
                Find Jobs
            </Link>
            <Link to='/signin' className='link'>
                Login
            </Link>
            <Link to='/signup' className='link'>
                SignUp
            </Link>
        </div>
    </div>
  );
};

export default Navbar;
