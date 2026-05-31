'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import AskAI from '@/components/AskAI/AskAI';
import './Navbar.css';

const NAV_LINKS = [
  { key: 'work',       href: '/work' },
  { key: 'research',   href: '/research' },
  { key: 'talks',      href: '/talks' },
  { key: 'experience', href: '/experience' },
  { key: 'stack',      href: '/stack' },
  { key: 'contact',    href: '/contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [askAIOpen, setAskAIOpen] = useState(false);
  const [langFade, setLangFade] = useState(false);

  /* Close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const toggleLang = () => {
    setLangFade(true);
    setTimeout(() => {
      i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
      setTimeout(() => setLangFade(false), 900);
    }, 900);
  };

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {langFade && <div className="lang-fade-overlay" />}

      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            SR<span>.</span>
          </Link>

          {/* Desktop links */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className={isActive(href) ? 'active' : ''}
                >
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar-actions">
            <button
              className="navbar-ask-ai"
              onClick={() => setAskAIOpen(true)}
              aria-label="Open AI assistant"
            >
              <FontAwesomeIcon icon={faBolt} /> {t('nav.askAI')}
            </button>
            <button
              className="navbar-lang"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              {i18n.language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            className={isActive(href) ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {t(`nav.${key}`)}
          </Link>
        ))}
        <div className="navbar-mobile-actions">
          <button
            className="btn-outline"
            onClick={() => { setMenuOpen(false); setAskAIOpen(true); }}
          >
            ⚡ {t('nav.askAI')}
          </button>
          <a
            href="/Rodriguez_Santiago_CV.pdf"
            className="btn-ghost"
            download
            onClick={() => setMenuOpen(false)}
          >
            ↓ {t('nav.downloadCV')}
          </a>
          <button className="navbar-lang" onClick={toggleLang}>
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>

      <AskAI isOpen={askAIOpen} onClose={() => setAskAIOpen(false)} />
    </>
  );
}
