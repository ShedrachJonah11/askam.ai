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
        <div>
          <Link to="/" className="navbarLogo">
            <img src={Logo} alt="logo" className="navbarLogoImg" />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        <div className={`navbarLinks ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>Get Started</li>
            <li> How it works</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
