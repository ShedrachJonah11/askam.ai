import React, { useState } from "react";
import "./styles/Howitworks.css";
import { Link } from "react-router-dom";
import phones from "./../assets/phones.png";

const Getstarted = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const codeToCopy = "Join bugun-large";
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
  };
  return (
    <div className="home2">
      <section id="getStarted" className="homeSectionTransform">
        <div className="wrapper">
          <h1>Transform your products with Askam.ai</h1>
          <p>
            Easy as ABC, Send hello to your newest buddy, Save the number{" "}
            <Link to="https://wa.me/+14155238886">+1 (415) 523-8886</Link> on
            your Whatsapp to get started Use the code{" "}
            <span>"Join bugun-large"</span> to askam anything!!
          </p>
        </div>
        <h2 className="homeSectionTransformContainText">Passcode</h2>
        <div className="homeSectionTransformContainer">
          <div className="homeSectionTransformContain">
            <h1>Join bugun-large</h1>
            <button onClick={copyCode}>
              {copied ? "Copied!" : "Copy Code"}
            </button>
          </div>
        </div>
        <div className="homeSectionChatBot">
          <img src={phones} alt="chatbot" className="phones" />
        </div>
      </section>
    </div>
  );
};
export default Getstarted;
