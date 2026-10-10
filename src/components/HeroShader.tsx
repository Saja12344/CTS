import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

type DriftRange = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

/**
 * Ports the Entlify Hero Glow Figma fill into shaders/js:
 * dark base, warm orange/red blobs mid-hero, cool teal top-left, film grain, slow drift.
 *
 * Note: nested auto-animate on center.x / center.y fails at runtime;
 * drive the whole center with dimensional outputMin/outputMax instead.
 */
const HeroShader = ({ onActiveChange }: HeroShaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let instance: ShaderInstance | null = null;

    void (async () => {
      try {
        const { createShader, isWebGPUSupported } = await import("shaders/js");
        if (cancelled || !isWebGPUSupported()) return;

        const driftCenter = (speed: number, range: DriftRange) => ({
          type: "auto-animate" as const,
          mode: "ping-pong" as const,
          speed,
          easing: "sine" as const,
          outputMin: { x: range.minX, y: range.minY },
          outputMax: { x: range.maxX, y: range.maxY },
        });

        // Match Figma controls: warmCenter ~58%/42%, coolCenter ~18%/22%, drift ~0.7
        const shader = await createShader(
          canvas,
          {
            components: [
              {
                type: "SolidColor",
                props: { color: "#0A0A0A" },
              },
              {
                type: "MeshGradient",
                props: {
                  colorA: "#0A0A0A",
                  colorB: "#FF4D00",
                  stops: [
                    { color: "#0A0A0A", position: 0 },
                    { color: "#1a0804", position: 0.3 },
                    { color: "#CC2200", position: 0.52 },
                    { color: "#FF4D00", position: 0.72 },
                    { color: "#0A0A0A", position: 1 },
                  ],
                  colorSpace: "oklab",
                  count: 5,
                  smoothness: 3.6,
                  variation: 0.28,
                  swirl: 0.12,
                  drift: 0.7,
                  wrapping: 0,
                  speed: 0.18,
                  seed: 11,
                  opacity: 0.42,
                },
              },
              // Primary warm glow — Figma warmCenter (58%, 42%)
              {
                type: "Blob",
                id: "warm",
                props: {
                  colorA: "#FF4D00",
                  colorB: "#CC0000",
                  size: 0.55,
                  softness: 0.98,
                  deformation: 0.55,
                  speed: 0.14,
                  opacity: 0.85,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: driftCenter(0.1, {
                    minX: 0.52,
                    maxX: 0.64,
                    minY: 0.36,
                    maxY: 0.48,
                  }),
                  highlightIntensity: 0.22,
                  highlightColor: "#FFB070",
                },
              },
              // Ember core — slightly offset from warm center
              {
                type: "Blob",
                id: "ember",
                props: {
                  colorA: "#FF8A3D",
                  colorB: "#FF4D00",
                  size: 0.3,
                  softness: 0.97,
                  deformation: 0.45,
                  speed: 0.18,
                  opacity: 0.58,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: driftCenter(0.12, {
                    minX: 0.4,
                    maxX: 0.52,
                    minY: 0.42,
                    maxY: 0.56,
                  }),
                  highlightIntensity: 0.16,
                  highlightColor: "#FFD2A8",
                },
              },
              // Cool teal — Figma coolCenter top-left (18%, 22%)
              {
                type: "Blob",
                id: "cool",
                props: {
                  colorA: "#008080",
                  colorB: "#1A3A3A",
                  size: 0.4,
                  softness: 0.99,
                  deformation: 0.35,
                  speed: 0.09,
                  opacity: 0.38,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: driftCenter(0.07, {
                    minX: 0.12,
                    maxX: 0.24,
                    minY: 0.14,
                    maxY: 0.28,
                  }),
                  highlightIntensity: 0.06,
                  highlightColor: "#4AD4D4",
                },
              },
              // Film grain — Figma noise ~0.45
              {
                type: "SimplexNoise",
                props: {
                  colorA: "#0A0A0A",
                  colorB: "#FFFFFF",
                  colorSpace: "linear",
                  scale: 3.2,
                  balance: 0,
                  contrast: 0.35,
                  seed: 7,
                  speed: 0.08,
                  opacity: 0.12,
                  blendMode: "overlay",
                },
              },
            ],
          },
          {
            onReady: () => {
              if (!cancelled) setActive(true);
            },
            onError: (reason) => {
              console.warn("[HeroShader]", reason);
              if (!cancelled) setActive(false);
            },
          },
        );

        if (cancelled) {
          shader.destroy();
          return;
        }

        instance = shader;
      } catch (err) {
        console.warn("[HeroShader] init error", err);
        if (!cancelled) setActive(false);
      }
    })();

    return () => {
      cancelled = true;
      instance?.destroy();
      instance = null;
      setActive(false);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      id="my-shader"
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[1] h-full w-full transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default HeroShader;
