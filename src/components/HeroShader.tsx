import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

/**
 * Calm ambient hero field — soft drifting mesh glow that idles on its own
 * and gently follows the pointer (Entlify-style landing atmosphere).
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

        const follow = {
          type: "mouse-position" as const,
          smoothing: 0.08,
          momentum: 0.12,
        };

        const shader = await createShader(
          canvas,
          {
            components: [
              // Slow self-moving color field
              {
                type: "MeshGradient",
                props: {
                  colorA: "#0B0B0C",
                  colorB: "#2a4a3f",
                  colorSpace: "oklab",
                  speed: 0.28,
                },
              },
              // Secondary cool wash
              {
                type: "Aurora",
                props: {
                  colorA: "#143028",
                  colorB: "#9dcfb8",
                  colorC: "#C8FF4D",
                  colorSpace: "oklab",
                  speed: 0.4,
                  intensity: 55,
                  waviness: 40,
                  height: 100,
                  opacity: 0.4,
                  blendMode: "screen",
                  center: { x: 0.5, y: 0.15 },
                },
              },
              // Soft luminous blob: breathes via speed, tracks pointer
              {
                type: "Blob",
                props: {
                  colorA: "#E6E6E4",
                  colorB: "#C8FF4D",
                  size: 0.72,
                  softness: 0.9,
                  deformation: 0.45,
                  speed: 0.25,
                  opacity: 0.5,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow,
                  highlightIntensity: 0.35,
                  highlightColor: "#F4F2EE",
                },
              },
              // Quiet grain
              {
                type: "SimplexNoise",
                props: {
                  scale: 3.2,
                  speed: 0.2,
                  opacity: 0.1,
                  blendMode: "softLight",
                },
              },
              // Light cursor whisper
              {
                type: "CursorTrail",
                props: {
                  colorA: "#F4F2EE",
                  colorB: "#9dcfb8",
                  radius: 0.42,
                  length: 0.35,
                  opacity: 0.25,
                  blendMode: "screen",
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
