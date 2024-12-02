import React from "react";
import EducationItem from "./EducationItem";
import Certifications from "./Certifications";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2>Education & Certifications</h2>
      <div className="education-container">
        {/* Sección de Educación a la izquierda */}
        <div className="education-items">
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Bachelor's degree in Computer Science"
            period="Aug 2021 - 2025"
            skills={[
              "Algorithms",
              "Web Development",
              "Artificial Intelligence (AI)",
            ]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/University_of_Los_Andes_logo.svg/220px-University_of_Los_Andes_logo.svg.png"
            institution="Universidad de Los Andes"
            degree="Advanced coursework in Electronic Engineering"
            period="2021 - 2025"
            skills={["Robotics", "Machine Learning", "Circuit Design"]}
          />
          <EducationItem
            logo="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Logo_del_ITESM.svg/600px-Logo_del_ITESM.svg.png"
            institution="Tecnológico de Monterrey"
            degree="Exchange Program in Data Analytics and Artificial Intelligence"
            period="Jul 2024 - Dec 2024"
            skills={[]}
          />
        </div>

        {/* Carrusel de Certificaciones abajo */}
        <div className="certifications-container">
          <h3>Certifications</h3>
        </div>
      </div>
    </div>
  );
};

export default Education;
