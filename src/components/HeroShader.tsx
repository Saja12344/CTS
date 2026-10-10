import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

/**
 * Calm ambient hero glow — drifts on its own, soft blob follows the pointer.
 * No cursor trail / arrow residue.
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
          smoothing: 0.1,
          momentum: 0.08,
        };

        const shader = await createShader(
          canvas,
          {
            components: [
              {
                type: "SolidColor",
                props: { color: "#0B0B0C" },
              },
              // Rich multi-stop field — calm drift, soft seams (Entlify-like depth)
              {
                type: "MeshGradient",
                props: {
                  colorA: "#0B0B0C",
                  colorB: "#c4783a",
                  stops: [
                    { color: "#0B0B0C", position: 0 },
                    { color: "#1a2428", position: 0.22 },
                    { color: "#2f5c52", position: 0.42 },
                    { color: "#c4783a", position: 0.68 },
                    { color: "#e8c39a", position: 0.88 },
                    { color: "#0B0B0C", position: 1 },
                  ],
                  colorSpace: "oklab",
                  count: 6,
                  smoothness: 3.2,
                  variation: 0.22,
                  swirl: 0.12,
                  drift: 0.35,
                  wrapping: 0,
                  speed: 0.22,
                  seed: 7,
                },
              },
              // Soft pointer glow — follows mouse/finger, no trail streak
              {
                type: "Blob",
                props: {
                  colorA: "#f0d2b0",
                  colorB: "#d4894a",
                  size: 0.85,
                  softness: 0.95,
                  deformation: 0.28,
                  speed: 0.18,
                  opacity: 0.42,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow,
                  highlightIntensity: 0.18,
                  highlightColor: "#fff6ea",
                },
              },
              // Cool counter-light for depth (fixed, slow breathing)
              {
                type: "Blob",
                props: {
                  colorA: "#6fa896",
                  colorB: "#1e3d36",
                  size: 0.55,
                  softness: 0.96,
                  deformation: 0.35,
                  speed: 0.14,
                  opacity: 0.28,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: { x: 0.22, y: 0.62 },
                  highlightIntensity: 0.1,
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
