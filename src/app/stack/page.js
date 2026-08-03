'use client';
import { useTranslation } from 'react-i18next';
import './stack.css';

const STACK_GROUPS = [
  {
    key: 'aiml',
    skills: [
      'RAG', 'Multi-Agent Systems', 'LLM Evaluation', 'Fine-Tuning (SFT, LoRA)',
      'Clinical Decision Support', 'Conversational AI', 'Structured Outputs',
      'Human-in-the-Loop AI', 'Prompt Engineering', 'Agent Graph Design',
      'LangGraph', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API',
      'Gemini API', 'vLLM', 'TGI', 'Instruction Tuning',
    ],
  },
  {
    key: 'data',
    skills: [
      'PostgreSQL', 'pgvector', 'Qdrant', 'Neo4j', 'MinIO', 'Redis',
      'RabbitMQ', 'Hybrid Search', 'Cross-Encoder Reranking', 'OCR',
      'SharePoint Ingestion', 'Apache Airflow', 'Data Pipelines',
      'Embedding Models', 'BGE-M3',
    ],
  },
  {
    key: 'cloud',
    skills: [
      'Azure', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'Linux',
      'CI/CD', 'On-Prem AI Deployment', 'GitHub Actions', 'GitLab CI/CD',
      'AWS SageMaker', 'AWS Lambda', 'AWS EC2', 'Azure Blob Storage',
      'Security Audits',
    ],
  },
  {
    key: 'eng',
    skills: [
      'Python', 'TypeScript', 'Node.js', 'FastAPI', 'NestJS', 'Next.js',
      'React', 'REST APIs', 'gRPC', 'Microservices', 'Async Processing',
      'GraphQL', 'MongoDB', 'MySQL',
    ],
  },
];

const CERTIFICATIONS = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2026', valid: '2026–2029' },
  { name: 'Efficient Large Language Model Customization', issuer: 'NVIDIA', year: '2025' },
  { name: 'Fundamentals of Deep Learning', issuer: 'NVIDIA', year: '2024' },
  { name: 'Introducing Generative AI with AWS', issuer: 'Udacity', year: '2025' },
  { name: 'Google Cloud Computing Foundations', issuer: 'Google Cloud Skills Boost', year: '2023' },
  { name: 'Prompt Engineering and AI Productivity', issuer: 'LinkedIn Learning', year: '2024' },
];

const LANGUAGES = [
  { language: 'Spanish', level: 'Native' },
  { language: 'English', level: 'Full Professional Proficiency' },
  { language: 'French',  level: 'Elementary' },
];

export default function StackPage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="page-wrap">
        <header className="section-header">
          <span className="section-label">{t('stack.sectionLabel')}</span>
          <h1 className="section-title">{t('stack.sectionTitle')}</h1>
          <div className="section-divider" />
        </header>

        {/* Skills groups */}
        <div className="stack-groups">
          {STACK_GROUPS.map(({ key, skills }) => (
            <section key={key} className="stack-group">
              <h3 className="stack-group-title">{t(`stack.${key}`)}</h3>
              <ul className="tech-list stack-badges" role="list" aria-label={t(`stack.${key}`)}>
                {skills.map((skill) => (
                  <li key={skill} className="tech-badge">{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Certifications */}
        <section className="cert-section">
          <span className="section-label" style={{ marginBottom: '1rem' }}>
            {t('stack.certLabel')}
          </span>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-header">
                  <p className="cert-name">{cert.name}</p>
                  <span className="cert-year mono">{cert.year}</span>
                </div>
                <p className="cert-issuer">{cert.issuer}</p>
                {cert.valid && (
                  <span className="cert-valid mono">Valid {cert.valid}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="lang-section">
          <span className="section-label" style={{ marginBottom: '1rem' }}>
            {t('stack.languages')}
          </span>
          <div className="lang-list">
            {LANGUAGES.map(({ language, level }) => (
              <div key={language} className="lang-item">
                <span className="lang-name">{language}</span>
                <span className="lang-level">{level}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
