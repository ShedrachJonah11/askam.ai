import React, { useState } from "react";
import { FaGoogle, FaWindows, FaApple } from "react-icons/fa";
import "./styles/Signup.css";
import Logo from "./../assets/logo.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {
    // You'll update this function later...
  };

  return (
    <>
      <Navbar />
      <div className={"mainContainer"}>
        <div className={"titleContainer"}>
          <div>Create your Account</div>
        </div>
        <br />
        <div className="subTitle">
          Please note that phone verification is required for signup. Your
          number will only be used to verify your identity for security
          purposes.
        </div>
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
          <input
            value={password}
            placeholder="Password"
            className={"inputBox"}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
          <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Register"}
          />
        </div>
        <br />
        <div className="log">
          Aleady have an account?{" "}
          <a className="link" href="/login">
            Log in
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
    </>
  );
};

export default Signup;
