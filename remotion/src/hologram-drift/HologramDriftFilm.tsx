import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {fbm} from "../smart-wave/noise";

/**
 * HologramDriftFilm — single still plate with organic multi-axis drift.
 * Seeded fbm for irregular left/right/up/down + subtle scale (deterministic).
 */
export const HologramDriftFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height, fps, durationInFrames} = useVideoConfig();
  const t = frame / fps;

  // Irregular X/Y drift (يمين يسار فوق تحت) — layered noise, not a loop
  const nx = fbm(t * 0.28, 0.6, 12, 4);
  const ny = fbm(t * 0.31, 2.1, 34, 4);
  const nx2 = fbm(t * 0.7, 4.2, 56, 3);
  const ny2 = fbm(t * 0.65, 5.8, 78, 3);

  // Map 0–1 noise → signed drift in px (generous travel; plate is overscaled)
  const maxX = width * 0.09;
  const maxY = height * 0.08;
  const x = ((nx * 0.72 + nx2 * 0.28) * 2 - 1) * maxX;
  const y = ((ny * 0.72 + ny2 * 0.28) * 2 - 1) * maxY;

  // Subtle irregular grow/shrink — stays overscale so edges never peek
  const ns = fbm(t * 0.24, 1.3, 99, 3);
  const scale = 1.28 + ns * 0.14; // ~1.28–1.42

  // Very light organic rotation for parallax feel
  const nr = fbm(t * 0.18, 3.4, 45, 2);
  const rotate = ((nr * 2 - 1) * 1.6).toFixed(3);

  const opacity = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames],
    [1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  const volume = interpolate(
    frame,
    [0, 0.5 * fps, durationInFrames - 0.9 * fps, durationInFrames],
    [0, 0.35, 0.35, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  return (
    <AbsoluteFill style={{backgroundColor: "#050505", opacity, overflow: "hidden"}}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          src={staticFile("hologram/plate.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(4)}) rotate(${rotate}deg)`,
            transformOrigin: "50% 50%",
            willChange: "transform",
          }}
        />
      </AbsoluteFill>
      {/* Soft vignette so crop edges feel intentional */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
          pointerEvents: "none",
        }}
      />
      <Audio
        src={staticFile("audio/smart-wave-bed.wav")}
        volume={volume}
        premountFor={fps}
      />
    </AbsoluteFill>
  );
};
