import React from "react";

const CertificationItem = ({
  logo,
  title,
  issuer,
  issueDate,
  credentialUrl,
}) => {
  return (
    <div className="certification-item">
      <div className="certification-header">
        <img src={logo} alt={`${issuer} logo`} className="certification-logo" />
        <h4>{title}</h4>
      </div>
      <div className="certification-details">
        <p>Issued by: {issuer}</p>
        <p>Issue date: {issueDate}</p>
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="credential-link"
        ></a>
      </div>
    </div>
  );
};

export default CertificationItem;
