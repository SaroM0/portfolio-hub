import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="soft-skills">
          <h3>{t("skills.softSkillsTitle")}</h3>
          <ul>
            <li>{t("skills.adaptability")}</li>
            <li>{t("skills.creativity")}</li>
            <li>{t("skills.problemSolving")}</li>
            <li>{t("skills.teamCollaboration")}</li>
            <li>{t("skills.quickLearning")}</li>
          </ul>
        </div>
        <div className="hard-skills">
          <h3>{t("skills.technicalSkillsTitle")}</h3>
          <ul>
            <li>{t("skills.fullStackDevelopment")}</li>
            <li>{t("skills.apiDevelopment")}</li>
            <li>{t("skills.databaseManagement")}</li>
            <li>{t("skills.machineLearning")}</li>
            <li>{t("skills.robotics")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
