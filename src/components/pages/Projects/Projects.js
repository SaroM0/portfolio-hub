import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";

const projects = [
  {
    title: "AI-Driven Image Generation and Editing Platform",
    description:
      "An advanced application leveraging OpenAI's Function Calling and Ideogram API to enable intelligent image generation, specialized editing, and detailed descriptions. The platform features context-aware processing, automated mask generation, and seamless integration for scalable and efficient AI-driven image workflows.",
    github: "https://github.com/SaroM0/image_generator",
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
      <h2 className="projects-title">Projects</h2>
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
