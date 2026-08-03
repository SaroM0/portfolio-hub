'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faBolt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AskAI from '@/components/AskAI/AskAI';
import './contact.css';

const LINKS = [
  {
    icon: faEnvelope,
    label: 'rodriguezmorasantiago@gmail.com',
    href: 'mailto:rodriguezmorasantiago@gmail.com',
  },
  {
    icon: faLinkedin,
    label: 'linkedin.com/in/santiago-rodriguez-mora',
    href: 'https://www.linkedin.com/in/santiago-rodriguez-mora',
  },
  {
    icon: faGithub,
    label: 'github.com/SaroM0',
    href: 'https://github.com/SaroM0',
  },
  {
    icon: faGlobe,
    label: 'santiagorm.dev',
    href: 'https://www.santiagorm.dev',
  },
];

export default function ContactPage() {
  const { t } = useTranslation();
  const [askAIOpen, setAskAIOpen] = useState(false);

  return (
    <>
      <div className="page-section">
        <div className="page-wrap">
          <header className="section-header">
            <span className="section-label">{t('contact.sectionLabel')}</span>
            <h1 className="section-title">{t('contact.sectionTitle')}</h1>
            <div className="section-divider" />
          </header>

          <div className="contact-layout">
            {/* Left: statement + availability */}
            <div className="contact-left">
              <p className="contact-tagline">{t('contact.tagline')}</p>
              <p className="contact-available">{t('contact.availableFor')}</p>

              <div className="contact-status">
                <div className="contact-status-item">
                  <span className="status-dot" />
                  <span className="mono">{t('contact.currentStatus')}</span>
                </div>
                <div className="contact-status-item">
                  <span className="contact-status-open-dot" aria-hidden="true" />
                  <span className="mono">{t('contact.openTo')}</span>
                </div>
              </div>

              <a
                href="/Rodriguez_Santiago_CV.pdf"
                className="btn-outline"
                download
                style={{ marginTop: '1rem', alignSelf: 'flex-start' }}
              >
                ↓ {t('contact.cvLabel')}
              </a>
            </div>

            {/* Right: Ask AI + links */}
            <div className="contact-right">
              {/* Ask AI — prominent */}
              <div className="contact-ask-ai-card">
                <div className="contact-ask-ai-icon"><FontAwesomeIcon icon={faBolt} /></div>
                <h3 className="contact-ask-ai-title">{t('contact.askAITitle')}</h3>
                <p className="contact-ask-ai-desc">{t('contact.askAIDesc')}</p>
                <button
                  className="btn-primary"
                  onClick={() => setAskAIOpen(true)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FontAwesomeIcon icon={faBolt} /> Ask AI
                </button>
              </div>

              {/* Contact links */}
              <ul className="contact-links" role="list">
                {LINKS.map(({ icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="contact-link"
                      target={href.startsWith('mailto') || href.startsWith('https://wa.me') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <span className="contact-link-icon">
                        <FontAwesomeIcon icon={icon} />
                      </span>
                      <span className="contact-link-label">{label}</span>
                      <span className="contact-link-arrow">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AskAI isOpen={askAIOpen} onClose={() => setAskAIOpen(false)} />
    </>
  );
}
