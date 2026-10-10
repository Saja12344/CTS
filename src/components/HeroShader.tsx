import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ShaderInstance } from "shaders/js";

type HeroShaderProps = {
  onActiveChange?: (active: boolean) => void;
  lines: [string, string, string];
  language: "ar" | "en";
};

/**
 * Liquid-crystal style hero: big type behind a refractive glass orb
 * with chromatic aberration + iridescent rim (shaders/js).
 */
const HeroShader = ({ onActiveChange, lines, language }: HeroShaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const lineKey = lines.join("|");

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let instance: ShaderInstance | null = null;
    const fontFamily = language === "ar" ? "IBM Plex Sans Arabic" : "Inter";
    const [lineA, lineB, lineC] = lineKey.split("|");

    void (async () => {
      try {
        const { createShader, isWebGPUSupported } = await import("shaders/js");
        if (cancelled || !isWebGPUSupported()) return;

        const follow = {
          type: "mouse-position" as const,
          smoothing: 0.14,
          momentum: 0.2,
        };

        const shader = await createShader(
          canvas,
          {
            components: [
              { type: "SolidColor", props: { color: "#050506" } },
              {
                type: "Text",
                props: {
                  text: lineA,
                  fontFamily,
                  fontWeight: 700,
                  fontSize: 0.14,
                  letterSpacing: -0.04,
                  color: "#ffffff",
                  textAlign: "center",
                  center: { x: 0.5, y: 0.36 },
                },
              },
              {
                type: "Text",
                props: {
                  text: lineB,
                  fontFamily,
                  fontWeight: 700,
                  fontSize: 0.14,
                  letterSpacing: -0.04,
                  color: "#ffffff",
                  textAlign: "center",
                  center: { x: 0.5, y: 0.5 },
                },
              },
              {
                type: "Text",
                props: {
                  text: lineC,
                  fontFamily,
                  fontWeight: 700,
                  fontSize: 0.14,
                  letterSpacing: -0.04,
                  color: "#ffffff",
                  textAlign: "center",
                  center: { x: 0.5, y: 0.64 },
                },
              },
              // Flat stack: Glass refracts every layer drawn before it.
              {
                type: "Glass",
                props: {
                  shape: JSON.stringify({ type: "sphere3D", radius: 0.4 }),
                  shapeType: "sphere3D",
                  center: follow,
                  refraction: 1,
                  thickness: 0.9,
                  aberration: 0.95,
                  edgeSoftness: 0.05,
                  innerZoom: 1.25,
                  highlight: 0.55,
                  highlightColor: "#f5fff8",
                  fresnel: 0.8,
                  fresnelSoftness: 0.35,
                  fresnelColor: "#b8ffe8",
                  tintColor: "#07110e",
                  tintIntensity: 0.25,
                },
              },
              {
                type: "ThinFilm",
                props: {
                  shape: JSON.stringify({ type: "sphere3D", radius: 0.4 }),
                  shapeType: "sphere3D",
                  center: follow,
                  intensity: 1.35,
                  opacity: 0.95,
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
  }, [reduceMotion, language, lineKey]);

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
