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
    title: "Smart Templates Application",
    description: `
      This application detects similarities in user queries and suggests structured templates for related queries. It leverages the OpenAI API with embeddings for analysis and template generation, and uses a graph to visualize relationships between similar queries.
    `,
    github: "https://github.com/SaroM0/smart_templates",
  },
  {
    title: "SinfonIA Website",
    description: `
      A basic and rapid development project for SinfonIA's official website, created using Angular. This platform serves as a hub for showcasing the group's projects, team details, and news. The website played a supporting role in the RoboCup 2024 competition, providing visibility for ongoing research and acting as a bridge for those seeking to connect with the group.
    `,
    github: "https://github.com/SaroM0/sinfonia-website",
  },
  {
    title:
      "Pepper Robot Implementation in Unity for Virtual Reality Experiences",
    description: `
      Developed a virtual simulation of the Pepper robot within Unity by integrating the Robot Operating System (ROS). This project focuses on implementing advanced Virtual Reality (VR) and Augmented Reality (AR) technologies. By subscribing to robot topics through ROS, the simulation acts as a digital twin, paving the way for innovative applications in VR and AR. The project showcases the seamless fusion of robotics and immersive technologies.
    `,
    github: "https://github.com/tu_usuario/pepper-robot-vr", // Reemplaza con el enlace real si existe
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-uiux-4 text-uiux-2">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="container mx-auto px-6">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="project-header">
                <h3 className="text-uiux-3">{project.title}</h3>
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
