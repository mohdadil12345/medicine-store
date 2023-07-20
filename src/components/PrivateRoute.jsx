
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/AuthContextPro";
import React from 'react'

function PrivateRoute({children}) {
 
    const {login, logout, user} = useContext(Authcontext)

    if(user.isAuth == false){
       return <Navigate to = "/login"/>
    }


  return (
    <div>{children}</div>
  )
}

export default PrivateRoute