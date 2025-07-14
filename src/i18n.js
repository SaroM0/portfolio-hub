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
          introFull: "I'm Santiago, a passionate ",
          introPart: "I'm Santiago,",
          passionatePart: "a passionate ",
          dynamicWords: ["Senior Developer", "AI Engineer", "ML Architect", "Researcher"],
          description:
            "Senior Software Developer & AI/ML Engineer with 5+ years of full-stack Python/React JS experience, including 3+ years integrating Generative AI and machine learning, and a proven track record of delivering end-to-end pipelines that improved inference latency by 30% and boosted model F1-score by 12%.",
        },
        about: {
          title: "About Me",
          downloadCV: "Download CV",
        },
        bio: {
          paragraph1:
            "Senior Software Developer & AI/ML Engineer with 5+ years of full-stack Python/React JS experience, including 3+ years integrating Generative AI and machine learning, and a proven track record of delivering end-to-end pipelines that improved inference latency by 30% and boosted model F1-score by 12%. Adept at transforming data-intensive prototypes into secure, low-latency cloud workloads and leading cross-functional teams from concept through production.",
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
          machineLearning:
            "Machine Learning & Deep Learning: PyTorch, TensorFlow, scikit-learn, LoRA/QLoRA & parameter-efficient fine-tuning, embedding models, instruction & prompt engineering, model evaluation & monitoring",
          generativeAI:
            "Generative AI & Model Development: Retrieval-Augmented Generation (RAG), LLM APIs, LlamaIndex, LangChain, LangGraph, AWS Bedrock",
          cloudMLOps:
            "Cloud & MLOps (AWS): S3, SageMaker, Glue, Redshift, Lambda, ECS/EKS, Step Functions, IAM, Aurora, RDS, Lake Formation, Kinesis, Docker, Kubernetes, GitHub Actions, GitLab CI/CD",
          dataLifecycle:
            "Data Lifecycle & Engineering: Data collection, cleansing, filtering, labeling; Apache Airflow orchestration; Redis, PostgreSQL",
          fullStackDevelopment:
            "Full-Stack Development: React, Next.js, NestJS, Node.js (TypeScript), Python (FastAPI, Flask), GraphQL",
          servingDeployment:
            "Serving & Deployment: vLLM, TGI, NVIDIA Device Plugin",
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
              "B.S. Computer Science (In Progress)",
            eeCoursework:
              "Electronic Engineering (Not Completed)",
          },
          tec: {
            exchangeProgram:
              "Minor in Data Analytics & AI Tools (Aug 2024 -- Dec 2024)",
          },
          certifications: {
            llmCustomization: "Efficient Large Language Model (LLM) Customization",
            generativeAI: "Introducing Generative AI with AWS",
            promptEngineering: "Prompt Engineering and AI Productivity",
            deepLearning: "Fundamentals of Deep Learning",
            gcpDataMLAI: "Google Cloud Foundations: Data, ML & AI",
            gcpFundamentals: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
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
        honors: {
          title: "Honors & Awards",
          robocup: "First Place — RoboCup @Home Social SPL (2024)",
        },
        teaching: {
          title: "Teaching Assistance",
          electrical: {
            title: "Introduction to Electrical & Electronic Engineering",
            date: "Aug 2022 -- Dec 2023",
            institution: "Universidad de Los Andes",
            description: [
              "Guided workshops, resolved doubts, reviewed assignments, and transcribed notes.",
              "Advised SDG-aligned student projects on problem definition and implementation.",
            ],
          },
          robotics: {
            title: "Robotics Learning",
            date: "Jun 2023",
            institution: "Universidad de Los Andes",
            description: [
              "Installed/maintained Ubuntu+ROS, PyTorch, CUDA, TensorFlow, CNNs, MoveIt for robotics labs.",
              "Led computer vision and NLP exercises on robots.",
            ],
          },
          society: {
            title: "Society 5.0",
            date: "Jan 2022 -- Jun 2022",
            institution: "Universidad de Los Andes",
            description: [
              "Assisted labs on sensors, databases, benchmarking, and data transmission.",
              "Coordinated materials and meetings across departments.",
            ],
          },
        },
        experience: {
          title: "Experience",
          paipol: {
            date: "Jan 2025 -- Present",
            title: "Senior Full-Stack Developer & AI / ML Architect",
            company: "Paipol (Straico Brand)",
            location: "United States (Remote)",
            description: [
              "Led product vision and architecture, delivering a scalable platform as senior technical lead.",
              "Designed three-tier data stack (MySQL RDS, MongoDB, Pinecone) with a modular NestJS backend.",
              "Implemented hybrid agent framework synthesizing facts from SQL, NoSQL, and vector stores (90% answer accuracy, 45% reduction in response time).",
              "Streamlined fine-tuning workflows, reducing inference latency by 30% and improving model F1-score by 12%.",
              "Engineered data processing pipelines with 99%+ reliability, including a Discord crawler.",
              "Collaborated with founders to refine scope, translate business needs, and guide roadmap execution.",
            ],
          },
          straico: {
            date: "Oct 2024 -- Present",
            title: "Senior Full-Stack Developer & AI / ML Engineer",
            company: "Straico",
            location: "United States (Remote)",
            description: [
              "Deployed Python microservices on AWS EC2 via gRPC/REST, exposing multi-agent API.",
              "Published n8n-nodes-straico-official for no-code workflow automation.",
              "Built multi-stage optimizer combining heuristic rewrites & fine-tuned adapters (+18% relevance).",
              "Led MongoDB migrations and CI/CD setup with 99.9% uptime on AWS.",
              "Developed dashboards and cohort analyses to track acquisition and retention.",
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
            date: "Apr 2023 -- Apr 2025",
            title: "AI & Robotics Research Team Lead",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Colombia",
            description: [
              "Researched and developed pipelines for social-robotics interactions.",
              "Explored algorithms for perception and object recognition.",
              "Designed and evaluated models in dynamic environments.",
              "Implemented speech-to-text and text-to-speech for human–robot dialogue.",
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
            "Desarrollador Senior",
            "Ingeniero de IA",
            "Arquitecto ML",
            "Investigador",
          ],
          description:
            "Desarrollador Senior de Software e Ingeniero de IA/ML con más de 5 años de experiencia full-stack en Python/React JS, incluyendo 3+ años integrando IA Generativa y aprendizaje automático, con un historial comprobado de entregar pipelines de extremo a extremo que mejoraron la latencia de inferencia en un 30% y aumentaron el F1-score del modelo en un 12%.",
        },
        about: {
          title: "Sobre Mí",
          downloadCV: "Descargar CV",
        },
        bio: {
          paragraph1:
            "Desarrollador Senior de Software e Ingeniero de IA/ML con más de 5 años de experiencia full-stack en Python/React JS, incluyendo 3+ años integrando IA Generativa y aprendizaje automático, con un historial comprobado de entregar pipelines de extremo a extremo que mejoraron la latencia de inferencia en un 30% y aumentaron el F1-score del modelo en un 12%. Experto en transformar prototipos intensivos en datos en cargas de trabajo en la nube seguras y de baja latencia, liderando equipos multifuncionales desde el concepto hasta la producción.",
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
          machineLearning:
            "Machine Learning y Deep Learning: PyTorch, TensorFlow, scikit-learn, LoRA/QLoRA y fine-tuning eficiente de parámetros, modelos de embeddings, ingeniería de instrucciones y prompts, evaluación y monitoreo de modelos",
          generativeAI:
            "IA Generativa y Desarrollo de Modelos: Retrieval-Augmented Generation (RAG), APIs de LLM, LlamaIndex, LangChain, LangGraph, AWS Bedrock",
          cloudMLOps:
            "Cloud y MLOps (AWS): S3, SageMaker, Glue, Redshift, Lambda, ECS/EKS, Step Functions, IAM, Aurora, RDS, Lake Formation, Kinesis, Docker, Kubernetes, GitHub Actions, GitLab CI/CD",
          dataLifecycle:
            "Ciclo de Vida de Datos e Ingeniería: Recopilación, limpieza, filtrado, etiquetado de datos; orquestación con Apache Airflow; Redis, PostgreSQL",
          fullStackDevelopment:
            "Desarrollo Full-Stack: React, Next.js, NestJS, Node.js (TypeScript), Python (FastAPI, Flask), GraphQL",
          servingDeployment:
            "Servicio y Despliegue: vLLM, TGI, NVIDIA Device Plugin",
          spokenLanguages:
            "Idiomas: Español (Nativo), Inglés (Profesional completo), Francés (Básico)",
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
              "Ingeniería Electrónica (75% completado, Ene 2021 -- Dic 2023)",
          },
          tec: {
            exchangeProgram:
              "Minor en Analítica de Datos e Herramientas de IA (Ago 2024 -- Dic 2024)",
          },
          certifications: {
            llmCustomization: "Personalización Eficiente de Modelos de Lenguaje de Gran Escala (LLM) – NVIDIA (2025)",
            generativeAI: "Introducción a la IA Generativa con AWS - Udacity (2025)",
            promptEngineering: "Prompt Engineering y Productividad con IA – LinkedIn Learning (2024)",
            deepLearning: "Fundamentos de Deep Learning – NVIDIA (2024)",
            gcpDataMLAI: "Fundamentos de Google Cloud: Datos, ML e IA – Google Cloud (2023)",
            gcpFundamentals: "Fundamentos de Computación en la Nube de Google Cloud: Fundamentos de Computación en la Nube – Google Cloud Skills Boost (2023)",
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
        honors: {
          title: "Honores y Premios",
          robocup: "Primer Lugar — RoboCup @Home Social SPL (2024)",
        },
        teaching: {
          title: "Asistencia Docente",
          electrical: {
            title: "Introducción a la Ingeniería Eléctrica y Electrónica",
            date: "Ago 2022 -- Dic 2023",
            institution: "Universidad de Los Andes",
            description: [
              "Guié talleres, resolví dudas, revisé tareas y transcribí notas.",
              "Asesoré proyectos estudiantiles alineados con los ODS en definición de problemas e implementación.",
            ],
          },
          robotics: {
            title: "Aprendizaje de Robótica",
            date: "Jun 2023",
            institution: "Universidad de Los Andes",
            description: [
              "Instalé/mantuve Ubuntu+ROS, PyTorch, CUDA, TensorFlow, CNNs, MoveIt para laboratorios de robótica.",
              "Lideré ejercicios de visión por computador y PLN en robots.",
            ],
          },
          society: {
            title: "Sociedad 5.0",
            date: "Ene 2022 -- Jun 2022",
            institution: "Universidad de Los Andes",
            description: [
              "Asistí laboratorios sobre sensores, bases de datos, benchmarking y transmisión de datos.",
              "Coordiné materiales y reuniones entre departamentos.",
            ],
          },
        },
        experience: {
          title: "Experiencia",
          paipol: {
            date: "Ene 2025 -- Presente",
            title: "Desarrollador Full-Stack Senior & Arquitecto de IA / ML",
            company: "Paipol (Marca Straico)",
            location: "Estados Unidos (Remoto)",
            description: [
              "Lideré la visión del producto y arquitectura, entregando una plataforma escalable como líder técnico senior.",
              "Diseñé un stack de datos de tres niveles (MySQL RDS, MongoDB, Pinecone) con un backend modular NestJS.",
              "Implementé un framework de agentes híbridos que sintetiza hechos de SQL, NoSQL y vector stores (90% precisión, 45% reducción en tiempo de respuesta).",
              "Optimicé flujos de fine-tuning, reduciendo la latencia de inferencia en 30% y mejorando el F1-score del modelo en 12%.",
              "Diseñé pipelines de procesamiento de datos con 99%+ confiabilidad, incluyendo un crawler de Discord.",
              "Colaboré con fundadores para refinar el alcance, traducir necesidades del negocio y guiar la ejecución del roadmap.",
            ],
          },
          straico: {
            date: "Oct 2024 -- Presente",
            title: "Desarrollador Full-Stack Senior & Ingeniero de IA / ML",
            company: "Straico",
            location: "Estados Unidos (Remoto)",
            description: [
              "Desplegué microservicios Python en AWS EC2 vía gRPC/REST, exponiendo API multi-agente.",
              "Publiqué n8n-nodes-straico-official para automatización de flujos sin código.",
              "Construí optimizador multi-etapa combinando reescritura heurística y adaptadores fine-tuned (+18% relevancia).",
              "Lideré migraciones MongoDB y configuración CI/CD con 99.9% uptime en AWS.",
              "Desarrollé dashboards y análisis de cohortes para rastrear adquisición y retención.",
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
            date: "Abr 2023 -- Abr 2025",
            title: "Líder de Equipo de Investigación en IA y Robótica",
            company: "SinfonIA Uniandes",
            location: "Bogotá, Colombia",
            description: [
              "Investigué y desarrollé pipelines para interacciones de robótica social.",
              "Exploré algoritmos para percepción y reconocimiento de objetos.",
              "Diseñé y evalué modelos en ambientes dinámicos.",
              "Implementé speech-to-text y text-to-speech para diálogo humano-robot.",
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
