import React from "react";
import line from "../public/line.svg";

function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <img src="line.svg" alt="" />
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>send</button>
      </div>
      <img src="line.svg" alt="" />
    </div>
  );
}

export default Contact;
