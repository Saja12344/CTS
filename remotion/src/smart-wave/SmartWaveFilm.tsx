import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {WaveField} from "./WaveField";

/**
 * SmartWaveFilm — premium ambient blue-wave motion (landscape, matching refs).
 * Procedural canvas glow; refs in public/wave-refs are art direction only.
 */
export const SmartWaveFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  // Soft exit only — wave visible from frame 0
  const opacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  const volume = interpolate(
    frame,
    [0, 0.6 * fps, durationInFrames - 1.0 * fps, durationInFrames],
    [0, 0.45, 0.45, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  /**
   * Clear grow/shrink breath across ~2.5 cycles in 10s.
   * Small → swell → settle → repeat (never stuck at max size).
   */
  const cycle = durationInFrames / 2.5;
  const phase = (frame % cycle) / cycle;
  const intensity = interpolate(
    phase,
    [0, 0.18, 0.42, 0.62, 0.82, 1],
    [0.32, 0.55, 1.12, 0.72, 0.38, 0.32],
    {
      easing: Easing.inOut(Easing.sin),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill style={{backgroundColor: "#000", opacity}}>
      <WaveField intensity={intensity} />
      <Audio
        src={staticFile("audio/smart-wave-bed.wav")}
        volume={volume}
        premountFor={fps}
      />
    </AbsoluteFill>
  );
};

/** Vertical social crop of the same field */
export const SmartWaveFilmVertical: React.FC = () => {
  return <SmartWaveFilm />;
};
