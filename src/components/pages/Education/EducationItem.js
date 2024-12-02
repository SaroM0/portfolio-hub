import React from "react";

const EducationItem = ({ logo, institution, degree, period, skills }) => {
  return (
    <div className="education-item">
      <div className="education-header">
        <img
          src={logo}
          alt={`${institution} logo`}
          className="institution-logo"
        />
        <h3> {institution}</h3>
      </div>
      <div className="education-details">
        <p>{degree}</p>
        <p>{period}</p>
        {skills.length > 0 && (
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
