import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

const follow = (smoothing: number, momentum = 0.1) => ({
  type: "mouse-position" as const,
  smoothing,
  momentum,
});

/**
 * Soft gradient cloud that tracks the pointer as one field —
 * no cursor-trail streak, black canvas stays visible around it.
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

        const shader = await createShader(
          canvas,
          {
            components: [
              {
                type: "SolidColor",
                props: { color: "#0B0B0C" },
              },
              // Whole palette follows the cursor (points lag slightly → soft cloud)
              {
                type: "MultiPointGradient",
                props: {
                  colorA: "#1e3d36",
                  positionA: follow(0.2, 0.06),
                  colorB: "#c4783a",
                  positionB: follow(0.1, 0.1),
                  colorC: "#e8c39a",
                  positionC: follow(0.14, 0.08),
                  colorD: "#2f5c52",
                  positionD: follow(0.24, 0.05),
                  colorE: "#d4894a",
                  positionE: follow(0.08, 0.12),
                  colorSpace: "oklab",
                  smoothness: 2.6,
                  opacity: 0.55,
                },
              },
              // Soft core tied to the same pointer — keeps the bloom compact
              {
                type: "RadialGradient",
                props: {
                  colorA: "#f0d2b0",
                  colorB: "#0B0B0C",
                  stops: [
                    { color: "#f0d2b0", position: 0 },
                    { color: "#c4783a", position: 0.28 },
                    { color: "#0B0B0C", position: 1 },
                  ],
                  center: follow(0.09, 0.1),
                  radius: 0.42,
                  colorSpace: "oklab",
                  opacity: 0.4,
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
