import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPuzzlePiece,
  faUsers,
  faBolt,
  faCode,
  faDatabase,
  faRobot,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-content">
      <div className="soft-skills skill-card">
        <h3>{t("skills.softSkillsTitle")}</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLightbulb} className="skill-icon" />{" "}
            {t("skills.adaptability")}
          </li>
          <li>
            <FontAwesomeIcon icon={faBolt} className="skill-icon" />{" "}
            {t("skills.creativity")}
          </li>
          <li>
            <FontAwesomeIcon icon={faPuzzlePiece} className="skill-icon" />{" "}
            {t("skills.problemSolving")}
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} className="skill-icon" />{" "}
            {t("skills.teamCollaboration")}
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} className="skill-icon" />{" "}
            {t("skills.quickLearning")}
          </li>
        </ul>
      </div>
      <div className="hard-skills skill-card">
        <h3>{t("skills.technicalSkillsTitle")}</h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCode} className="skill-icon" />{" "}
            {t("skills.fullStackDevelopment")}
          </li>
          <li>
            <FontAwesomeIcon icon={faCogs} className="skill-icon" />{" "}
            {t("skills.apiDevelopment")}
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} className="skill-icon" />{" "}
            {t("skills.databaseManagement")}
          </li>
          <li>
            <FontAwesomeIcon icon={faRobot} className="skill-icon" />{" "}
            {t("skills.machineLearning")}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
