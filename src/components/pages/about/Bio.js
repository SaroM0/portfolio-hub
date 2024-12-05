import React from "react";
import { useTranslation } from "react-i18next";

const Bio = () => {
  const { t } = useTranslation();

  return (
    <div className="bio-container">
      <div className="bio-content">
        <p>{t("bio.paragraph1")}</p>
        <p>{t("bio.paragraph2")}</p>
        <p>{t("bio.paragraph3")}</p>
      </div>
    </div>
  );
};

export default Bio;
