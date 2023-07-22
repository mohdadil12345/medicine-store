import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { useContext } from "react";
import { Authcontext } from "../context/AuthContextPro";
import { background } from "@chakra-ui/react";
import { toast } from "react-hot-toast";

function Navbar() {
  const location = useLocation();
  let cartlen =  localStorage.getItem("cartlength")

  let [abc, setabc] = useState(0)
  const { login, logout, user } = useContext(Authcontext);
  const navig = useNavigate()

  const logoutt = () => {
    logout()
    toast.success("logout Successfully", {
      style: {
        borderRadius: "50px",
        background: "#000428",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });

    navig("/login")
    
  }


  useEffect(() => {
    setabc(cartlen.length)
  }, [abc])
  



  return (
    <div className="flex-box bg2 spb nav">
      <div className="flex-box logo">
        <img src={logo1} alt="" />
        <h2>
          Medi<span>Care</span>
        </h2>
      </div>
      <ul className="flex-box">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/medicine" ? "active" : ""}>
          <Link to="/medicine">Medicine</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/offer">Offer</Link>
        </li>
        <li className={location.pathname === "/cart" ? "active" : ""}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div className="flex-box">
        <input className="bdr4 btn ser" type="text" placeholder="Search" />
        <h1>{user.username}</h1>

        {user.isAuth ? (
            <p onClick={()=> logoutt()} className="btn bdr4 bg5">Logout</p>
        ) : (
          <Link to="/login">
            <p className="btn bdr4 bg5">Login</p>
          </Link>
        )}
      </div>    
    </div>
  );
}

export default Navbar;
