import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Anuj Kushwaha</span>
          </h1>
          <p>
            I belong to Jhansi, Uttarpradesh, India. I am a final year student
            pursuing a Bachelor of Technology in Chemical engineering at NIT
            Durgapur. Additionally, I did internship as a web developer
            at InternPe. Apart from that, some other activities that I love to
            do! Playing Chess, Listening songs and Traveling.
          </p>
          <CallToAction text="Contact me" 
          action={()=>scrollToSection("contact")}/>
        </div>
        <div className="right-col">
          <img src={girl} alt="JS Dev Hindi" />

          <div className="highlights horizontal">
            <div className="icon">
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>

          <div className="highlights verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
