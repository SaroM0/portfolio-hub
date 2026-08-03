'use client';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/santiago-rodriguez-mora', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/SaroM0',                            icon: faGithub,   label: 'GitHub' },
  { href: 'mailto:rodriguezmorasantiago@gmail.com',               icon: faEnvelope, label: 'Email' },
  { href: 'https://wa.me/573212860273',                           icon: faWhatsapp, label: 'WhatsApp' },
  { href: 'https://www.santiagorm.dev',                           icon: faGlobe,    label: 'Website' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">
          © {year} <span>{t('footer.copyright')}</span>
        </p>
        <ul className="footer-links" role="list">
          {SOCIALS.map(({ href, icon, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-made">{t('footer.madeWith')}</p>
      </div>
    </footer>
  );
}
