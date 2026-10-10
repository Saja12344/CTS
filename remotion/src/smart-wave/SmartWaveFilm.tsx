import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
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

  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 24, durationInFrames],
    [1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const opacity = fadeIn * fadeOut;

  const volume = interpolate(
    frame,
    [0, 0.6 * fps, durationInFrames - 1.0 * fps, durationInFrames],
    [0, 0.45, 0.45, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  const intensity = interpolate(
    frame,
    [0, 1.2 * fps, durationInFrames * 0.5, durationInFrames],
    [0.75, 1.05, 1.0, 0.9],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  return (
    <AbsoluteFill style={{backgroundColor: "#000", opacity}}>
      <WaveField intensity={intensity} />
      {/* Optional restrained ambient bed — original synth reused/trimmed feel */}
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
