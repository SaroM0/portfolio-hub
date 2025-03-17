import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import Testimonial from "./Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arturoImage from "../../../assets/ReferencesImages/arturo.jpeg";

const Footer = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      photo: arturoImage,
      name: t("footer.testimonials.testimonial1.name"),
      position: t("footer.testimonials.testimonial1.position"),
      company: t("footer.testimonials.testimonial1.company"),
      comment: t("footer.testimonials.testimonial1.comment"),
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <footer>
      <div className="footer bg-uiux-4 text-uiux-2">
        <div className="footer-section availability-message">
          <h3>{t("footer.availability.title")}</h3>
          <p>{t("footer.availability.description")}</p>
        </div>
        <div className="footer-section footer-right">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={false}
            arrows={false}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Carousel>
        </div>
        <div className="footer-section contact-info">
          <h3>{t("footer.contact.title")}</h3>
          <p>{t("footer.contact.email")}: s.rodriguezm2@uniandes.edu.co</p>
          <p>{t("footer.contact.phone")}: +57 321 286 0273</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/santiago-rodriguez-mora-5b2a17267"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/sa.rdz/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/SaroM0"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:s.rodriguezm2@uniandes.edu.co?subject=Contact&body=I%20am%20excited%20to%20collaborate%20with%20you.%20Let's%20create%20something%20amazing!"
              className="social-icon"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://wa.me/573212860273"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-section copyright-section text-center">
        <p className="text-sm text-gray-500">
          {t("footer.copyright")} Santiago Rodriguez {t("footer.technologies")}
        </p>
        <p className="text-xs text-gray-400 mt-2">
          © 2024 Santiago Rodriguez. {t("footer.rightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
