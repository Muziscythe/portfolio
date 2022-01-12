import React from "react";
import "./Skills.css";
import Skill from "./Skill";


function Skills() {
  return (
    <div className="skills">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills__set container">
        <ul className="list-inline mx-auto">
          <Skill
            image="https://clipground.com/images/html5-logo-2.png"
            title="HTML 5"
          />
          <Skill
            image="https://www.logolynx.com/images/logolynx/s_0d/0d35ef6c8d4fdaf0590228404dc6448b.png"
            title="CSS 3"
          />
          <Skill
            image="https://codereviewvideos.com/blog/wp-content/uploads/2016/04/es6-logo.png"
            title="Javascript"
          />
          <Skill
            image="https://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png"
            title="Bootstrap"
          />
          <Skill
            image="https://www.w3schools.com/whatis/img_jquery.png"
            title="JQuery"
          />
          <Skill
            image="https://tse2.mm.bing.net/th?id=OIP.FZsbjqCKLJB62YasY8Y7qAHaIK&pid=Api&P=0&w=155&h=171"
            title="Nodejs"
          />
          <Skill
            image="https://www.pnglib.com/wp-content/uploads/2020/01/git-logo_5e2ed7581b993.png"
            title="Git"
          />
          <Skill
            image="https://www.corsinvest.it/wp-content/uploads/2019/10/mysql-icon-3.png"
            title="MySQL"
          />
          <Skill
            image="http://static.tumblr.com/lbtm3t2/8PAn0kziu/mongodb-logo.png"
            title="MongoDB"
          />
          <Skill
            image="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
            title="React"
          />
          <Skill
            image="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
            title="React-Native"
          />
        </ul>
      </div>
    </div>
  );
}

export default Skills;
