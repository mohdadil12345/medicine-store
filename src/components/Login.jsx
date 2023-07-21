import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../context/AuthContextPro";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

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
      alert("login_successfull");
      login(checkval);
      navigate("/");
    } else {
      alert("something went wrong");
      navigate("/login");
    }
  };

  return (
    <div className="abcd">
      <div className="loginpage">
        {/* <h1>{user.email}</h1> */}
        <h1> Login</h1>
        <form onSubmit={(e) => login_form(e)}>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => emailvalue(e)}
            className="btn btn-dark"
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => passvalue(e)}
            className="btn btn-dark"
          />
          <input
            type="submit"
            value="Login"
            className="loginbtn btn btn-dark"
          />
          <Link to="/signup">Create account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
