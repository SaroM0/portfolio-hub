'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faBolt, faLayerGroup, faDiagramProject, faHeartPulse, faServer } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import AskAI from '@/components/AskAI/AskAI';
import ParticlesBackground from '@/components/ParticlesBackground/ParticlesBackground';
import arturoImage from '@/assets/ReferencesImages/arturo.jpeg';
import './landing.css';

/* ── Typing effect ── */
function TypedText({ words }) {
  const [current, setCurrent] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    let charIdx = 0;
    let erasing = false;
    const TYPING = 55;
    const ERASING = 30;
    const PAUSE   = 2200;

    const tick = () => {
      const word = words[wordIdx];
      if (!erasing && charIdx <= word.length) {
        setCurrent(word.slice(0, charIdx + 1));
        charIdx++;
        timeoutRef.current = setTimeout(tick, TYPING);
      } else if (!erasing) {
        erasing = true;
        timeoutRef.current = setTimeout(tick, PAUSE);
      } else if (charIdx > 0) {
        charIdx--;
        setCurrent(word.slice(0, charIdx));
        timeoutRef.current = setTimeout(tick, ERASING);
      } else {
        erasing = false;
        setWordIdx((i) => (i + 1) % words.length);
      }
    };
    timeoutRef.current = setTimeout(tick, TYPING);
    return () => clearTimeout(timeoutRef.current);
  }, [wordIdx, words]);

  return (
    <span>
      {current}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

/* ── Animated metric ── */
function AnimatedMetric({ value, label, isStatic, staticVal }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const didRun = useRef(false);

  useEffect(() => {
    if (isStatic || didRun.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || didRun.current) return;
      didRun.current = true;
      const numericStr = value.replace(/[^0-9]/g, '');
      const target = parseInt(numericStr, 10);
      const suffix = value.replace(/[0-9]/g, '');
      if (isNaN(target)) return;
      const duration = 1400;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target) + suffix);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, isStatic]);

  return (
    <div className="metric-card" ref={ref}>
      <div className="metric-value">
        {isStatic ? staticVal : (typeof count === 'number' ? value : count)}
      </div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

/* ── Page ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/santiago-rodriguez-5b2a17267', icon: faLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/SaroM0',                                icon: faGithub,   label: 'GitHub' },
  { href: 'mailto:rodriguezmorasantiago@gmail.com',                   icon: faEnvelope, label: 'Email' },
  { href: 'https://santiagorm.dev',                                   icon: faGlobe,    label: 'Website' },
  { href: 'https://www.instagram.com/sa.rdz/',                        icon: faInstagram,label: 'Instagram' },
];

export default function HomePage() {
  const { t } = useTranslation();
  const [askAIOpen, setAskAIOpen] = useState(false);
  const words = t('hero.typedWords', { returnObjects: true });

  return (
    <>
      <motion.section
        className="hero"
        variants={container}
        initial="hidden"
        animate="visible"
        aria-label="Hero"
      >
        <ParticlesBackground />

        {/* Status bar */}
        <motion.div variants={item} className="hero-status">
          <span className="status-dot" />
          <span className="mono">{t('hero.available')}</span>
          <span className="sep" aria-hidden="true">·</span>
          <span className="mono">{t('hero.remote')}</span>
          <span className="sep" aria-hidden="true">·</span>
          <span className="mono">{t('hero.location')}</span>
          <span className="sep" aria-hidden="true">→</span>
          <span className="mono hero-relocate">{t('hero.relocate')}</span>
        </motion.div>

        {/* Role */}
        <motion.p variants={item} className="hero-role">
          {t('hero.role')}
        </motion.p>

        {/* Name */}
        <motion.h1 variants={item} className="hero-name">
          Santiago
          <br />
          Rodríguez
        </motion.h1>

        {/* Positioning statement */}
        <motion.p variants={item} className="hero-positioning">
          {t('hero.positioningStatement')}
        </motion.p>

        {/* Typed focus areas */}
        <motion.p variants={item} className="hero-typed">
          <TypedText words={Array.isArray(words) ? words : []} />
        </motion.p>

        {/* Metrics */}
        <motion.div variants={item} className="hero-metrics">
          <AnimatedMetric value="5+"  label={t('hero.metric1Label')} />
          <AnimatedMetric value="2"   label={t('hero.metric2Label')} />
          <AnimatedMetric isStatic staticVal="1st" label={t('hero.metric3Label')} />
          <AnimatedMetric value="60%" label={t('hero.metric4Label')} />
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => setAskAIOpen(true)}
          >
            <FontAwesomeIcon icon={faBolt} /> Ask AI
          </button>
          <Link href="/work" className="btn-outline">
            {t('hero.ctaWork')} →
          </Link>
          <a
            href="/Rodriguez_Santiago_CV.pdf"
            className="btn-ghost"
            download
          >
            ↓ {t('hero.ctaCV')}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.ul variants={item} className="hero-social" role="list">
          {SOCIALS.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hero-social-link"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.section>

      {/* ── Mini testimonial strip ── */}
      <div className="hero-testimonial-strip">
        <div className="wib-inner">
          <div className="hero-testimonial-inner">
            <blockquote className="hero-testimonial-quote">
              "Don't get distracted by a young developer's age. Building digital products from scratch, scaling them, and finding product-market fit is by far the hardest job I've done. But having a team member like Santi makes it so much easier."
            </blockquote>
            <div className="hero-testimonial-author">
              <img
                src={arturoImage.src || arturoImage}
                alt="Arturo Henao"
                className="hero-testimonial-avatar"
              />
              <div>
                <p className="hero-testimonial-name">Arturo Henao</p>
                <p className="hero-testimonial-role mono">CEO/Founder · Straico / OnTrack</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── What I Build ── */}
      <section className="wib-section" aria-label="What I build">
        <div className="wib-inner">
          <header className="wib-header">
            <span className="section-label">{t('whatIBuild.sectionLabel')}</span>
            <p className="wib-tagline">{t('whatIBuild.tagline')}</p>
            <p className="wib-domains">{t('whatIBuild.domains')}</p>
          </header>

          <div className="wib-grid">
            {[
              { icon: faLayerGroup,    titleKey: 'cap1Title', descKey: 'cap1Desc' },
              { icon: faDiagramProject,titleKey: 'cap2Title', descKey: 'cap2Desc' },
              { icon: faHeartPulse,    titleKey: 'cap3Title', descKey: 'cap3Desc' },
              { icon: faServer,        titleKey: 'cap4Title', descKey: 'cap4Desc' },
            ].map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} className="wib-card">
                <span className="wib-icon" aria-hidden="true">
                  <FontAwesomeIcon icon={icon} />
                </span>
                <h3 className="wib-cap-title">{t(`whatIBuild.${titleKey}`)}</h3>
                <p className="wib-cap-desc">{t(`whatIBuild.${descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beyond AI systems ── */}
      <section className="beyond-section" aria-label="Client and product work">
        <div className="wib-inner">
          <header className="beyond-header">
            <span className="section-label">{t('work.beyondAI')}</span>
            <p className="beyond-tagline">{t('work.beyondAIDesc')}</p>
          </header>

          <div className="beyond-grid">
            {[
              { name: 'Triple Nexo', sector: 'NGO · Full-Stack · Social Impact', year: '2026' },
              { name: 'Together Finance', sector: 'Finance · Azure · International', year: '2026' },
              { name: 'EngiTool', sector: 'Industrial · Frontend', year: '2025' },
            ].map(({ name, sector, year }) => (
              <div key={name} className="beyond-card">
                <p className="beyond-name">{name}</p>
                <p className="beyond-sector mono">{sector} · {year}</p>
              </div>
            ))}
          </div>

          <Link href="/work#client-work" className="btn-ghost beyond-cta">
            {t('work.viewClientWork')} →
          </Link>
        </div>
      </section>

      {/* ── Recommendations ── */}
      <section className="recs-section" aria-label="Recommendations">
        <div className="wib-inner">
          <span className="section-label">{t('recs.sectionLabel')}</span>

          <div className="recs-grid">
            {/* Arturo — product execution, trust */}
            <article className="rec-card">
              <div className="rec-header">
                <img
                  src={arturoImage.src || arturoImage}
                  alt="Arturo Henao"
                  className="rec-avatar"
                />
                <div>
                  <p className="rec-name">Arturo Henao</p>
                  <p className="rec-role mono">CEO/Founder · Straico / OnTrack</p>
                  <p className="rec-context">AI product development and platform engineering.</p>
                </div>
              </div>
              <blockquote className="rec-quote">
                Don't get distracted by a young developer's age. Building digital products from scratch, scaling them, and finding product-market fit is by far the hardest job I've done. But having a team member like Santi makes it so much easier. He's one of the best developers I've known — not just for his technical skills, but for his personality, discipline, and enthusiasm.
              </blockquote>
            </article>
          </div>
        </div>
      </section>

      <AskAI isOpen={askAIOpen} onClose={() => setAskAIOpen(false)} />
    </>
  );
}
