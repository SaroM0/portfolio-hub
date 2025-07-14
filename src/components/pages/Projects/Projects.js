import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";

const projects = [
  {
    title: "Robust Prompt-to-SQL Generation Framework",
    year: "In Progress",
    summary:
      "5,000 real-world business-domain queries with annotated SQL. GPT-3.5-turbo & LangGraph-based RAG pipeline. Achieved 95% exact-match accuracy on a 1,000-sample test set, reducing hallucination rate by 45%.",
    tech: ["Python", "GPT-3.5-turbo", "LangGraph", "RAG", "SQL"],
    github: "https://github.com/SaroM0/prompt-to-sql-framework",
  },
  {
    title: "Customizable AI Agents Platform",
    year: 2024,
    summary:
      "ML-driven agent orchestration system with modular pipelines for fine-tuning and deploying LLMs. Optimized for high-throughput, low-latency inference.",
    tech: ["Python", "FastAPI", "Node.js", "AWS", "LLM"],
    github: "https://github.com/SaroM0/ai-agents-platform",
  },
  {
    title: "AI-Driven Image Generation & Editing",
    year: 2024,
    summary:
      "Integrated OpenAI Function Calling and Ideogram API for automated, high-fidelity image generation and editing. Deployed as a scalable API.",
    tech: ["Python", "OpenAI API", "AWS Lambda", "S3"],
    github: "https://github.com/SaroM0/image_generator",
  },
  {
    title: "SinfonIA Robotics Platform",
    year: "2023-2024",
    summary:
      "Speech recognition, computer vision, and predictive analytics for Pepper robots. Led team to 1st place at RoboCup @Home 2024.",
    tech: ["Python", "ROS", "MoveIt", "Angular", "Pepper Robot"],
    github: "https://github.com/SaroM0/sinfonia-website",
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-clr-bg text-clr-text-primary">
      <h2 className="projects-title">{t("projects.title")}</h2>
      <div className="container mx-auto px-6">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item modern-project-card">
              <div className="project-header">
                <h3 className="text-clr-accent-subtle project-title">
                  {project.title}
                </h3>
                <span className="project-year">{project.year}</span>
              </div>
              <div className="project-details">
                <p className="project-summary">{project.summary}</p>
                <div className="tech-badges">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label="GitHub Repository"
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
};

export default Projects;
