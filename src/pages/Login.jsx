import React, { useState } from "react";
import { FaGoogle, FaWindows, FaApple } from "react-icons/fa";
import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {
    // You'll update this function later...
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Welcome Back</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter address"
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input value={password} placeholder="Password" className={"inputBox"} />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
      <br />
      <div className="log">
        Don't have an account?{" "}
        <a className="link" href="/signup">
          Sign up
        </a>
      </div>
      <div class="line-container">
        <div class="line"></div>
        <div class="or">OR</div>
        <div class="line"></div>
      </div>
      <div>
        <div className="container">
          <button className="google, button">
            <FaGoogle className="icon" /> Continue with Google
          </button>
        </div>

        <div className="container">
          <button className="microsoft, button">
            <FaWindows className="icon" /> Continue with Microsoft Account
          </button>
        </div>

        <div className="container">
          <button className="apple, button">
            <FaApple className="icon" /> Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
