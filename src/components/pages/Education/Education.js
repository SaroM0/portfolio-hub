import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";

import nvidiaLogo from "../../../assets/CertificationImages/nvidia.png";
import gcpLogo from "../../../assets/CertificationImages/googleCloud.png";

import "./Education.css";

import PdfPreview from "../../common/PdfPreview/PdfPreview";

const cvPdf = "/Rodriguez_Santiago_CV.pdf";

const Education = () => {
  const [showPdf, setShowPdf] = useState(false);
  const { t } = useTranslation();

  const handleShowPdf = () => {
    window.open(cvPdf, "_blank");
  };

  return (
    <div className="education-section">
      <h2>{t("education.title")}</h2>
      <div className="education-certifications-container">
        <div className="education-items">
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree={t("education.uniandes.csDegree")}
            period=""
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree={t("education.uniandes.eeCoursework")}
            period=""
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_del_ITESM.svg/600px-Logo_del_ITESM.svg.png"
            institution="Tecnológico de Monterrey"
            degree={t("education.tec.exchangeProgram")}
            period=""
            skills={[]}
          />
        </div>

        <div className="certifications-items">
          <CertificationItem
            logo={nvidiaLogo}
            title={t("education.certifications.deepLearning")}
            issuer="NVIDIA"
            issueDate={t("education.certifications.issueDateFeb2024")}
            credentialUrl="https://courses.nvidia.com/certificates/dd5a388c5b604cc5ad2482b2f7472edd/"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t("education.certifications.gcpFundamentals")}
            issuer="Google Cloud Skills Boost"
            issueDate={t("education.certifications.issueDateApr2023")}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3417147"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t("education.certifications.gcpDataMLAI")}
            issuer="Google Cloud Skills Boost"
            issueDate={t("education.certifications.issueDateApr2023")}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3432343"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t("education.certifications.gcpInfrastructure")}
            issuer="Google Cloud Skills Boost"
            issueDate={t("education.certifications.issueDateApr2023")}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3427403"
          />
        </div>
      </div>
      <div className="view-cv-button-container">
        <button onClick={handleShowPdf} className="view-cv-button">
          {t("education.viewCvButton")}
        </button>
      </div>
    </div>
  );
};

export default Education;
