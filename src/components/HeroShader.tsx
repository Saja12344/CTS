import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

/**
 * Entlify hero match: soft orange/red shade centered mid-hero,
 * cool teal accent lower-right, idle random drift — black stays around it.
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

        const drift = (speed: number, min: number, max: number) => ({
          type: "auto-animate" as const,
          mode: "ping-pong" as const,
          speed,
          outputMin: min,
          outputMax: max,
        });

        const shader = await createShader(
          canvas,
          {
            components: [
              {
                type: "SolidColor",
                props: { color: "#050505" },
              },
              // Soft mesh field — same palette as the reference (orange → red on black)
              {
                type: "MeshGradient",
                props: {
                  colorA: "#050505",
                  colorB: "#ff4d00",
                  stops: [
                    { color: "#050505", position: 0 },
                    { color: "#1a0a06", position: 0.28 },
                    { color: "#b32400", position: 0.52 },
                    { color: "#ff4d00", position: 0.7 },
                    { color: "#ff8a3d", position: 0.82 },
                    { color: "#050505", position: 1 },
                  ],
                  colorSpace: "oklab",
                  count: 6,
                  smoothness: 3.8,
                  variation: 0.3,
                  swirl: 0.18,
                  drift: 0.55,
                  wrapping: 0,
                  speed: 0.22,
                  seed: 11,
                  opacity: 0.55,
                },
              },
              // Main orange/red shade — sits mid/lower center like the screenshot
              {
                type: "Blob",
                props: {
                  colorA: "#ff4d00",
                  colorB: "#b32400",
                  size: 0.58,
                  softness: 0.98,
                  deformation: 0.62,
                  speed: 0.16,
                  opacity: 0.78,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: {
                    x: drift(0.12, 0.42, 0.58),
                    y: drift(0.1, 0.52, 0.68),
                  },
                  highlightIntensity: 0.2,
                  highlightColor: "#ffb070",
                },
              },
              // Hotter inner core — slightly higher, still under the CTA zone
              {
                type: "Blob",
                props: {
                  colorA: "#ff8a3d",
                  colorB: "#ff4d00",
                  size: 0.32,
                  softness: 0.97,
                  deformation: 0.5,
                  speed: 0.2,
                  opacity: 0.55,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: {
                    x: drift(0.14, 0.45, 0.55),
                    y: drift(0.11, 0.48, 0.62),
                  },
                  highlightIntensity: 0.18,
                  highlightColor: "#ffd2a8",
                },
              },
              // Cool teal whisper — lower right, like the reference
              {
                type: "Blob",
                props: {
                  colorA: "#1a3a3a",
                  colorB: "#2a5558",
                  size: 0.34,
                  softness: 0.99,
                  deformation: 0.4,
                  speed: 0.1,
                  opacity: 0.32,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: {
                    x: drift(0.08, 0.62, 0.78),
                    y: drift(0.09, 0.62, 0.78),
                  },
                  highlightIntensity: 0.05,
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
