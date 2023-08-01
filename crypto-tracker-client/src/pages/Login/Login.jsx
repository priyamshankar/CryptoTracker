import React, { useEffect, useState } from "react";
import "./style/Login.css";
import axios from "axios";



const Login = () => {

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setFormData({ ...FormData, [e.target.name]: [e.target.value] });
  };

  const wrongCredAction = () => {
    alert("Wrong Email or password");
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("", FormData).then((res) => {
      console.log(res.data);
      const data = res.data;
      if (data.loginMatched) {
      } else {
        wrongCredAction();
      }
    });
  };

  return (
    <div className="Loginpage-container">
      <div className="loginpage-gridleft">
        {/* <img src="" alt="kissanImage" /> */}
      </div>
      <div className="loginpage-gridright">
        <div className="loginInsidecontent">
          <div className="loginFormHeader-loginpage">
            <div>Sign in</div>
            <span>
              or <a href="signup">create an account</a>
            </span>
          </div>
          <input
            className="input-loginpage"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handlechange}
          />
          <input
            name="password"
            type="password"
            className="input-loginpage"
            placeholder="Password"
            onChange={handlechange}
          />
          <div className="loginformbottom-loginpage">
            <div className="checkboxloginpage">
              <input type="checkbox" name="remember" id="rememberLoginPage" />
              {/* <span>Remember me</span> */}
              <label htmlFor="rememberLoginPage">Remember me</label>
            </div>
            <button
              onClick={(e) => {
                handlesubmit(e);
                // temp(e);
              }}
            >
              Sign in
            </button>
          </div>
          <a href="#">Forgot your password</a>
        </div>
      </div>
    </div>
  );
};

export default Login;