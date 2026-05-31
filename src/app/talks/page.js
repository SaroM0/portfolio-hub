'use client';
import { useTranslation } from 'react-i18next';
import './talks.css';

const TALKS = [
  {
    type: 'invited',
    title: 'AI in Education — British Council',
    event: 'British Council Session',
    date: '2025',
    language: 'English',
    description:
      'Invited talk on practical AI applications in education and learning. Delivered in English to an international audience. Covered generative AI tools, pedagogical implications, and responsible integration into educational workflows.',
    slides: null,
    video: null,
  },
  {
    type: 'academic',
    title: 'AI in Education — Universidad de los Andes (Session 1)',
    event: 'Universidad de los Andes — Departmental Talk',
    date: '2024',
    language: 'Spanish',
    description:
      'First of two invited sessions on AI tools and educational applications at Colombia\'s leading engineering school. Addressed current capabilities of large language models, practical use cases for students and educators, and ethical considerations.',
    slides: null,
    video: null,
  },
  {
    type: 'academic',
    title: 'AI in Education — Universidad de los Andes (Session 2)',
    event: 'Universidad de los Andes — Departmental Talk',
    date: '2025',
    language: 'English',
    description:
      'Second invited session on AI tools for education. Focused on agentic systems, retrieval-augmented generation, and practical demonstrations of AI-assisted workflows relevant to undergraduate engineering students.',
    slides: null,
    video: null,
  },
];

const TEACHING = [
  {
    course: 'Applied AI & Robotics Lab',
    institution: 'Universidad de los Andes',
    date: 'Jun 2023',
    description: 'Installed and configured Ubuntu + ROS, PyTorch, CUDA, TensorFlow, CNNs, MoveIt for robotics labs. Led computer vision and NLP exercises on Pepper robots.',
  },
  {
    course: 'Introduction to Electrical & Electronic Engineering',
    institution: 'Universidad de los Andes',
    date: 'Aug 2022 – Dec 2023',
    description: 'Guided workshops, resolved doubts, reviewed assignments. Advised SDG-aligned student projects on problem definition and implementation.',
  },
  {
    course: 'Society 5.0',
    institution: 'Universidad de los Andes',
    date: 'Jan 2022 – Jun 2022',
    description: 'Assisted labs on sensors, databases, benchmarking, and data transmission. Coordinated materials and meetings across departments.',
  },
];

export default function TalksPage() {
  const { t } = useTranslation();

  return (
    <div className="page-section">
      <div className="page-wrap">
        <header className="section-header">
          <span className="section-label">{t('talks.sectionLabel')}</span>
          <h2 className="section-title">{t('talks.sectionTitle')}</h2>
          <div className="section-divider" />
        </header>

        {/* Invited Talks */}
        <div className="talks-grid">
          {TALKS.map((talk) => (
            <article key={talk.title} className="card talk-card">
              <div className="talk-meta">
                <span className={`tag tag-${talk.type}`}>
                  {talk.type === 'invited'
                    ? t('talks.tagInvited')
                    : t('talks.tagAcademic')}
                </span>
                <span className="talk-lang mono">{talk.language}</span>
              </div>

              <h3 className="talk-title">{talk.title}</h3>
              <p className="talk-event">{talk.event} · {talk.date}</p>
              <p className="talk-desc">{talk.description}</p>

              <div className="talk-footer">
                {talk.slides && (
                  <a href={talk.slides} className="link-arrow" target="_blank" rel="noopener noreferrer">
                    {t('talks.slidesDeck')} ↗
                  </a>
                )}
                {talk.video && (
                  <a href={talk.video} className="link-arrow" target="_blank" rel="noopener noreferrer">
                    {t('talks.video')} ↗
                  </a>
                )}
                {!talk.slides && !talk.video && (
                  <span className="talk-no-media mono">Slides available on request</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Teaching Assistance */}
        <section className="teaching-section">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Teaching Assistance
          </span>

          <div className="teaching-list">
            {TEACHING.map((ta) => (
              <div key={ta.course} className="teaching-item">
                <div className="teaching-header">
                  <h3 className="teaching-course">{ta.course}</h3>
                  <span className="mono teaching-date">{ta.date}</span>
                </div>
                <p className="teaching-institution">{ta.institution}</p>
                <p className="teaching-desc">{ta.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
