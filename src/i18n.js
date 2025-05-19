import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my project!",
        navbar: {
          about: "About Me",
          education: "Education & Certifications",
          experience: "Experience",
          projects: "Projects",
        },
        hero: {
          greeting: "Hi there!",
          introFull: "My name is Santiago, a passionate ",
          introPart: "My name is Santiago,",
          passionatePart: "a passionate ",
          dynamicWords: ["Developer", "Researcher", "Engineer", "Human"],
          description:
            "Driven by a passion for artificial intelligence, programming, and lifelong learning, I strive to innovate, enhance, and contribute to the world through groundbreaking AI applications and research.",
        },
        about: {
          title: "About Me",
        },
        bio: {
          paragraph1:
            "Results-driven Machine Learning Engineer and Computer Science Student with 2+ years of experience designing, training, fine-tuning, and deploying ML models at scale. Skilled in end-to-end ML pipelines, data engineering, feature extraction, model selection, prompt optimization, and production deployment on AWS, GCP, Azure, and Databricks. Strong background in NLP, computer vision, reinforcement learning, and big-data analytics. Proven ability to translate research into robust, high-performance solutions for enterprise environments. Excellent leadership, cross-functional collaboration, and bilingual (English/Spanish) communication skills.",
          paragraph2:
            "I thrive in dynamic environments, excelling both independently and as part of diverse teams to bring innovative projects to life. My curiosity drives me to master new tools and concepts, ensuring I'm always ready to tackle emerging challenges. Passionate about MLOps, scalable architectures, and delivering business value through AI.",
          paragraph3:
            "Outside of work, I'm an avid creator who loves music, cooking, drawing, and painting. Exploring and learning every day fuels my creativity and passion for embracing new adventures.",
        },
        skills: {
          softSkillsTitle: "Soft Skills",
          adaptability: "Adaptability",
          creativity: "Creativity",
          problemSolving: "Problem-Solving",
          teamCollaboration: "Team Collaboration",
          quickLearning: "Quick Learning",
          leadership: "Leadership",
          crossFunctional: "Cross-Functional Collaboration",
          communication: "Bilingual Communication (English/Spanish)",
          technicalSkillsTitle: "Technical Skills",
          fullStackDevelopment: "Full Stack Development",
          apiDevelopment: "API Development",
          databaseManagement: "Database Management",
          robotics: "Robotics",
          mlops:
            "MLOps & Deployment (AWS, GCP, Azure, Docker, Kubernetes, PM2, Nginx, Databricks)",
          programming:
            "Programming: Python, Java, JavaScript/TypeScript, C/C++, SQL, NoSQL",
          frameworks:
            "Frameworks & Tools: FastAPI, Node.js, React/Next.js, Git, Postman, VS Code, ROS",
          machineLearning:
            "Machine Learning, NLP, Computer Vision, RAG, Prompt Engineering, AI Agents",
          deepLearning:
            "Deep Learning: PyTorch, TensorFlow, CNNs, RNNs, Transformers, RL",
          bigData: "Big Data: BigQuery (GCP), Databricks",
          spokenLanguages:
            "Languages: Spanish (Native), English (Full Professional), French (Elementary)",
        },
        interests: {
          title: "Interests",
          exploringProjects:
            "Exploring and developing innovative projects with real-world impact",
          continuousLearning:
            "Continuous learning: embracing new skills, ideas, and technologies",
          collaboratingTeams:
            "Collaborating with diverse teams to create meaningful solutions",
          challengingMyself:
            "Challenging myself: learning from mistakes and growing through feedback",
        },
        education: {
          title: "Education & Certifications",
          uniandes: {
            csDegree:
              "B.S. in Computer Science (Jan 2021 -- Dec 2025, Expected)",
            eeCoursework:
              "Electronic Engineering (75% credits completed, Jan 2021 -- Dec 2023)",
          },
          tec: {
            exchangeProgram:
              "Exchange Program in Data Analytics & AI (Jul 2024 -- Dec 2024)",
          },
          certifications: {
            deepLearning: "NVIDIA Fundamentals of Deep Learning",
            gcpFundamentals: "Google Cloud Essentials",
            gcpDataMLAI:
              "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
            gcpInfrastructure:
              "Perform Foundational Infrastructure Tasks in Google Cloud",
            aiProductivity:
              "Productivity Tricks with AI to Reimagine Your Workday and Career",
            promptEngineering:
              "Prompt Engineering: Learn to Speak with Generative AI",
            issueDateFeb2024: "Feb 2024",
            issueDateApr2023: "Apr 2023",
          },
          viewCvButton: "Check My Full CV",
        },
        certifications: {
          issuedBy: "Issued by",
          issueDate: "Issue date",
          viewCredential: "View Credential",
        },
        experience: {
          title: "Experience",
          straico: {
            date: "May 2024 - Present",
            title: "Software Developer & AI Machine Learning Engineer",
            company: "Straico",
            location: "United States (Remote)",
            description: [
              "Fine-tuned LLMs using domain-specific datasets to improve accuracy by 15%.",
              "Developed custom model implementations leveraging chat logs to build a prompt-optimization system, enhancing relevancy.",
              "Engineered scalable microservices with FastAPI and Node.js to wrap LLM and RAG pipelines, reducing latency by 30%.",
              "Designed CI/CD pipelines for model training and deployment using Docker, PM2, and Nginx on AWS EC2.",
              "Deployed TensorFlow pipelines optimized production inference with 50ms latency and 200 requests/sec throughput.",
              "Collaborated with frontend teams to integrate AI-driven features and dashboards (React/Next.js).",
              "Monitored production ML deployments with AWS CloudWatch, GCP Monitoring, and Prometheus for fault tolerance.",
            ],
          },
          hop: {
            date: "Mar 2025 - Apr 2025",
            title: "Software Developer & AI Engineer (Part-time)",
            company: "Hop",
            location: "United States (Remote)",
            description: [
              "Developed AI agents to streamline candidate engagement and screening, improving efficiency.",
              "Architected scalable systems integrating AI components, real-time channels, and Slack/email/telephony APIs.",
              "Built core backend services to process chat commands, match profiles, and manage scheduling with secure REST APIs.",
              "Designed and managed databases to store candidate data and logs, ensuring integrity and compliance.",
              "Executed unit, integration, and E2E tests and established CI/CD pipelines and monitoring.",
              "Enforced security practices including encryption, authentication, and authorization for data protection.",
              "Collaborated across teams maintaining documentation of code, APIs, and architectures.",
            ],
          },
          sinfonia: {
            date: "Apr 2023 - Apr 2025",
            title: "Lead for AI & Robotics Research",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Colombia",
            description: [
              "Developed models for speech recognition, computer vision, and predictive analytics leveraging ROS and MoveIt on Pepper robots, leading to international recognition.",
              "Designed data pipelines to collect, preprocess, and version datasets for supervised and RL training.",
              "Integrated ML workflows into Angular dashboards for real-time monitoring and updates.",
              "Led team to victory at RoboCup @Home Social Standard Platform League 2024, securing first place in international competition.",
            ],
          },
          oasis: {
            date: "Feb 2024 - Jun 2024",
            title: "XR Application Developer",
            company: "Oasis",
            location: "Bogotá, Colombia",
            description: [
              "Built Unity/C# training applications for emergency responders, focusing on immersive learning.",
              "Integrated XR technologies into product workflows with a cross-functional team.",
            ],
          },
          ta1: {
            date: "Jan 2022 -- Dec 2023",
            title: "Teaching Assistant & Frontend Developer",
            company: "Universidad de Los Andes",
            location: "Bogotá, Colombia",
            description: [
              "Supported workshops, labs, and classes for Electrical Engineering, Robotics, and IoT courses.",
              "Installed and maintained Ubuntu, ROS, PyTorch, CUDA, and MoveIt for robotics labs.",
              "Managed evaluations and provided weekly student support.",
              "Oversaw updates to the department website using HTML, CSS, and JavaScript.",
              "Enhanced accessibility and usability through best practices.",
            ],
          },
          ta2: {
            date: "Aug 2021 -- Dec 2021",
            title: "Undergraduate Research Assistant",
            company: "Universidad de Los Andes",
            location: "Bogotá, Colombia",
            description: [
              "Assisted in research on reinforcement learning algorithms for robotics.",
              "Developed simulation environments and analyzed experimental results.",
              "Collaborated with graduate students to publish findings.",
            ],
          },
          ta3: {
            date: "Jan 2021 -- Jul 2021",
            title: "Junior Software Developer (Intern)",
            company: "TechNova Solutions",
            location: "Bogotá, Colombia",
            description: [
              "Supported the development of internal tools using React and Node.js.",
              "Participated in code reviews and agile ceremonies.",
              "Contributed to documentation and user training materials.",
            ],
          },
          frontend: {
            date: "Jul 2020 -- Dec 2020",
            title: "Freelance Frontend Developer",
            company: "Freelance",
            location: "Remote",
            description: [
              "Designed and implemented responsive web interfaces for small businesses.",
              "Worked closely with clients to gather requirements and deliver solutions.",
              "Ensured cross-browser compatibility and accessibility best practices.",
            ],
          },
        },
        projects: {
          title: "Featured Projects",
          aiAgentsPlatform: {
            title: "Customizable AI Agents Platform",
            description:
              "Built an ML-driven agent orchestration system. Designed modular pipelines to fine-tune and deploy LLMs based on user needs. Optimized inference using batching and async processing to handle millions of requests.",
          },
          imagePlatform: {
            title: "AI-Driven Image Generation & Editing",
            description:
              "Integrated OpenAI Function Calling with Ideogram API. Automated mask generation and context-aware processing for high-fidelity outputs. Deployed scalable API on AWS Lambda with S3 for storage.",
          },
          smartTemplates: {
            title: "Smart Templates Application",
            description:
              "This application detects similarities in user queries and suggests structured templates for related queries. It leverages the OpenAI API with embeddings for analysis and template generation, and uses a graph to visualize relationships between similar queries.",
          },
          sinfoniaWebsite: {
            title: "SinfonIA Website",
            description:
              "A basic and rapid development project for SinfonIA's official website, created using Angular. This platform serves as a hub for showcasing the group's projects, team details, and news. The website played a supporting role in the RoboCup 2024 competition, providing visibility for ongoing research and acting as a bridge for those seeking to connect with the group.",
          },
          pepperRobot: {
            title:
              "Pepper Robot Implementation in Unity for Virtual Reality Experiences",
            description:
              "Developed a virtual simulation of the Pepper robot within Unity by integrating the Robot Operating System (ROS). This project focuses on implementing advanced Virtual Reality (VR) and Augmented Reality (AR) technologies. By subscribing to robot topics through ROS, the simulation acts as a digital twin, paving the way for innovative applications in VR and AR. The project showcases the seamless fusion of robotics and immersive technologies.",
          },
        },
        footer: {
          availability: {
            title: "Available for select freelance opportunities",
            description:
              "Have an exciting project idea? I'm eager to collaborate and bring it to life. Contact me!",
          },
          contact: {
            title: "Contact",
            email: "Email",
            phone: "Phone",
          },
          testimonials: {
            testimonial1: {
              name: "Arturo Henao",
              position: "CEO/Founder",
              company: "Straico / OnTrack",
              comment:
                "Don't get distracted by a young developer's age. Building digital products from scratch, scaling them, and finding product-market fit is by far the hardest job I've done. But having a team member like Santi makes it so much easier. He's one of the best developers I've known—not just for his technical skills, but for his personality, discipline, and enthusiasm",
            },
          },
          copyright: "This project was lovingly crafted by",
          technologies:
            "using React, Next.js, and Tailwind CSS. Deployed with Vercel.",
          rightsReserved: "",
        },
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a mi proyecto!",
        navbar: {
          about: "Sobre Mí",
          education: "Educación y Certificaciones",
          experience: "Experiencia",
          projects: "Proyectos",
        },
        hero: {
          greeting: "¡Hola!",
          introFull: "Me llamo Santiago, un apasionado ",
          introPart: "Me llamo Santiago,",
          passionatePart: "un apasionado ",
          dynamicWords: [
            "Desarrollador",
            "Investigador",
            "Ingeniero",
            "Humano",
          ],
          description:
            "Impulsado por la pasión por la inteligencia artificial, la programación y el aprendizaje continuo, me esfuerzo por innovar, mejorar y contribuir al mundo mediante aplicaciones y investigaciones revolucionarias de IA.",
        },
        about: {
          title: "Sobre Mí",
        },
        bio: {
          paragraph1:
            "Ingeniero de Machine Learning y estudiante de Ciencias de la Computación orientado a resultados, con más de 2 años de experiencia diseñando, entrenando, ajustando y desplegando modelos de ML a escala. Experto en pipelines de ML de extremo a extremo, ingeniería de datos, extracción de características, selección de modelos, optimización de prompts y despliegue en producción en AWS, GCP, Azure y Databricks. Sólida formación en PLN, visión por computador, aprendizaje por refuerzo y análisis de big data. Capacidad demostrada para traducir investigación en soluciones robustas y de alto rendimiento para entornos empresariales. Excelentes habilidades de liderazgo, colaboración interdisciplinaria y comunicación bilingüe (inglés/español).",
          paragraph2:
            "Me desenvuelvo en entornos dinámicos, destacando tanto de forma independiente como en equipos diversos para llevar a cabo proyectos innovadores. Mi curiosidad me impulsa a dominar nuevas herramientas y conceptos, asegurando estar siempre listo para enfrentar desafíos emergentes. Apasionado por MLOps, arquitecturas escalables y la entrega de valor de negocio a través de IA.",
          paragraph3:
            "Fuera del trabajo, soy un creador entusiasta que ama la música, la cocina, el dibujo y la pintura. Explorar y aprender cada día alimenta mi creatividad y mi pasión por abrazar nuevas aventuras.",
        },
        skills: {
          softSkillsTitle: "Habilidades Blandas",
          adaptability: "Adaptabilidad",
          creativity: "Creatividad",
          problemSolving: "Resolución de Problemas",
          teamCollaboration: "Colaboración en Equipo",
          quickLearning: "Aprendizaje Rápido",
          leadership: "Liderazgo",
          crossFunctional: "Colaboración Interdisciplinaria",
          communication: "Comunicación Bilingüe (Inglés/Español)",
          technicalSkillsTitle: "Habilidades Técnicas",
          fullStackDevelopment: "Desarrollo Full Stack",
          apiDevelopment: "Desarrollo de APIs",
          databaseManagement: "Gestión de Bases de Datos",
          robotics: "Robótica",
          mlops:
            "MLOps y Despliegue (AWS, GCP, Azure, Docker, Kubernetes, PM2, Nginx, Databricks)",
          programming:
            "Programación: Python, Java, JavaScript/TypeScript, C/C++, SQL, NoSQL",
          frameworks:
            "Frameworks y Herramientas: FastAPI, Node.js, React/Next.js, Git, Postman, VS Code, ROS",
          machineLearning:
            "Machine Learning, PLN, Visión por Computador, RAG, Prompt Engineering, Agentes de IA",
          deepLearning:
            "Deep Learning: PyTorch, TensorFlow, CNNs, RNNs, Transformers, RL",
          bigData: "Big Data: BigQuery (GCP), Databricks",
          spokenLanguages:
            "Idiomas: Español (Nativo), Inglés (Profesional), Francés (Básico)",
        },
        interests: {
          title: "Intereses",
          exploringProjects:
            "Explorar y desarrollar proyectos innovadores con impacto en el mundo real",
          continuousLearning:
            "Aprendizaje continuo: adquiriendo nuevas habilidades, ideas y tecnologías",
          collaboratingTeams:
            "Colaborar con equipos diversos para crear soluciones significativas",
          challengingMyself:
            "Retarme a mí mismo: aprender de los errores y crecer gracias al feedback",
        },
        education: {
          title: "Educación y Certificaciones",
          uniandes: {
            csDegree:
              "Pregrado en Ciencias de la Computación (Ene 2021 -- Dic 2025, esperado)",
            eeCoursework:
              "Ingeniería Electrónica (75% créditos completados, Ene 2021 -- Dic 2023)",
          },
          tec: {
            exchangeProgram:
              "Intercambio en Analítica de Datos e IA (Jul 2024 -- Dic 2024)",
          },
          certifications: {
            deepLearning: "NVIDIA Fundamentos de Deep Learning",
            gcpFundamentals: "Google Cloud Essentials",
            gcpDataMLAI:
              "Fundamentos de Computación en la Nube: Datos, ML e IA en Google Cloud",
            gcpInfrastructure:
              "Tareas Fundamentales de Infraestructura en Google Cloud",
            aiProductivity:
              "Productividad con IA para Reimaginar tu Trabajo y Carrera",
            promptEngineering:
              "Prompt Engineering: Aprende a Hablar con IA Generativa",
            issueDateFeb2024: "Feb 2024",
            issueDateApr2023: "Abr 2023",
          },
          viewCvButton: "Ver mi CV Completo",
        },
        certifications: {
          issuedBy: "Emitido por",
          issueDate: "Fecha de emisión",
          viewCredential: "Ver Credencial",
        },
        experience: {
          title: "Experiencia",
          straico: {
            date: "Mayo 2024 - Presente",
            title: "Desarrollador de Software & Machine Learning Engineer",
            company: "Straico",
            location: "Estados Unidos (Remoto)",
            description: [
              "Ajuste fino de LLMs usando datasets específicos de dominio, mejorando la precisión en un 15%.",
              "Desarrollo de implementaciones personalizadas de modelos, construyendo un sistema de optimización de prompts a partir de logs de chat.",
              "Ingeniería de microservicios escalables con FastAPI y Node.js para pipelines de LLM y RAG, reduciendo la latencia en un 30%.",
              "Diseño de pipelines CI/CD para entrenamiento y despliegue de modelos usando Docker, PM2 y Nginx en AWS EC2.",
              "Despliegue de pipelines de TensorFlow optimizados para inferencia en producción (50ms de latencia, 200 req/s).",
              "Colaboración con equipos frontend para integrar funcionalidades AI y dashboards (React/Next.js).",
              "Monitoreo de despliegues ML en producción con AWS CloudWatch, GCP Monitoring y Prometheus para tolerancia a fallos.",
            ],
          },
          hop: {
            date: "Mar 2025 - Abr 2025",
            title: "Desarrollador de Software & Ingeniero de IA (Medio Tiempo)",
            company: "Hop",
            location: "Estados Unidos (Remoto)",
            description: [
              "Desarrollo de agentes de IA para optimizar el engagement y screening de candidatos, mejorando la eficiencia.",
              "Arquitectura de sistemas escalables integrando componentes de IA, canales en tiempo real y APIs de Slack/email/telefonía.",
              "Construcción de servicios backend para procesar comandos de chat, emparejar perfiles y gestionar agendas con APIs REST seguras.",
              "Diseño y gestión de bases de datos para almacenar datos y logs de candidatos, asegurando integridad y cumplimiento.",
              "Ejecución de pruebas unitarias, de integración y E2E, estableciendo pipelines CI/CD y monitoreo.",
              "Implementación de prácticas de seguridad: cifrado, autenticación y autorización.",
              "Colaboración interequipos y documentación de código, APIs y arquitecturas.",
            ],
          },
          sinfonia: {
            date: "Abr 2023 - Abr 2025",
            title: "Líder de Investigación en IA y Robótica",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Colombia",
            description: [
              "Desarrollo de modelos para reconocimiento de voz, visión por computador y analítica predictiva usando ROS y MoveIt en robots Pepper, logrando reconocimiento internacional.",
              "Diseño de pipelines de datos para recolectar, preprocesar y versionar datasets para entrenamiento supervisado y RL.",
              "Integración de flujos ML en dashboards Angular para monitoreo y actualizaciones en tiempo real.",
              "Liderazgo de equipo ganador en RoboCup @Home Social Standard Platform League 2024 (primer lugar internacional).",
            ],
          },
          oasis: {
            date: "Feb 2024 - Jun 2024",
            title: "Desarrollador de Aplicaciones XR",
            company: "Oasis",
            location: "Bogotá, Colombia",
            description: [
              "Desarrollo de aplicaciones de entrenamiento en Unity/C# para equipos de emergencia, enfocadas en aprendizaje inmersivo.",
              "Integración de tecnologías XR en flujos de producto con equipos interdisciplinarios.",
            ],
          },
          ta1: {
            date: "Ene 2022 -- Dic 2023",
            title: "Monitor Académico & Desarrollador Frontend",
            company: "Universidad de Los Andes",
            location: "Bogotá, Colombia",
            description: [
              "Soporte en talleres, laboratorios y clases de Ingeniería Eléctrica, Robótica e IoT.",
              "Instalación y mantenimiento de Ubuntu, ROS, PyTorch, CUDA y MoveIt para laboratorios de robótica.",
              "Gestión de evaluaciones y soporte semanal a estudiantes.",
              "Actualización del sitio web del departamento usando HTML, CSS y JavaScript.",
              "Mejora de accesibilidad y usabilidad mediante buenas prácticas.",
            ],
          },
          ta2: {
            date: "Ago 2021 -- Dic 2021",
            title: "Asistente de Investigación de Pregrado",
            company: "Universidad de Los Andes",
            location: "Bogotá, Colombia",
            description: [
              "Apoyo en investigación sobre algoritmos de aprendizaje por refuerzo para robótica.",
              "Desarrollo de entornos de simulación y análisis de resultados experimentales.",
              "Colaboración con estudiantes de posgrado para publicación de resultados.",
            ],
          },
          ta3: {
            date: "Ene 2021 -- Jul 2021",
            title: "Desarrollador de Software Junior (Prácticas)",
            company: "TechNova Solutions",
            location: "Bogotá, Colombia",
            description: [
              "Soporte en el desarrollo de herramientas internas usando React y Node.js.",
              "Participación en revisiones de código y ceremonias ágiles.",
              "Contribución a la documentación y materiales de capacitación de usuarios.",
            ],
          },
          frontend: {
            date: "Jul 2020 -- Dic 2020",
            title: "Desarrollador Frontend Freelance",
            company: "Freelance",
            location: "Remoto",
            description: [
              "Diseño e implementación de interfaces web responsivas para pequeños negocios.",
              "Trabajo cercano con clientes para recopilar requerimientos y entregar soluciones.",
              "Aseguramiento de compatibilidad entre navegadores y buenas prácticas de accesibilidad.",
            ],
          },
        },
        projects: {
          title: "Proyectos Destacados",
          aiAgentsPlatform: {
            title: "Plataforma de Agentes de IA Personalizables",
            description:
              "Sistema de orquestación de agentes ML. Diseño de pipelines modulares para ajuste fino y despliegue de LLMs según necesidades del usuario. Inferencia optimizada con batching y procesamiento asíncrono para millones de requests.",
          },
          imagePlatform: {
            title: "Generación y Edición de Imágenes con IA",
            description:
              "Integración de OpenAI Function Calling con la API de Ideogram. Automatización de generación de máscaras y procesamiento contextual para resultados de alta fidelidad. API escalable desplegada en AWS Lambda y S3.",
          },
          smartTemplates: {
            title: "Aplicación de Plantillas Inteligentes",
            description:
              "Detecta similitudes en consultas de usuario y sugiere plantillas estructuradas. Utiliza la API de OpenAI con embeddings y un grafo para visualizar relaciones.",
          },
          sinfoniaWebsite: {
            title: "Sitio Web de SinfonIA",
            description:
              "Desarrollo rápido y básico del sitio oficial de SinfonIA en Angular. Plataforma para mostrar proyectos, equipo y noticias. Apoyo a RoboCup 2024, visibilidad de investigación y puente para conexiones externas.",
          },
          pepperRobot: {
            title: "Implementación de Robot Pepper en Unity para VR",
            description:
              "Simulación virtual del robot Pepper en Unity integrando ROS. Proyecto enfocado en VR/AR avanzada. La simulación actúa como gemelo digital, habilitando aplicaciones innovadoras en VR y AR.",
          },
        },
        footer: {
          availability: {
            title: "Disponible para oportunidades freelance seleccionadas",
            description:
              "¿Tienes una idea emocionante? Estoy ansioso por colaborar y darle vida. ¡Contáctame!",
          },
          contact: {
            title: "Contacto",
            email: "Correo",
            phone: "Teléfono",
          },
          testimonials: {
            testimonial1: {
              name: "Arturo Henao",
              position: "CEO/Founder",
              company: " Straico / OnTrack",
              comment:
                "No te dejes distraer por la edad de un joven desarrollador. Crear productos digitales desde cero, escalarlos y encontrar la adecuación entre el producto y el mercado es, con diferencia, el trabajo más duro que he hecho. Pero contar con un miembro del equipo como Santi lo hace mucho más fácil. Es uno de los mejores desarrolladores que he conocido, no sólo por sus habilidades técnicas, sino también por su personalidad, disciplina y entusiasmo.",
            },
          },
          copyright: "Este proyecto fue creado con cariño por",
          technologies:
            "utilizando React, Next.js y Tailwind CSS. Desplegado con Vercel.",
          rightsReserved: "",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
