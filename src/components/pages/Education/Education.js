import React from "react";
import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";

import nvidiaLogo from "../../../assets/CertificationImages/nvidia.png";
import gcpLogo from "../../../assets/CertificationImages/googleCloud.png";
import linkedinLogo from "../../../assets/CertificationImages/linkedin.png";
import udacityLogo from "../../../assets/CertificationImages/udacity.png";

import "./Education.css";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="education-section">
      <h2>{t("education.title")}</h2>
      <div className="education-certifications-container">
        <div className="education-items">
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree={t("education.uniandes.csDegree")}
            period="2021 - 2025"
            skills={[]}
            status="in-progress"
            progressPercentage={90}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree={t("education.uniandes.eeCoursework")}
            period="2021 - 2023"
            skills={[]}
            status="not-completed"
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_del_ITESM.svg/600px-Logo_del_ITESM.svg.png"
            institution="Tecnológico de Monterrey"
            degree={t("education.tec.exchangeProgram")}
            period="2023"
            skills={[]}
            status="completed"
          />
        </div>

        <div className="certifications-items">
          <CertificationItem
            logo={nvidiaLogo}
            title={t("education.certifications.llmCustomization")}
            issuer="NVIDIA"
            issueDate="2025"
            credentialUrl="#"
            validityPeriod="3 years"
          />
          <CertificationItem
            logo={udacityLogo}
            title={t("education.certifications.generativeAI")}
            issuer="Udacity"
            issueDate="2025"
            credentialUrl="#"
            validityPeriod="Lifetime"
          />
          <CertificationItem
            logo={linkedinLogo}
            title={t("education.certifications.promptEngineering")}
            issuer="LinkedIn Learning"
            issueDate="2024"
            credentialUrl="#"
            validityPeriod="Lifetime"
          />
          <CertificationItem
            logo={nvidiaLogo}
            title={t("education.certifications.deepLearning")}
            issuer="NVIDIA"
            issueDate="2024"
            credentialUrl="#"
            validityPeriod="3 years"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t("education.certifications.gcpDataMLAI")}
            issuer="Google Cloud"
            issueDate="2023"
            credentialUrl="#"
            validityPeriod="2 years"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t("education.certifications.gcpFundamentals")}
            issuer="Google Cloud Skills Boost"
            issueDate="2023"
            credentialUrl="#"
            validityPeriod="2 years"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
