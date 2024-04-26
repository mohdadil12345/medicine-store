
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  { useContext, useState } from "react";
import toast from 'react-hot-toast'

const init = {
  username : "",
    email : "",
    password : "",

}


function Signup() {

const [formdata, setformdata] = useState(init)
const [errors, seterror] = useState({})

const nav = useNavigate()



const handle_chnage = (e) => {
  const { name, value } = e.target;
  setformdata({ ...formdata, [name]: value })

  if (name === "username") {
    seterror({ ...errors, [name]: "" });
  }
  if(name == "email") {
    seterror({...errors, [name] : ""})
  }

  if(name == "password"){
      seterror({...errors, [name] : ""})
  }


}


    const signform = (e) => {
      e.preventDefault()
    //   console.log(user, email, password);

    
  const validnErrors = {}

  // username
  if(!formdata.username.trim()){
    validnErrors.username = "username is required"
  }

    // email
    if(!formdata.email.trim()) {
      validnErrors.email = "email is required"
    }else if(!/\S+@\S+\.\S+/.test(formdata.email)){
       validnErrors.email = "email is not valid"
    }

      // password
  if(!formdata.password) {
    validnErrors.password = "password is required"
  }else if (formdata.password.length < 6) {
     validnErrors.password = "password should atleast 6 char"
  }
  


    // console.log("formdata", formdata)


      const userdata = JSON.parse(localStorage.getItem("signupdata"))
      if(userdata){
         userdata.push(formdata)
          localStorage.setItem("signupdata", JSON.stringify(userdata))
      }else{

          localStorage.setItem("signupdata", JSON.stringify([formdata]))
      }



      seterror(validnErrors)


      if(Object.keys(validnErrors).length == 0) {
    
        toast.success("Signup  Successfull", {
          style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
          },
        });

        nav("/login")

      }
    




    }


    const {username, email, password} = formdata


  return (
 <div className='abcd signup-page'>
     <div className="signupage"  >
      <h1 className='head1'> Signup</h1>
      <form onSubmit={(e) => signform(e)}>

        <label htmlFor="">username</label>
        <input  name="username"    value={username} type="text" placeholder="username"  onChange={(e) => handle_chnage(e)}/>
        {errors.username && <span>{errors.username}</span>}

        <label htmlFor="">email</label>
        <input name="email"  value={email} type="email" placeholder="email"  onChange={(e) => handle_chnage(e)}/>
        {errors.email  && <span>{errors.email}</span>}

        <label htmlFor="">password</label>
        <input value={password}   name="password" type="password" placeholder="password"  onChange={(e) => handle_chnage(e)}/>
        {errors.password && <span>{errors.password}</span>}


      
        <button type='submit'>Submit</button>
        <Link className='link' to="/login">Already have anaccount Login</Link>
      </form>
    </div>

 </div>
  )
}

export default Signup
