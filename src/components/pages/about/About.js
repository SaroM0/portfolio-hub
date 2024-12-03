import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";
import Interests from "./Interests";
import "./About.css";

function About() {
  return (
    <section className="about-me-container">
      <div className="about-me-left">
        <h2>About Me</h2>
        <Bio />
      </div>
      <div className="about-me-right">
        <Skills />
        <Interests />
      </div>
    </section>
  );
}

export default About;
