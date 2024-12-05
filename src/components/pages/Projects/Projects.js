import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.imagePlatform.title"),
      description: t("projects.imagePlatform.description"),
      github: "https://github.com/SaroM0/image_generator",
    },
    {
      title: t("projects.smartTemplates.title"),
      description: t("projects.smartTemplates.description"),
      github: "https://github.com/SaroM0/smart_templates",
    },
    {
      title: t("projects.sinfoniaWebsite.title"),
      description: t("projects.sinfoniaWebsite.description"),
      github: "https://github.com/SaroM0/sinfonia-website",
    },
    {
      title: t("projects.pepperRobot.title"),
      description: t("projects.pepperRobot.description"),
      github: "https://github.com/SaroM0/pepper-robot-vr",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-uiux-4 text-uiux-2">
      <h2 className="projects-title">{t("projects.title")}</h2>
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
};

export default Projects;
