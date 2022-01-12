import React from "react";
import "./Intro.css";

import { Typewriter } from "react-simple-typewriter";

function Intro() {
  return (
    <div className="intro">
      <div className="intro__git">
        <a href="https://github.com/Muziscythe">
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-circle/512/circle-github-512.png"
            alt=""
            className="intro__github"
          />
        </a>
      </div>
      <div className="intro__topleft"></div>
      <div className="intro__content">
        <div className="intro__detail mx-auto">
          <img
            src="https://cdn1.iconfinder.com/data/icons/laptop-13/100/laptop28-512.png"
            alt=""
            className=""
          />
          <h2>Muzamil</h2>
          <p>
            <Typewriter
              words={["REACT-DEVELOPER", "MERN STACK", "FULL-STACK-DEVELOPER"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
