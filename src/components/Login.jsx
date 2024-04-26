import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/AuthContextPro";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  const authval = useContext(Authcontext);
  const { login, logout, user } = useContext(Authcontext);
  console.log(authval);

  const emailvalue = (e) => {
    //   console.log(e.target.value);
    setemail(e.target.value);
  };
  const passvalue = (e) => {
    setpassword(e.target.value);
  };

  const login_form = (e) => {
    e.preventDefault();
    // console.log(email, password)

    let userdata = JSON.parse(localStorage.getItem("signupdata"));
    let checkval;
    if (userdata) {
      checkval = userdata.find(
        (ele) => ele.email == email && ele.password == password
      );
    }
    console.log(checkval);
    if (checkval) {
      toast.success("login Successfully", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      login(checkval);
      navigate(location.state);
      // navigate(location.state?.from );
      
    } else {
      toast.error("wrong credential", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      // navigate("/login");
      
      
    }
  };

  return (
    <div className="abcd">
      <div className="loginpage">
       
       <h1 style={{color:"#51c6cd"}}>Login</h1>
   
        <form onSubmit={(e) => login_form(e)}>

          <label htmlFor="">email</label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => emailvalue(e)}
           
          />


          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => passvalue(e)}
           
          />
         

         <button type="submit">Login</button>
          <Link className="link" to="/signup">Create account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
