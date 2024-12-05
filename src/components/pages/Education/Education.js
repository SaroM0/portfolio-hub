import React, { useState } from "react";
import EducationItem from "./EducationItem";
import CertificationItem from "./CertificationItem";

import nvidiaLogo from "../../../assets/CertificationImages/nvidia.png";
import gcpLogo from "../../../assets/CertificationImages/googleCloud.png";

import "./Education.css";

import PdfPreview from "../../common/PdfPreview/PdfPreview";

const cvPdf = "/Rodriguez_Santiago_CV.pdf";

const Education = () => {
  const [showPdf, setShowPdf] = useState(false);

  const handleShowPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };

  return (
    <div className="education-section">
      <h2>Education & Certifications</h2>
      <div className="education-certifications-container">
        <div className="education-items">
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Bachelor's degree in Computer Science"
            period=""
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Advanced coursework in Electronic Engineering"
            period=""
            skills={[]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_del_ITESM.svg/600px-Logo_del_ITESM.svg.png"
            institution="Tecnológico de Monterrey"
            degree="Exchange Program in Data Analytics and Artificial Intelligence"
            period=""
            skills={[]}
          />
        </div>

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
      <div className="view-cv-button-container">
        <button onClick={handleShowPdf} className="view-cv-button">
          View My Full CV
        </button>
      </div>

      {showPdf && <PdfPreview pdfUrl={cvPdf} onClose={handleClosePdf} />}
    </div>
  );
};

export default Education;
