import React from "react";
import line from "../public/line.svg";

function MySkills() {
  return (
    <div>
      <h1>My Skills</h1>
      <div>
        <div>
          <h1>Languages</h1>
          <h2>Front End</h2>
          <span>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>SCSS</li>
              <li>XML</li>
            </ul>
          </span>
          <h2>Back end</h2>
          <span>
            <ul>
              <li>SQL</li>
              <li>HANA</li>
              <li>Python</li>
              <li>SCSS</li>
              <li>XML</li>
            </ul>
          </span>
        </div>
        <img src="line.svg" alt="" />
        <div>
          <h1>Fundementals</h1>
          <h2>Technological</h2>
          <span>
            <ul>
              <li>Modern Design</li>
              <li>Clean Implementation</li>
              <li>Fast & Efficient Load Times</li>
            </ul>
          </span>
          <h2>Soft skills</h2>
          <span>
            <ul>
              <li>Great Communicator</li>
              <li>Honest and Upfront</li>
              <li>Puntual and Precise</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
