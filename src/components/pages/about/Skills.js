import React from "react";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="hard-skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>Full-Stack Development</li>
            <li>API Development & Microservices</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>Machine Learning & NLP</li>
            <li>Robotics (ROS, MoveIt)</li>
          </ul>
        </div>
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
      </div>
    </div>
  );
};

export default Skills;
