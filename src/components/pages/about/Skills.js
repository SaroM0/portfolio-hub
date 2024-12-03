import React from "react";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            <li>Adaptability</li>
            <li>Creativity</li>
            <li>Problem-Solving</li>
            <li>Team Collaboration</li>
            <li>Quick Learning</li>
          </ul>
        </div>
        <div className="hard-skills">
          <h3> Technical Skills </h3>
          <ul>
            <li>Full-Stack Development</li>
            <li>API Development & Microservices</li>
            <li>Database Management (MongoDB, SQL, and others)</li>
            <li>Machine Learning, NLP & Computer Vision</li>
            <li>Robotics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
