import React from "react";
import "./Experience.css";
import { Timeline, TimelineItem } from "react-timelinev2";

function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="experience__details">
        <Timeline>
          <TimelineItem
            side="right"
            title="Full Stack Dev"
            date="2021/08 - current"
          >
            <h4 className="experience__company">SELF</h4>
            <p className="experience__skills">MERN stack, firebase</p>
          </TimelineItem>
          <TimelineItem side="left" title="PAT" date="2021/07 - current">
            <h4 className="experience__company">Cognizant</h4>
            <p className="experience__skills">
              Performance Testing, Jmeter, Blazemeter, ToadOracle, Postman, CA
              workstation, Putty, WinSCP
            </p>
          </TimelineItem>
          <TimelineItem side="right" title="Intern" date="2021/01 - 2021/05">
            <h4 className="experience__company">Cognizant</h4>
            <p className="experience__skills">
              Performance Testing,Load runner
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
