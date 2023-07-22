import React, { createContext, useState } from "react";

export const Authcontext = createContext();


const initialData = {
    isAuth : false,
    email : "",
    password  : ""
}

function AuthContextPro({ children }) {
    const[user, setuser] = useState(initialData)


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


  


  return <Authcontext.Provider value = {{login, logout, user}}>
    {children}
    </Authcontext.Provider>;


}

export default AuthContextPro;
