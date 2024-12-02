import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
      <a
        href="mailto:s.rodriguezm2@uniandes.edu.co?subject=Contact&body=I%20am%20excited%20to%20collaborate%20with%20you.%20Let%27s%20create%20something%20amazing!"
        className="social-icon"
        aria-label="Send me an email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default SocialMedia;
