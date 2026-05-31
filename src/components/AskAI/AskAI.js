'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import './AskAI.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.2 } },
};

export default function AskAI({ isOpen, onClose }) {
  const { t } = useTranslation();

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const suggestions = [
    t('askAI.q1'),
    t('askAI.q2'),
    t('askAI.q3'),
    t('askAI.q4'),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="ask-ai-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          role="dialog"
          aria-modal="true"
          aria-label="AI assistant"
        >
          <motion.div
            className="ask-ai-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="ask-ai-header">
              <div className="ask-ai-header-left">
                <div className="ask-ai-avatar"><FontAwesomeIcon icon={faBolt} /></div>
                <div>
                  <div className="ask-ai-title">{t('askAI.title')}</div>
                  <div className="ask-ai-subtitle">
                    <span className="status-dot" style={{ width: 5, height: 5 }} />
                    {t('askAI.subtitle')}
                  </div>
                </div>
              </div>
              <button className="ask-ai-close" onClick={onClose} aria-label={t('askAI.close')}>
                {t('askAI.close')}
              </button>
            </div>

            {/* Body */}
            <div className="ask-ai-body">
              <p className="ask-ai-intro">{t('askAI.intro')}</p>

              <div>
                <p className="ask-ai-suggestions-label">Try asking:</p>
                <div className="ask-ai-suggestions">
                  {suggestions.map((q, i) => (
                    <button key={i} className="ask-ai-suggestion">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer — disabled input */}
            <div className="ask-ai-footer">
              <div className="ask-ai-input-wrap">
                <input
                  className="ask-ai-input"
                  placeholder={t('askAI.placeholder')}
                  disabled
                  aria-disabled="true"
                />
                <button className="ask-ai-send" disabled aria-disabled="true">
                  →
                </button>
              </div>
              <p className="ask-ai-status">{t('askAI.comingSoon')}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
