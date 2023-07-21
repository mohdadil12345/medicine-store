
import React from 'react'
import { Link } from 'react-router-dom'
import  { useContext, useState } from "react";

function Signup() {
const [username, setusername] = useState()
const [email, setemail] = useState()
const [password, setpassword] = useState()

const uservlaue = (e) => {
    setusername(e.target.value)
}
const email_val = (e) => {
    setemail(e.target.value)
}
const  pass_val = (e) => {
    setpassword(e.target.value)
}
    const signform = (e) => {
      e.preventDefault()
    //   console.log(user, email, password);

      const userobj = {
        username : username,
        email : email,
        password : password
      }
    //   console.log(userobj);

      const userdata = JSON.parse(localStorage.getItem("signupdata"))
      if(userdata){
         userdata.push(userobj)
          localStorage.setItem("signupdata", JSON.stringify(userdata))
      }else{

          localStorage.setItem("signupdata", JSON.stringify([userobj]))
      }


    }

  return (
 <div className='abcd signup-page'>
     <div className="signupage loginpage"  >
      <h1> Signup</h1>
      <form onSubmit={(e) => signform(e)}>
        <input type="text" placeholder="username" onChange={(e)=> uservlaue(e)}/>
        <input type="email" placeholder="email" onChange={(e)=> email_val(e)}/>
        <input type="password" placeholder="password" onChange={(e)=> pass_val(e)}/>
        <input type="submit" value="Submit" />
        <Link to="/login">Already have anaccount Login</Link>
      </form>
    </div>

 </div>
  )
}

export default Signup
