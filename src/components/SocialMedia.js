import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.linkedin.com/in/santiago-rodriguez-mora-5b2a17267"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.instagram.com/sa.rdz/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        href="https://github.com/SaroM0"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}

export default SocialMedia;
