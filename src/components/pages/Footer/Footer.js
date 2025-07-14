// components/Footer/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Footer.css";
import Testimonial from "./Testimonial";
import arturoImage from "../../../assets/ReferencesImages/arturo.jpeg";

/* --- Social networks --- */
const socials = [
  { href: "https://www.linkedin.com/in/santiago-rodriguez-5b2a17267", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/sa.rdz/",                         icon: faInstagram, label: "Instagram" },
  { href: "https://github.com/SaroM0",                                 icon: faGithub,   label: "GitHub" },
  { href: "https://santiagorm.dev",                                    icon: faGlobe,    label: "Website" },
  { href: "mailto:rodriguezmorasantiago@gmail.com",                    icon: faEnvelope, label: "Email" },
  { href: "https://wa.me/573212860273",                                icon: faWhatsapp, label: "WhatsApp" },
];

const Footer = () => {
  const { t } = useTranslation();

  /* --- Testimonial data --- */
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
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet:  { breakpoint: { max: 1024, min: 464 },  items: 1 },
    mobile:  { breakpoint: { max: 464,  min: 0 },    items: 1 },
  };

  return (
    <footer>
      {/* ───────── ZONA SUPERIOR ───────── */}
      <div className="footer-top">
        {/* Testimonial */}
        <div className="testimonial-carousel-wrapper">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4500}
            keyBoardControl
            showDots={false}
            arrows={false}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {testimonials.map((tst, idx) => (
              <Testimonial key={idx} {...tst} />
            ))}
          </Carousel>
        </div>

        {/* Contacto + redes */}
        <div className="contact">
          <h3>{t("footer.contact.title")}</h3>
          <ul className="social-links">
            {socials.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Frase distintiva */}
        <p className="motto">
          {t("footer.motto")}
        </p>

        {/* Botón “back to top” */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>

      {/* ───────── ZONA INFERIOR ───────── */}
      <div className="footer-bottom">
        <p className="text-sm">
          {t("footer.copyright")} Santiago {t("footer.technologies")}
        </p>
        <p className="text-xs">
          © {new Date().getFullYear()} Santiago Rodríguez. {t("footer.rightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
