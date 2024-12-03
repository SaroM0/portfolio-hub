import React from "react";
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

const Footer = () => {
  const testimonials = [
    {
      photo:
        "https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp",
      name: "Persona ejemplo 1",
      position: "Cargo",
      company: "Compañía",
      comment: "Texto de ejemplo",
    },
    {
      photo:
        "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-260nw-2460702995.jpg",
      name: "Persona ejemplo 2",
      position: "Cargo",
      company: "Compañía",
      comment: "Texto de ejemplo",
    },
    {
      photo:
        "https://www.shutterstock.com/image-photo/handsome-happy-african-american-bearded-260nw-2460702995.jpg",
      name: "Persona ejemplo 3",
      position: "Cargo",
      company: "Compañía",
      comment: "Texto de ejemplo",
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
    <footer className="footer bg-uiux-4 text-uiux-2">
      <div className="footer-left">
        <div className="availability-message">
          <h3>Available for select freelance opportunities</h3>
          <p>
            Have an exciting project idea? I'm eager to collaborate and bring it
            to life. Contact me!
          </p>
        </div>
        <div className="contact-message">
          <h3>Contact</h3>
        </div>
        <p>Email: s.rodriguezm2@uniandes.edu.co</p>
        <p>Phone: +57 321 286 0273</p>
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
      <div className="footer-right">
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
    </footer>
  );
};

export default Footer;
