'use client';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './AskAI.css';

const AGENT_URL = process.env.NEXT_PUBLIC_AGENT_URL || 'http://localhost:8000';

const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: 20, scale: 0.97, transition: { duration: 0.2 } },
};

const messageVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

function TypingDots() {
  return (
    <div className="ask-ai-typing">
      <span /><span /><span />
    </div>
  );
}

export default function AskAI({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const suggestions = [t('askAI.q1'), t('askAI.q2'), t('askAI.q3'), t('askAI.q4')];

  /* Scroll to bottom on new messages */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  /* Focus input when modal opens */
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${AGENT_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, session_id: sessionId }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      setSessionId(data.session_id);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: t('askAI.errorMessage') || 'Something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const isEmpty = messages.length === 0;

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
              {isEmpty ? (
                <>
                  <p className="ask-ai-intro">{t('askAI.intro')}</p>
                  <div>
                    <p className="ask-ai-suggestions-label">Try asking:</p>
                    <div className="ask-ai-suggestions">
                      {suggestions.map((q, i) => (
                        <button
                          key={i}
                          className="ask-ai-suggestion"
                          onClick={() => sendMessage(q)}
                          disabled={loading}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="ask-ai-messages">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      className={`ask-ai-message ask-ai-message--${msg.role}`}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {msg.content}
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="ask-ai-message ask-ai-message--assistant">
                      <TypingDots />
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="ask-ai-footer">
              <div className="ask-ai-input-wrap">
                <input
                  ref={inputRef}
                  className="ask-ai-input"
                  placeholder={t('askAI.placeholder')}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={loading}
                  aria-label="Chat input"
                />
                <button
                  className="ask-ai-send"
                  onClick={() => sendMessage(input)}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
