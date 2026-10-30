import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {Caption} from "../components/Caption";

/** Scene 1 — cinematic human thinking + temple spark */
export const HumanIdeaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const push = interpolate(frame, [0, durationInFrames], [1.05, 1.18], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const spark = spring({
    frame: frame - 28,
    fps,
    config: {damping: 18, stiffness: 120},
  });

  const sparkGlow = interpolate(frame, [28, 50, 89], [0, 1, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const vignette = interpolate(frame, [0, 40], [0.35, 0.55], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite, overflow: "hidden"}}>
      <AbsoluteFill
        style={{
          transform: `scale(${push})`,
          transformOrigin: "52% 38%",
        }}
      >
        <Img
          src={staticFile("film/thinker.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "52% 28%",
            filter: "saturate(0.92) contrast(1.05)",
          }}
        />
      </AbsoluteFill>

      {/* Cinematic grade */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 45% 35%, transparent 20%, rgba(0,0,0,${vignette}) 75%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(11,11,12,0.15) 0%, transparent 30%, rgba(11,11,12,0.55) 78%, rgba(11,11,12,0.88) 100%)",
        }}
      />

      {/* Idea spark near temple (right side of face / shadowed side) */}
      <div
        style={{
          position: "absolute",
          left: "68%",
          top: "34%",
          width: 18,
          height: 18,
          marginLeft: -9,
          marginTop: -9,
          borderRadius: "50%",
          backgroundColor: BRAND.colors.accent,
          opacity: Math.max(0, sparkGlow) * Math.min(1, Math.max(0, spark)),
          transform: `scale(${0.35 + Math.min(1, Math.max(0, spark)) * 0.9})`,
          boxShadow: `
            0 0 18px rgba(200,255,77,0.95),
            0 0 60px rgba(200,255,77,0.55),
            0 0 120px rgba(200,255,77,0.25)
          `,
        }}
      />

      <Caption text={BRAND.scenes.human.caption} enterAt={36} />
    </AbsoluteFill>
  );
};
