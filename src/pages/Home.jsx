import React, { useState } from "react";
import "./styles/Home.css";
import chatbot from "./../assets/chatbot.png";
import codeblock from "./../assets/codeblock.png";
import arrow1 from "./../assets/arrow1.png";
import arrow2 from "./../assets/arrow2.png";
import profile from "./../assets/profile.png";
import phone from "./../assets/phone.png";
import img from "../images.json";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    const codeToCopy = "Join bugun-large";
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
  };
  const { images } = img;
  return (
    <div className="home">
      <Navbar />
      <div className="TopContainer">
        <section className="homeSectionFirst">
          <div className="homeSectionIntro">
            <h1>Experience cutting-edge AI at your fingertips.</h1>
            <h2>
              Obtain swift responses, engage in delightful discussions, request
              scrumptious recipes, check weather forecasts, and so much more.
              Effortlessly perform internet searches and rely on AI-powered
              solutions to provide the information you need....
            </h2>
            <div className="homeJoinUs">
              <div className="homeJoinUsImgs">
                <img src={profile} alt="profile1" />
                <img src={profile} alt="profile2" className="homeJoinHide" />
                <img src={profile} alt="profile3" className="homeJoinHide" />
                <img src={profile} alt="profile4" className="homeJoinHide" />
                <div className="homejoinText">30+</div>
              </div>
              <p className="homeJoinUsText">
                Join our discord <a href="mailto:@akami.ai">@askami.ai</a>
              </p>
            </div>
            <div className="homeCodeMapping">
              <img src={arrow2} alt="arrow2" className="arrow2Img" />
              <img src={codeblock} alt="codeblock" className="codeblock" />
              <img src={arrow1} alt="arrow1" className="arrow1Img" />
            </div>
          </div>
          <div className="homeSectionChatBot">
            <img src={chatbot} alt="chatbot" className="chatbotImg1" />
            <img src={chatbot} alt="chatbot" className="chatbotImg2" />
          </div>
        </section>
        </div>
    </div>
  );
};

export default Home;
