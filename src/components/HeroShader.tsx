import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
};

/**
 * Full-bleed WebGPU hero background via shaders/js `createShader`.
 * Falls back silently when WebGPU is unavailable or the user prefers reduced motion.
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
                type: "LinearGradient",
                props: {
                  colorA: "#0B0B0C",
                  colorB: "#2a4a3f",
                  angle: 128,
                  colorSpace: "oklch",
                },
              },
              {
                type: "SimplexNoise",
                props: {
                  scale: 2.4,
                  speed: 0.35,
                  opacity: 0.22,
                  blendMode: "softLight",
                },
              },
              {
                type: "CursorTrail",
                props: {
                  colorA: "#F4F2EE",
                  colorB: "#C8FF4D",
                  radius: 0.36,
                  length: 0.55,
                  opacity: 0.7,
                  blendMode: "screen",
                },
              },
            ],
          },
          {
            onReady: () => {
              if (!cancelled) setActive(true);
            },
            onError: () => {
              if (!cancelled) setActive(false);
            },
          },
        );

        if (cancelled) {
          shader.destroy();
          return;
        }

        instance = shader;
      } catch {
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
      className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default HeroShader;
