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
            width: 220 * sparkPulse,
            height: 220 * sparkPulse,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${FILM.colors.accent} 0%, rgba(200,255,77,0.22) 32%, transparent 70%)`,
            filter: "blur(2px)",
            transform: `translate(${Math.sin(frame / fps) * 8}px, ${Math.cos(frame / fps) * 6}px)`,
          }}
        />
        {/* Authentic CTS sculptural mark — no badge/box treatment */}
        <Img
          src={staticFile("brand/hero-metallic.jpg")}
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            objectFit: "contain",
            opacity: 0.7 + spark * 0.25,
            filter: "drop-shadow(0 0 40px rgba(200,255,77,0.35))",
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
