import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("ParticlesBackground mounted");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        options={{
          background: { color: "var(--clr-bg)" },

          particles: {
            number: { value: 70, density: { enable: true, area: 900 } },

            /* Latte shades with higher opacity */
            color: {
              value: [
                "rgba(240,231,216,0.9)",
                "rgba(240,231,216,0.6)",
                "rgba(220,203,180,0.5)",
              ],
            },

            shape: {
              type: "circle",
              stroke: { width: 0, color: "transparent" },
            },

            opacity: { value: 0.7, random: true }, // visible but not glaring

            size: {
              value: { min: 0.5, max: 3 },
              random: { enable: true },
              anim: { enable: true },
            },

            links: {
              enable: true,
              distance: 180,
              color: "rgba(220,203,180,0.25)", // thin latte lines
              opacity: 0.35,
              width: 1,
            },

            move: {
              enable: true,
              speed: 0.6,
              outModes: { default: "bounce" },
            },
          },

          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
          },

          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticlesBackground;
