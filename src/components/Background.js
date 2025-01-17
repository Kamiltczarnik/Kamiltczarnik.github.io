import React, { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from "../particlesConfig";

function Background({ children }) {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Particles
        id="tsparticles"
        options={particlesConfig}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Render passed-in children here */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

export default Background;
