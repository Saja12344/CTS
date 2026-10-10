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
 * LightLeakDriftFilm — cinematic light-leak plate with irregular multi-axis drift.
 * One source image (landscape); seeded fbm for يمين/يسار/فوق/تحت + subtle scale.
 */
export const LightLeakDriftFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {width, height, fps, durationInFrames} = useVideoConfig();
  const t = frame / fps;

  const nx = fbm(t * 0.26, 0.8, 21, 4);
  const ny = fbm(t * 0.29, 2.4, 37, 4);
  const nx2 = fbm(t * 0.68, 4.5, 59, 3);
  const ny2 = fbm(t * 0.62, 6.1, 81, 3);

  const maxX = width * 0.1;
  const maxY = height * 0.09;
  const x = ((nx * 0.7 + nx2 * 0.3) * 2 - 1) * maxX;
  const y = ((ny * 0.7 + ny2 * 0.3) * 2 - 1) * maxY;

  const ns = fbm(t * 0.22, 1.5, 103, 3);
  const scale = 1.3 + ns * 0.16; // ~1.30–1.46, edges covered

  const nr = fbm(t * 0.16, 3.7, 47, 2);
  const rotate = ((nr * 2 - 1) * 1.4).toFixed(3);

  // Soft brightness pulse via opacity on a duplicate glow layer feel — keep plate solid
  const glow = 0.92 + 0.08 * fbm(t * 0.4, 2.0, 66, 2);

  const opacity = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames],
    [1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  const volume = interpolate(
    frame,
    [0, 0.5 * fps, durationInFrames - 0.9 * fps, durationInFrames],
    [0, 0.38, 0.38, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  return (
    <AbsoluteFill style={{backgroundColor: "#02040a", opacity, overflow: "hidden"}}>
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        <Img
          src={staticFile("light-leak/plate-a.png")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: glow,
            transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${scale.toFixed(4)}) rotate(${rotate}deg)`,
            transformOrigin: "50% 50%",
            willChange: "transform",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 40% 35%, transparent 50%, rgba(0,0,0,0.4) 100%)",
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
