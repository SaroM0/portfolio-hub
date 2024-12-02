import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 z-50">
      <Particles
        options={{
          particles: {
            number: {
              value: 5000,
            },
            color: {
              value: "#ff0000", // Color rojo
            },
            size: {
              value: 3000,
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
