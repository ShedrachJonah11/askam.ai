import React from "react";
import "./styles/ChatBot.css";
import profile from "./../assets/profile.png";
import active from "./../assets/active.png";
import Reload from "./../assets/Reload.png";
const ChatBot = () => {
  return (
    <div className="chatBot">
      <header className="chatBotHeader">
        <div className="chatBotHeaderIcon">
          <img src={profile} alt="profileImg" className="profileImg" />
          <img src={active} alt="profileActive" className="profileActive" />
        </div>
        <p className="chatBotHeaderText">Askimi Bot</p>
      </header>
      <section className="chatBotSection">
        <div className="rightChat">
          <img src={profile} alt="rightChatImg" className="rightChatImg" />
          <article className="rightChatText">
            <p>
              Hi there, @askamibot, can you suggest ways for me to improve my
              product design skills?
            </p>
          </article>
        </div>
        <div className="leftChat">
          <article className="leftChatText">
            <p>
              Certainly! Here are some suggestions for improving your product
              design skills:
            </p>
            <ol>
              <li>
                Learn design principles: Familiarize yourself with the basic
                principles of design, such as color theory, typography, layout,
                and composition.
              </li>
              <li>
                Study user experience (UX) design: UX design is an important
                aspect of product design, and involves creating products that
                are easy to
              </li>
            </ol>
          </article>
          <img src={profile} alt="leftChatImg" className="leftChatImg" />
        </div>
      </section>
      <footer className="chatBotFooter">
        <p>Message @askamibot</p>
        <img src={Reload} alt="reloader" />
      </footer>
    </div>
  );
};

export default ChatBot;
