import React from "react";
import "./Skill.css";

function Skill({ image, title }) {
  return (
    <li className="list-inline-item mx-3 my-2">
      <span>
        <div className="skill">
          <img src={image} alt="" className="skill__image" />
          <h4 className="skill__title">{title}</h4>
        </div>
      </span>
    </li>
  );
}

export default Skill;
