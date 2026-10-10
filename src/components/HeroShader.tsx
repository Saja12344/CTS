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
                    { color: "#121616", position: 0.35 },
                    { color: "#2f5c52", position: 0.55 },
                    { color: "#c4783a", position: 0.72 },
                    { color: "#0B0B0C", position: 1 },
                  ],
                  colorSpace: "oklab",
                  count: 5,
                  smoothness: 3.4,
                  variation: 0.18,
                  swirl: 0.08,
                  drift: 0.28,
                  wrapping: 0,
                  speed: 0.2,
                  seed: 7,
                  opacity: 0.45,
                },
              },
              // Soft pointer glow — smaller so black field reads clearly
              {
                type: "Blob",
                props: {
                  colorA: "#f0d2b0",
                  colorB: "#d4894a",
                  size: 0.38,
                  softness: 0.92,
                  deformation: 0.22,
                  speed: 0.18,
                  opacity: 0.32,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow,
                  highlightIntensity: 0.12,
                  highlightColor: "#fff6ea",
                },
              },
              // Cool counter-light — compact accent only
              {
                type: "Blob",
                props: {
                  colorA: "#6fa896",
                  colorB: "#1e3d36",
                  size: 0.28,
                  softness: 0.94,
                  deformation: 0.3,
                  speed: 0.14,
                  opacity: 0.18,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: { x: 0.22, y: 0.62 },
                  highlightIntensity: 0.08,
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
