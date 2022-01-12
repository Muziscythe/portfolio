import React from "react";
import "./About.css";
import muzi_portPic from "../images/muzi_portPic.jpg";


function About() {
  return (
    <div className="about">
      <h4 className="section-title">ABOUT ME</h4>
      <div className="container-fluid">
        <div className="row">
          <div className="about__profile col-md-4">
            <div className="about__profileContent">
              <div className="profile__brief">
                <img src={muzi_portPic} alt="" className="profilePic" />
                <div className="about__profileSkills">
                  <img
                    src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
                    alt=""
                    className="react"
                  />
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.FZsbjqCKLJB62YasY8Y7qAHaIK&pid=Api&P=0&w=155&h=171"
                    alt=""
                    className="node"
                  />
                  <img
                    src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png"
                    alt=""
                    className="mongoDB"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about__detail container col-md-8">
            <div className="card">
              <div className="card-header">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
              </div>
              <div className="card-body mx-3 my-0">
                <br />
                <p>Hi :)</p>
                <br />
                <p>
                  {" "}
                  👋 I'm Muzamil. I'm working with MERN stack. Upcoming full
                  stack developer. Looking for platforms to express and upgrade
                  my skills and talents✌️. Wanna hire??? for fulltime or
                  freelance work. Kindly drop a 📩 to{" "}
                  <strong className="email">mushamil113@gmail.com</strong> or
                  meet me at my socials{" "}
                  <span className="socials">
                    <a href="#footer">👇</a>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
