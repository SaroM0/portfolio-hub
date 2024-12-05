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
        <h2>{t("about.title")}</h2>
        <Bio />
      </div>
      <div className="about-me-right">
        <Skills />
        <Interests />
      </div>
    </section>
  );
}

export default About;
