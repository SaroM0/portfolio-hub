import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faBookOpen,
  faUsers,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
  const { t } = useTranslation();

  return (
    <div className="interests-container interest-card">
      <h2>{t("interests.title")}</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={faProjectDiagram} className="skill-icon" />{" "}
          {t("interests.exploringProjects")}
        </li>
        <li>
          <FontAwesomeIcon icon={faBookOpen} className="skill-icon" />{" "}
          {t("interests.continuousLearning")}
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} className="skill-icon" />{" "}
          {t("interests.collaboratingTeams")}
        </li>
        <li>
          <FontAwesomeIcon icon={faMountain} className="skill-icon" />{" "}
          {t("interests.challengingMyself")}
        </li>
      </ul>
    </div>
  );
};

export default Interests;
