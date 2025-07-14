import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const CertificationItem = ({
  logo,
  title,
  issuer,
  issueDate,
  credentialUrl,
  validityPeriod,
}) => {
  const { t } = useTranslation();

  const getTooltipText = () => {
    if (validityPeriod) {
      return `Valid for ${validityPeriod}`;
    }
    return "No expiration date";
  };

  return (
    <div className="certification-item">
      <div className="certification-header">
        <img src={logo} alt={`${issuer} logo`} className="certification-logo" />
        <h4>{title}</h4>
      </div>
      <div className="certification-details">
        <p>
          {t("certifications.issuedBy")}: {issuer}
        </p>
        <p className="tooltip" data-tooltip={getTooltipText()}>
          {t("certifications.issueDate")}: {issueDate}
        </p>
        {credentialUrl && credentialUrl !== "#" && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="credential-link"
            aria-label={`View ${title} credential`}
          >
            <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
            {t("certifications.viewCredential")}
            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ fontSize: '0.8em' }} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationItem;
