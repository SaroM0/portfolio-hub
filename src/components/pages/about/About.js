import React from "react";
import { useTranslation } from "react-i18next";
import Bio from "./Bio";
import Skills from "./Skills";
import Interests from "./Interests";
import "./About.css";

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-me-container">
      <div className="about-me-left">
        <h2 className="about-title">{t("about.title")}</h2>
        <Bio />
        <div className="download-cv">
          <a
            href="/Rodriguez_Santiago_CV.pdf"
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            {t("about.downloadCV")}
          </a>
        </div>
      </div>
      <div className="about-me-right">
        <Skills />
        <Interests />
      </div>
    </section>
  );
}

export default About;
