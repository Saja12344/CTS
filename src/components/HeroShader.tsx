import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

const follow = (
  smoothing: number,
  extras: { momentum?: number; reach?: number; originX?: number; originY?: number } = {},
) => ({
  type: "mouse-position" as const,
  smoothing,
  momentum: extras.momentum ?? 0.1,
  ...extras,
});

/**
 * Entlify-style soft shaded glow — whole bloom tracks the pointer,
 * black field stays visible around a diffused orange/cool light.
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
                props: { color: "#050505" },
              },
              // Soft mesh wash (idle drift) — muted so black still reads
              {
                type: "MeshGradient",
                props: {
                  colorA: "#050505",
                  colorB: "#ff5a1f",
                  stops: [
                    { color: "#050505", position: 0 },
                    { color: "#1a0c08", position: 0.35 },
                    { color: "#ea580c", position: 0.62 },
                    { color: "#ff8a3d", position: 0.78 },
                    { color: "#050505", position: 1 },
                  ],
                  colorSpace: "oklab",
                  count: 5,
                  smoothness: 3.6,
                  variation: 0.25,
                  swirl: 0.15,
                  drift: 0.4,
                  speed: 0.18,
                  seed: 3,
                  opacity: 0.35,
                },
              },
              // Main warm shade — follows the cursor (the Entlify orange bloom)
              {
                type: "Blob",
                props: {
                  colorA: "#ff7a33",
                  colorB: "#e11d2e",
                  size: 0.52,
                  softness: 0.97,
                  deformation: 0.55,
                  speed: 0.2,
                  opacity: 0.72,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow(0.1, { momentum: 0.12 }),
                  highlightIntensity: 0.22,
                  highlightColor: "#ffd2a8",
                },
              },
              // Inner hot core — tighter, same pointer
              {
                type: "Blob",
                props: {
                  colorA: "#ffb070",
                  colorB: "#ff5a1f",
                  size: 0.28,
                  softness: 0.96,
                  deformation: 0.4,
                  speed: 0.22,
                  opacity: 0.55,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow(0.08, { momentum: 0.14 }),
                  highlightIntensity: 0.15,
                  highlightColor: "#ffe8d2",
                },
              },
              // Cool counter-shade — lags + sits slightly off the pointer
              {
                type: "Blob",
                props: {
                  colorA: "#c8d8e4",
                  colorB: "#3a5a72",
                  size: 0.36,
                  softness: 0.98,
                  deformation: 0.45,
                  speed: 0.12,
                  opacity: 0.28,
                  blendMode: "screen",
                  colorSpace: "oklab",
                  center: follow(0.2, {
                    momentum: 0.06,
                    reach: 0.75,
                    originX: 0.22,
                    originY: 0.4,
                  }),
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
