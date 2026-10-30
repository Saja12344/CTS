import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {fbm} from "./noise";
import {WaveField} from "./WaveField";

/**
 * SmartWaveFilm — premium ambient blue-wave motion (landscape, matching refs).
 * Procedural canvas glow; refs in public/wave-refs are art direction only.
 */
export const SmartWaveFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const t = frame / fps;

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
   * Irregular organic size — layered seeded fbm (stable per frame, not Math.random).
   * Slow swells + uneven medium peaks + light flutter; no metronome loop.
   */
  const slow = fbm(t * 0.22, 0.4, 41, 4); // ~0–1, long uneven envelopes
  const mid = fbm(t * 0.55, 1.7, 63, 3);
  const flutter = fbm(t * 1.15, 3.1, 88, 2);
  const mixed = slow * 0.58 + mid * 0.32 + flutter * 0.1;
  // Bias so it often settles mid-low but irregularly surges
  const intensity = 0.26 + Math.pow(mixed, 1.35) * 0.95;

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
