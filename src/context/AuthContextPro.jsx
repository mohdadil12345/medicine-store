import React, { createContext, useState } from "react";

export const Authcontext = createContext();


const initialData = {
    "isAuth" : false,
    "email" : "",
    "password" : ""
}

function AuthContextPro({ children }) {
    const[user, setuser] = useState(initialData)

    const login = () => {
       
    }

    const logout = () => {

    }


  return <Authcontext.Provider value = {{login, logout, initialData}}>
    {children}
    </Authcontext.Provider>;


}

export default AuthContextPro;
