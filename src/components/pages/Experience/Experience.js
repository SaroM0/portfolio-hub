import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import straicoLogo from "../../../assets/ExperienceImages/straico.jpeg";
import sinfoniaLogo from "../../../assets/ExperienceImages/sinfonia.jpeg";
import electronicaLogo from "../../../assets/ExperienceImages/Electronic.jpeg";
import oasisLogo from "../../../assets/ExperienceImages/Oasis.jpeg";

const experiences = [
  {
    date: "May 2024 - Present",
    title: "Software Developer",
    company: "Straico",
    location: "Cheyenne, Wyoming, United States (Remote)",
    description: [
      "API Development: Designing and implementing APIs to facilitate seamless communication between AI models and web applications.",
      "Front-End Development: Building user-friendly interfaces using React, ensuring an intuitive user experience.",
      "Back-End Development: Developing robust server-side logic to support AI functionalities and data processing.",
      "AI Integration: Implementing large language models (LLMs), natural language processing (NLP), retrieval-augmented generation (RAG), and embeddings to enhance application capabilities.",
      "Microservices Deployment: Deploying microservices architectures to improve scalability and maintainability.",
    ],
    icon: straicoLogo,
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  },
  {
    date: "Apr 2023 - Present",
    title: "Manipulation Research Head",
    company: "SinfonIA Uniandes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Leading a team of talented engineering students to enable Pepper robots to interact effectively with their surroundings.",
      "Leveraging tools such as ROS and MoveIt to develop cutting-edge solutions that enhance robotic functionality and performance in dynamic environments.",
    ],
    icon: sinfoniaLogo,
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  },
  {
    date: "Feb 2024 - Jun 2024",
    title: "XR Application Developer",
    company: "Oasis",
    location: "Bogotá, Capital District, Colombia",
    description: [],
    icon: oasisLogo,
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  },
  {
    date: "Aug 2022 - Dec 2023",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
      "Supported projects aligned with the Sustainable Development Goals (SDGs), assisting students in problem definition, methodology, and development of sustainable projects.",
    ],
    icon: electronicaLogo,
    iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
  },
  {
    date: "Jun 2023 - Jun 2023",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Supported course instructors in workshops, labs, and classes.",
      "Facilitated coordination of equipment and led installation and maintenance of software tools, including Ubuntu, ROS, PyTorch, Nvidia CUDA, TensorFlow, inverse kinematics libraries, CNN, and MoveIt.",
    ],
    icon: electronicaLogo,
    iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
  },
  {
    date: "Jan 2022 - Jun 2022",
    title: "Teaching Assistant",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia (On-site)",
    description: [
      "Assisted course instructors in workshops, labs, and classes by guiding students, addressing inquiries, reviewing assignments, managing evaluations, transcribing notes, and coordinating materials.",
      "Collaborated with diverse professors across various fields, engaging in technologies encompassing IoT comprehensively.",
    ],
    icon: electronicaLogo,
    iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
  },
  {
    date: "Jan 2022 - Jun 2022",
    title: "Frontend Developer",
    company: "Universidad de Los Andes",
    location: "Bogotá, Capital District, Colombia",
    description: [
      "Oversaw management and updates of the department’s website.",
      "Responsibilities encompassed content publication, HTML, CSS, and JavaScript development for content implementation, ensuring website functionality and maintenance, and enhancing accessibility and user usability.",
    ],
    icon: electronicaLogo,
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-uiux-4 text-uiux-2">
      <h2 className="font-bold">Experience</h2>

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
}

export default Experience;
