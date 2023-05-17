import React, { useState } from "react";
import "./styles/Navbar.css";
import Logo from "./../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav>
      <div className="navbar container">
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
            <button className="navbarBtn">Login</button>
            <button className="navbarBtn">Sign Up</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
