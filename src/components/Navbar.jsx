import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useContext} from "react";
import { Authcontext } from '../context/AuthContextPro';

function Navbar() {
  const location = useLocation();

  const {login, logout, user} = useContext(Authcontext)

  return (
    <div className='flex-box bg2 spb nav'>
      <div className='flex-box logo'>
        <img src={logo1} alt="" />
        <h2>Medi<span>Care</span></h2>
      </div>
      <ul className='flex-box'>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/medicine' ? 'active' : ''}>
          <Link to="/medicine">Medicine</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/destination' ? 'active' : ''}>
          <Link to="/destination">Destination</Link>
        </li>
    
      </ul>
      <div className='flex-box'>
        <input className='bdr4 btn ser' type="text" placeholder='Search' />
          <h1>{user.username}</h1>
        <Link to="/login"><p className='btn bdr4 bg5' >Login</p></Link>
      </div>
    </div>
  );
}

export default Navbar;
