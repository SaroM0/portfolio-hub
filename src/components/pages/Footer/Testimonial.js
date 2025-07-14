// components/Footer/Testimonial.jsx
import React from "react";
import "./Footer.css";

const Testimonial = ({ photo, name, position, company, comment }) => (
  <div className="testimonial">
    <img src={photo} alt={name} className="testimonial-photo" />
    <div>
      <p className="testimonial-comment">“{comment}”</p>
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-position">
        {position} — {company}
      </p>
    </div>
  </div>
);

export default Testimonial;
