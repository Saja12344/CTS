import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {Atmosphere, FilmVignette} from "../components/Atmosphere";
import {SelectiveType} from "../components/SelectiveType";
import {FILM} from "../config";

/** Scene 1 — minimal atmospheric open + subtle possibility spark. */
export const AtmosphereScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const cam = interpolate(frame, [0, 120], [1.08, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
  const driftX = interpolate(frame, [0, 120], [-18, 12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spark = interpolate(frame, [28, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const sparkPulse = 0.85 + Math.sin(frame * 0.12) * 0.15;

  return (
    <AbsoluteFill>
      <div style={{width: "100%", height: "100%", transform: `scale(${cam})`}}>
        <Atmosphere intensity={0.55} driftX={driftX} driftY={frame * 0.08} scale={1.14} />
      </div>

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: spark,
        }}
      >
        <div
          style={{
            width: 140 * sparkPulse,
            height: 140 * sparkPulse,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${FILM.colors.accent} 0%, rgba(200,255,77,0.25) 35%, transparent 70%)`,
            filter: "blur(2px)",
            transform: `translate(${Math.sin(frame / fps) * 8}px, ${Math.cos(frame / fps) * 6}px)`,
          }}
        />
        <Img
          src={staticFile("brand/logo-mark.png")}
          style={{
            position: "absolute",
            width: 96,
            height: 96,
            objectFit: "contain",
            opacity: 0.35 + spark * 0.45,
            filter: "drop-shadow(0 0 28px rgba(200,255,77,0.35))",
          }}
        />
      </AbsoluteFill>

      <SelectiveType
        text={FILM.captions.opening.text}
        appear={[48, 72]}
        holdUntil={118}
        size={40}
      />
      <FilmVignette />
    </AbsoluteFill>
  );
};
