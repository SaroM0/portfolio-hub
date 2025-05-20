import React from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

import straicoLogo from "../../../assets/ExperienceImages/straico.jpeg";
import sinfoniaLogo from "../../../assets/ExperienceImages/sinfonia.jpeg";
import electronicaLogo from "../../../assets/ExperienceImages/Electronic.jpeg";
import oasisLogo from "../../../assets/ExperienceImages/Oasis.jpeg";
import hopLogo from "../../../assets/ExperienceImages/hop.png";
const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      date: t("experience.straico.date"),
      title: t("experience.straico.title"),
      company: t("experience.straico.company"),
      location: t("experience.straico.location"),
      description: t("experience.straico.description", { returnObjects: true }),
      icon: straicoLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
    {
      date: t("experience.hop.date"),
      title: t("experience.hop.title"),
      company: t("experience.hop.company"),
      location: t("experience.hop.location"),
      description: t("experience.hop.description", { returnObjects: true }),
      icon: hopLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
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
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
    {
      date: t("experience.oasis.date"),
      title: t("experience.oasis.title"),
      company: t("experience.oasis.company"),
      location: t("experience.oasis.location"),
      description: t("experience.oasis.description", { returnObjects: true }),
      icon: oasisLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
    {
      date: t("experience.ta1.date"),
      title: t("experience.ta1.title"),
      company: t("experience.ta1.company"),
      location: t("experience.ta1.location"),
      description: t("experience.ta1.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
    {
      date: t("experience.ta2.date"),
      title: t("experience.ta2.title"),
      company: t("experience.ta2.company"),
      location: t("experience.ta2.location"),
      description: t("experience.ta2.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
    {
      date: t("experience.ta3.date"),
      title: t("experience.ta3.title"),
      company: t("experience.ta3.company"),
      location: t("experience.ta3.location"),
      description: t("experience.ta3.description", { returnObjects: true }),
      icon: electronicaLogo,
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
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
      iconStyle: {
        background: "var(--clr-accent)",
        color: "var(--clr-text-primary)",
      },
    },
  ];

  return (
    <section id="experience" className="py-20 bg-clr-bg text-clr-text-primary">
      <h2>{t("experience.title")}</h2>

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
              contentStyle={{
                background: "var(--clr-bg)",
                color: "var(--clr-text-primary)",
              }}
              contentArrowStyle={{ borderRight: "7px solid var(--clr-bg)" }}
            >
              <h3 className="vertical-timeline-element-title text-clr-accent">
                {exp.title} at {exp.company}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-clr-accent-subtle">
                {exp.location}
              </h4>
              <ul className="list-disc pl-5">
                {(Array.isArray(exp.description)
                  ? exp.description
                  : [exp.description]
                ).map((desc, i) => (
                  <li key={i} className="text-clr-text-primary">
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
