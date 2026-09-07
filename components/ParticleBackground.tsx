"use client";

import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const particleOptions: ISourceOptions = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: { value: "#22d3ee" },
    links: {
      color: "#22d3ee",
      distance: 150,
      enable: true,
      opacity: 0.18,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "out" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 55,
    },
    opacity: { value: 0.45 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
};

export default function ParticleBackground() {
  const initializeParticles = useCallback(async (engine: Parameters<typeof loadSlim>[0]) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles
        id="tsparticles"
        className="pointer-events-none fixed inset-0 z-0"
        options={particleOptions}
      />
    </ParticlesProvider>
  );
}
