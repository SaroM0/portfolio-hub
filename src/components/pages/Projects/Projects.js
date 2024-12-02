import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";

const projects = [
  {
    title: "Full-Stack E-commerce Platform",
    description:
      "Scalable e-commerce app built with React, Node.js, and MongoDB.",
    github: "https://github.com/yourusername/project1",
  },
  {
    title: "Mobile Expense Tracker",
    description:
      "Cross-platform app for tracking expenses using Flutter and Firebase.",
    github: "https://github.com/yourusername/project2",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects and skills, built with React.",
    github: "https://github.com/yourusername/project3",
  },
  {
    title: "Weather App",
    description: "Weather forecasting app using React and OpenWeatherMap API.",
    github: "https://github.com/yourusername/project4",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-uiux-4 text-uiux-2">
      <h2>Projects</h2>
      <div className="container mx-auto px-6">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="text-uiux-5">{project.title}</h3>
              </div>
              <div className="project-details">
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
