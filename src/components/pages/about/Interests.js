import React from "react";
import { useTranslation } from "react-i18next";

const Interests = () => {
  const { t } = useTranslation();

  return (
    <div className="interests-container">
      <h2>{t("interests.title")}</h2>
      <ul>
        <li>{t("interests.exploringProjects")}</li>
        <li>{t("interests.continuousLearning")}</li>
        <li>{t("interests.collaboratingTeams")}</li>
        <li>{t("interests.challengingMyself")}</li>
      </ul>
    </div>
  );
};

export default Interests;
