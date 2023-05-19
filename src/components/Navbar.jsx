import React, { useState } from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { path } from "../Routes/Router";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className="parent-nav">
      <div className="navbar-container">
        <div className="navbarLogo">
          <img src={Logo} alt="logo" className="navbarLogoImg" />
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`navbarLinks ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <Link to={path.LOGIN} className="navbarBtn">Login</Link>
            <Link to={path.REGISTER} className="navbarBtn">Sign Up</Link>
          </ul>
        </div>
      </div>
    </section>


  );
};

export default Navbar;
