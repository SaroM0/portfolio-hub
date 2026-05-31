'use client';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const PARTICLES_OPTIONS = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 65, density: { enable: true, area: 900 } },
    color: {
      value: [
        'rgba(240,231,216,0.85)',
        'rgba(240,231,216,0.55)',
        'rgba(220,203,180,0.45)',
      ],
    },
    shape: { type: 'circle' },
    opacity: { value: 0.65, random: true },
    size: {
      value: { min: 0.8, max: 2.5 },
      random: { enable: true },
    },
    links: {
      enable: true,
      distance: 175,
      color: 'rgba(220,203,180,0.2)',
      opacity: 0.3,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 0.55,
      outModes: { default: 'bounce' },
      random: false,
      straight: false,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: true,
    },
    modes: {
      grab: { distance: 130, links: { opacity: 0.45 } },
    },
  },
  detectRetina: true,
};

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      options={PARTICLES_OPTIONS}
    />
  );
}
