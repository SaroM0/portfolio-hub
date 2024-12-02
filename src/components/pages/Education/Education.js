import React from "react";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";
import "./Education.css";

import nvidiaLogo from "../../../assets/CertificationImages/nvidia.png";
import gcpLogo from "../../../assets/CertificationImages/googleCloud.png";

const Education = () => {
  return (
    <div className="education-section">
      <h2>Education & Certifications</h2>
      <div className="education-certifications-container">
        {/* Sección de Educación */}
        <div className="education-items">
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Bachelor's degree in Computer Science"
            period="Aug 2021 - 2025"
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Advanced coursework in Electronic Engineering"
            period="2021 - 2025"
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_del_ITESM.svg/600px-Logo_del_ITESM.svg.png"
            institution="Tecnológico de Monterrey"
            degree="Exchange Program in Data Analytics and Artificial Intelligence"
            period="Jul 2024 - Dec 2024"
            skills={[]}
          />
        </div>

        {/* Sección de Certificaciones */}
        <div className="certifications-items">
          <CertificationItem
            logo={nvidiaLogo}
            title="Fundamentals of Deep Learning"
            issuer="NVIDIA"
            issueDate="Feb 2024"
            credentialUrl="https://courses.nvidia.com/certificates/dd5a388c5b604cc5ad2482b2f7472edd/"
          />
          <CertificationItem
            logo={gcpLogo}
            title="Google Cloud Computing Foundations: Cloud Computing Fundamentals"
            issuer="Google Cloud Skills Boost"
            issueDate="Apr 2023"
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3417147"
          />
          <CertificationItem
            logo={gcpLogo}
            title="Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud"
            issuer="Google Cloud Skills Boost"
            issueDate="Apr 2023"
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3432343"
          />
          <CertificationItem
            logo={gcpLogo}
            title="Google Cloud Computing Foundations: Infrastructure in Google Cloud"
            issuer="Google Cloud Skills Boost"
            issueDate="Apr 2023"
            credentialUrl="https://www.cloudskillsboost.google/public_profiles/3427403"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
