import React from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import straicoLogo from "../../../assets/ExperienceImages/straico.jpeg";
import sinfoniaLogo from "../../../assets/ExperienceImages/sinfonia.jpeg";
import electronicaLogo from "../../../assets/ExperienceImages/Electronic.jpeg";
import oasisLogo from "../../../assets/ExperienceImages/Oasis.jpeg";

const Experience = () => {
  const { t } = useTranslation();

  // Mover `experiences` dentro del cuerpo del componente
  const experiences = [
    {
      date: t("experience.straico.date"),
      title: t("experience.straico.title"),
      company: t("experience.straico.company"),
      location: t("experience.straico.location"),
      description: t("experience.straico.description", { returnObjects: true }),
      icon: straicoLogo,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      date: t("experience.sinfonia.date"),
      title: t("experience.sinfonia.title"),
      company: t("experience.sinfonia.company"),
      location: t("experience.sinfonia.location"),
      description: t("experience.sinfonia.description", {
        returnObjects: true,
      }),
      icon: sinfoniaLogo,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      date: t("experience.oasis.date"),
      title: t("experience.oasis.title"),
      company: t("experience.oasis.company"),
      location: t("experience.oasis.location"),
      description: t("experience.oasis.description", { returnObjects: true }),
      icon: oasisLogo,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
    {
      date: t("experience.ta1.date"),
      title: t("experience.ta1.title"),
      company: t("experience.ta1.company"),
      location: t("experience.ta1.location"),
      description: t("experience.ta1.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      date: t("experience.ta2.date"),
      title: t("experience.ta2.title"),
      company: t("experience.ta2.company"),
      location: t("experience.ta2.location"),
      description: t("experience.ta2.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      date: t("experience.ta3.date"),
      title: t("experience.ta3.title"),
      company: t("experience.ta3.company"),
      location: t("experience.ta3.location"),
      description: t("experience.ta3.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
    },
    {
      date: t("experience.frontend.date"),
      title: t("experience.frontend.title"),
      company: t("experience.frontend.company"),
      location: t("experience.frontend.location"),
      description: t("experience.frontend.description", {
        returnObjects: true,
      }),
      icon: electronicaLogo,
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    },
  ];

  return (
    <section id="experience" className="py-20 bg-uiux-4 text-uiux-2">
      <h2 className="font-bold">{t("experience.title")}</h2>

      <div className="container mx-auto px-4">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              icon={
                <img
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  style={{ width: "100%", height: "100%", borderRadius: "50%" }}
                />
              }
              iconStyle={exp.iconStyle}
              contentStyle={{ background: "#121212", color: "#e0e0e0" }}
              contentArrowStyle={{ borderRight: "7px solid #121212" }}
            >
              <h3 className="vertical-timeline-element-title text-uiux-1">
                {exp.title} at {exp.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-uiux-3">
                {exp.location}
              </h4>
              <ul className="list-disc pl-5">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-uiux-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
