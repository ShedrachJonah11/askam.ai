import React from "react";
import "./styles/Home.css";
import ChatBot from "../components/ChatBot";
import chatbot from "./../assets/chatbot.png";
import codeblock from "./../assets/codeblock.png";
import arrow1 from "./../assets/arrow1.png";
import arrow2 from "./../assets/arrow2.png";
import profile from "./../assets/profile.png";
import ImageComp from "../components/ImageComp";
import img from "../images.json";
import Ai from "./../assets/Aichat.png";
import Navbar from "../components/Navbar";

const Home = () => {
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
            <img src={chatbot} alt="chatbot" className="chatbotImg" />
          </div>
        </section>
        <section className="homeSectionFeatures">
          <header className="homeSectionFeaturesHeader">
            <h1>Our Features</h1>
          </header>
          <article className="homeSectionFeaturesText">
            <p>
              Say Hello to our latest integration - the AI-powered WhatsApp!
              With advanced natural language processing and machine learning
              algorithms, it's now easier than ever to create and summarize
              content right within the app. From generating custom messages to
              summarizing lengthy documents, this cutting-edge technology does
              it all.
            </p>
          </article>
        </section>
        <section className="homeSectionFocus">
          <header className="homeSectionFocusHeader">
            <h1>Get Started</h1>
            <h2>Easy as ABC, Send hello to your newest buddy,</h2>
          </header>
          <article className="homeSectionFocusText">
            On your Whatsapp to get Started
          </article>
          <h1 className="homeSectionFocusCode">
            Use the code{" "}
            <span className="homeSectionFocusSpan">"Join begun-large"</span> to
            askam anything
          </h1>
          <button className="homeSectionFocusButton">
            <a href="http://wa.me/+14155238886">Get Started</a>
          </button>
        </section>
        <section className="homeSectionComponent">
          {images.map((image) => {
            return <ImageComp key={image.id} img={image.src} alt={image.alt} />;
          })}
        </section>
      </div>
      <section className="homeSectionGenerate">
        <article className="homeSectionGenerateTop">
          <div className="sectionGenerateIntro">
            <h1>
              Global companies can leverage our platform and API, which are
              designed to be user-friendly, to cater to various use cases.
            </h1>
          </div>
          <div className="homeSectionGenerateTopCard">
            <h1>GENERATE</h1>
            <div className="GenerateCard"></div>
          </div>
        </article>
        <article className="homeSectionGenerateBottom">
          <div className="firstCard">
            <h1>GENERATE</h1>
            <div className="GenerateCard">
              <img src={Ai} alt="aibot" />
            </div>
          </div>
          <div className="secondCard">
            <h1>GENERATE</h1>
            <div className="GenerateCard"></div>
          </div>
        </article>
      </section>
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
    </div>
  );
};

export default Home;
