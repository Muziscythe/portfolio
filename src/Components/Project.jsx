import React from "react";
import "./Project.css";

function Project({ image, title, applink }) {
  return (
    <div className="project col-sm-12 col-md-6 col-lg-4">
      <a href={applink}>
        <div className="project__overview">
          <img src={image} alt="" className="project__image" />
          <h4 className="project__title">{title}</h4>
        </div>
      </a>
    </div>
  );
}

export default Project;
