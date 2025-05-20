import React from "react";
import { useTranslation } from "react-i18next";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";

import nvidiaLogo from "../../../assets/CertificationImages/nvidia.png";
import gcpLogo from "../../../assets/CertificationImages/googleCloud.png";

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
            title={t(
              "education.certifications.deepLearning",
              "NVIDIA Fundamentals of Deep Learning"
            )}
            issuer="NVIDIA"
            issueDate={t(
              "education.certifications.issueDateFeb2024",
              "Feb 2024"
            )}
            credentialUrl="https://courses.nvidia.com/certificates/dd5a388c5b604cc5ad2482b2f7472edd/"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t(
              "education.certifications.gcpFundamentals",
              "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud"
            )}
            issuer="Google Cloud Skills Boost"
            issueDate={t(
              "education.certifications.issueDateApr2023",
              "Apr 2023"
            )}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3432343"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t(
              "education.certifications.gcpEssentials",
              "Google Cloud Essentials"
            )}
            issuer="Google Cloud Skills Boost"
            issueDate={t(
              "education.certifications.issueDateApr2023",
              "Apr 2023"
            )}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3417147"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t(
              "education.certifications.gcpInfrastructure",
              "Perform Foundational Infrastructure Tasks in Google Cloud"
            )}
            issuer="Google Cloud Skills Boost"
            issueDate={t(
              "education.certifications.issueDateApr2023",
              "Apr 2023"
            )}
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3427403"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t(
              "education.certifications.productivityAI",
              "Productivity Tricks with AI to Reimagine Your Workday and Career"
            )}
            issuer="LinkedIn Learning"
            issueDate={t("education.certifications.issueDate2024", "2024")}
            credentialUrl="https://www.linkedin.com/learning/certificates/your-certificate-url"
          />
          <CertificationItem
            logo={gcpLogo}
            title={t(
              "education.certifications.promptEngineering",
              "Prompt Engineering: Learn to Speak with Generative AI"
            )}
            issuer="LinkedIn Learning"
            issueDate={t("education.certifications.issueDate2024", "2024")}
            credentialUrl="https://www.linkedin.com/learning/certificates/your-certificate-url"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
