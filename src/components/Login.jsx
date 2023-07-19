import React, { useContext, useState } from "react";
import { Authcontext } from "../context/AuthContextPro";

function Login() {

    const authval  = useContext(Authcontext)
    console.log(authval);

    // const initialData = {
    //     "email" : "",
    //     "password" : ""
    // }


const [email, setemail] = useState("")
const [password, setpassword] = useState("")
// const[user, setuser] = useState(initialData)

const emailvalue = (e)=> {
//   console.log(e.target.value);
  setemail(e.target.value)
}
const passvalue = (e)=> {
    // console.log(e.target.value);
    setpassword(e.target.value)
}

const form_submit = (e) => {
   e.preventDefault()

   const obj = {email, password}
//    setuser(obj)
   console.log(obj);
   Login(obj)
}

  return (
    <>
    <div className="loginpage">
        {/* <h1>{user.email}</h1> */} 
      <h1> Login</h1>
      <form onSubmit={(e)=> form_submit(e)}>
        <input type="email" placeholder="email" onChange={(e)=> emailvalue(e)}/>
        <input type="password" placeholder="password" onChange={(e)=> passvalue(e)} />
        <input type="submit" value="Submit" />
        <h5>Create account</h5>
      </form>
    </div>

    <div className="signupage loginpage">
      <h1> Signup</h1>
      <form onSubmit={(e)=> form_submit(e)}>
        <input type="username" placeholder="username" />
        <input type="password" placeholder="password"/>
        <input type="submit" value="Submit" />
      </form>
    </div>


    </>

  );
}

export default Login;
