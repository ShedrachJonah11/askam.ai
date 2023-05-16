import React from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbarLogo">
        <img src={Logo} alt="logo" className="navbarLogoImg" />
      </div>
      <div className="navbarLinks">
        <ul>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <button className="navbarBtn">Login</button>
          <button className="navbarBtn">Sign Up</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
