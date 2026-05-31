import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { I18nProvider } from '@/lib/I18nProvider';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jb',
  display: 'swap',
});

export const metadata = {
  title: 'Santiago Rodríguez — AI Systems Engineer',
  description:
    'AI Systems Engineer specializing in clinical decision support, production RAG systems, and LLM evaluation. ASCO & EASL 2026 researcher. Building reliable, evaluated AI for real-world deployment.',
  keywords:
    'AI Systems Engineer, RAG, LLM Evaluation, Clinical AI, Multi-Agent Systems, Python, LangGraph, Production AI',
  openGraph: {
    title: 'Santiago Rodríguez — AI Systems Engineer',
    description:
      'Production RAG · Clinical AI · LLM Evaluation · ASCO & EASL 2026',
    url: 'https://sntiagorodriguezdev.vercel.app',
    siteName: 'Santiago Rodríguez',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <I18nProvider>
          <Analytics />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
