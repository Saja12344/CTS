import React, {useLayoutEffect, useRef} from "react";
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {fbm} from "./noise";

type Props = {
  readonly intensity?: number;
};

/**
 * Procedural Siri-like ambient wave — soft blue/white bloom on black.
 * Canvas additive layers; motion driven by seeded fbm + frame.
 */
export const WaveField: React.FC<Props> = ({intensity = 1}) => {
  const frame = useCurrentFrame();
  const {width, height, fps, durationInFrames} = useVideoConfig();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const handleRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", {alpha: false});
    if (!ctx) return;

    handleRef.current = delayRender(`wave-frame-${frame}`);

    const w = width;
    const h = height;
    if (canvas.width !== w) canvas.width = w;
    if (canvas.height !== h) canvas.height = h;

    const t = frame / fps;
    // Tiny irregular wobble (seeded) — not a regular sine metronome
    const micro = 0.93 + 0.07 * fbm(t * 0.9, 2.2, 101, 2);
    const size = Math.max(0.18, intensity) * micro;
    const flow = t * 0.22;

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    const samples = Math.max(180, Math.floor(w / 5));
    // Base sits lower when small; rises as it swells
    const baseY = h * (0.82 - 0.12 * size);
    const amp = h * 0.28 * size;

    type Pt = {x: number; y: number; peak: number};
    const pts: Pt[] = [];
    for (let i = 0; i <= samples; i++) {
      const u = i / samples;
      const x = u * w;
      const n1 = fbm(u * 2.4 + flow, t * 0.35, 11, 4);
      const n2 = fbm(u * 5.1 - flow * 0.7, t * 0.55, 29, 3);
      const envelope =
        0.55 +
        0.45 * Math.sin(u * Math.PI) +
        0.25 * Math.sin(u * Math.PI * 2 + t * 0.8);
      const rise = (n1 * 0.75 + n2 * 0.35 - 0.12) * amp * envelope;
      const bias =
        0.38 * Math.exp(-Math.pow((u - 0.78) / 0.22, 2)) +
        0.24 * Math.exp(-Math.pow((u - 0.16) / 0.18, 2)) +
        0.14 * Math.exp(-Math.pow((u - 0.48) / 0.26, 2));
      const y = baseY - rise - bias * amp * 1.4;
      pts.push({x, y, peak: bias + n1 * 0.55});
    }

    ctx.globalCompositeOperation = "lighter";

    for (let i = 0; i < pts.length; i += 2) {
      const p = pts[i];
      const r = h * (0.22 + p.peak * 0.18) * (0.55 + 0.55 * size);
      const g = ctx.createRadialGradient(p.x, h, 0, p.x, h * 0.9, r);
      g.addColorStop(0, `rgba(18, 55, 150,${0.35 + 0.35 * size})`);
      g.addColorStop(0.45, `rgba(8, 35, 110,${0.12 + 0.16 * size})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, h * 0.96, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const r = h * (0.1 + p.peak * 0.12) * size;
      const g = ctx.createRadialGradient(
        p.x,
        p.y + h * 0.09,
        0,
        p.x,
        p.y + h * 0.05,
        r,
      );
      g.addColorStop(0, `rgba(65, 155, 255,${0.28 + 0.28 * size})`);
      g.addColorStop(0.4, `rgba(35, 115, 235,${0.12 + 0.14 * size})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y + h * 0.07, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const r = h * (0.05 + p.peak * 0.08) * size;
      const g = ctx.createRadialGradient(
        p.x,
        p.y + h * 0.045,
        0,
        p.x,
        p.y + h * 0.02,
        r,
      );
      g.addColorStop(0, `rgba(150, 215, 255,${0.3 + 0.35 * size})`);
      g.addColorStop(0.4, `rgba(85, 175, 255,${0.12 + 0.14 * size})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y + h * 0.035, r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const coreBoost = Math.pow(Math.max(0, p.peak), 1.15);
      const r = h * (0.028 + coreBoost * 0.07) * size;
      const cy = h - 1;
      const g = ctx.createRadialGradient(p.x, cy, 0, p.x, cy, r);
      g.addColorStop(0, `rgba(255,255,255,${(0.4 + coreBoost * 0.4) * size})`);
      g.addColorStop(0.22, `rgba(225,242,255,${(0.22 + coreBoost * 0.2) * size})`);
      g.addColorStop(0.55, `rgba(120,190,255,${0.1 * size})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const sheet = ctx.createLinearGradient(0, h * 0.52, 0, h);
    sheet.addColorStop(0, "rgba(0,0,0,0)");
    sheet.addColorStop(0.42, `rgba(35,100,210,${0.05 * size})`);
    sheet.addColorStop(0.72, `rgba(95,175,255,${0.1 * size})`);
    sheet.addColorStop(1, `rgba(255,255,255,${0.08 * size})`);
    ctx.fillStyle = sheet;
    ctx.fillRect(0, h * 0.52, w, h * 0.48);

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 700; i++) {
      const gx = fbm(i * 0.17, frame * 0.02, 77, 2) * w;
      const gy = h * 0.48 + fbm(i * 0.31, frame * 0.015, 91, 2) * h * 0.52;
      const a = 0.2 + fbm(i, frame * 0.01, 3, 1) * 0.8;
      ctx.fillStyle = `rgba(180,210,255,${a})`;
      ctx.fillRect(gx, gy, 1.1, 1.1);
    }
    ctx.globalAlpha = 1;

    continueRender(handleRef.current);
    handleRef.current = null;
  }, [frame, width, height, fps, durationInFrames, intensity]);

  return (
    <AbsoluteFill style={{backgroundColor: "#000"}}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{width: "100%", height: "100%", display: "block"}}
      />
    </AbsoluteFill>
  );
};
