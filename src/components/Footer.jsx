import React, { useState } from "react";
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
return (
  <footer className="homeFooter">
        <div className="footer-container">
          <div className="footerTable">
            <ul>
              <li className="footerliHeader">FAQ</li>
              <li>Community</li>
              <li>Classify</li>
            </ul>
            <ul>
              <li className="footerliHeader">About</li>
              <li>Summarize</li>
            </ul>
            <ul>
              <li className="footerliHeader">Developers</li>
            </ul>
            <ul>
              <li className="footerliHeader">Trusted</li>
            </ul>
          </div>
          <h1>ASKAMAI</h1>
          <div className="footerInfo">
            <ul className="footerSocials">
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Email</li>
            </ul>
            <ul className="footerTerms">
              <li>Privacy</li>
              <li>Term of Use</li>
              <li>@askam.ai 2023</li>
            </ul>
          </div>
        </div>
    </footer>
)

};

export default Footer;