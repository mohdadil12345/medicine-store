
import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../context/AuthContextPro";
import React from 'react'

function PrivateRoute({children}) {
  
    const {login, logout, user} = useContext(Authcontext)
    const location = useLocation();

    if(user.isAuth == false){
      //  return <Navigate to = "/login"/>


      return <Navigate state={location.pathname} to="/login" replace />;

    }
  





  return (
    <div>{children}</div>
  )
}

export default PrivateRoute