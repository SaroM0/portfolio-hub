import React from "react";

const EducationItem = ({ 
  logo, 
  institution, 
  degree, 
  period, 
  skills, 
  status = "completed",
  progressPercentage 
}) => {
  const getProgressBadge = () => {
    if (status === "completed") {
      return <span className="progress-badge completed">Completed</span>;
    } else if (status === "in-progress") {
      return <span className="progress-badge in-progress">{progressPercentage}% Complete</span>;
    } else if (status === "expected") {
      return <span className="progress-badge expected">Expected</span>;
    } else if (status === "not-completed") {
      return <span className="progress-badge not-completed">Not Completed</span>;
    }
    return null;
  };

  return (
    <div className="education-item">
      <div className="education-header">
        <img
          src={logo}
          alt={`${institution} logo`}
          className="institution-logo"
        />
        <h3>{institution}</h3>
      </div>
      <div className="education-details">
        <p>{degree}</p>
        <p>
          {period}
          {getProgressBadge()}
        </p>
        {skills && skills.length > 0 && (
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
