import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {SceneCaption} from "../components/SceneCaption";

/** 0–74 — one geometric idea spark */
export const SparkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = spring({
    frame,
    fps,
    config: {damping: 200, stiffness: 80, mass: 1},
  });

  const glow = interpolate(frame, [0, 20, 60, 74], [0, 0.55, 0.4, 0.25], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineWidth = interpolate(frame, [8, 40], [0, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Soft radial presence — not a blob particle field */}
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(200,255,77,${glow * 0.12}) 0%, transparent 65%)`,
          }}
        />
        <div
          style={{
            width: 14,
            height: 14,
            backgroundColor: BRAND.colors.accent,
            borderRadius: 2,
            transform: `rotate(45deg) scale(${0.35 + progress * 0.65})`,
            boxShadow: `0 0 40px rgba(200,255,77,${0.35 * progress})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: lineWidth,
            height: 1,
            backgroundColor: BRAND.colors.titanium,
            opacity: 0.55,
          }}
        />
      </AbsoluteFill>
      <SceneCaption text={BRAND.scenes.spark.caption} enterAt={16} />
    </AbsoluteFill>
  );
};
