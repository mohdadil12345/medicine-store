import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const Authcontext = createContext();


const initialData = {
    isAuth : false,
    email : "",
    password  : ""
}

function AuthContextPro({ children }) {
    const[user, setuser] = useState(initialData)
    const[cartdata, setcartdata] = useState([])
    const [total, settoal] = useState(0)


    const login = (checkval) => {
        setuser({
            isAuth : true,
            email : checkval.email,
            password  : checkval.password,
            username : checkval.username
        })
    }

    const logout = () => {
           setuser({
            isAuth : false,
            email : "",
            password  : ""
            
           })
       
    }




  return <Authcontext.Provider value = {{settoal, total, login, logout, user, cartdata, setcartdata}}>
    {children}
    </Authcontext.Provider>;


}

export default AuthContextPro;
