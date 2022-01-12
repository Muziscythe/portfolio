import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects">
      <h4 className="section-title">PROJECTS</h4>
      <div className="projects__details container">
        <div className="row">
          <Project
            title="Netflix Clone"
            image="https://media.wired.com/photos/5926a8bfaf95806129f5034c/master/w_2560%2Cc_limit/Netflix.jpg"
            applink="https://netflix-clone-muzi.herokuapp.com/"
          />
          <Project
            title="Amazon Clone"
            image="http://www.amanida.com/wp-content/uploads/2018/04/amazon-logo-a-smile-black.png"
            applink="https://dry-forest-90438.herokuapp.com/"
          />
          <Project
            title="Spotify Clone"
            image="https://www.macworld.com/wp-content/uploads/2021/03/spotify-logo-100779042-orig-3.jpg"
            applink="https://spotify-clone-muzi.herokuapp.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
