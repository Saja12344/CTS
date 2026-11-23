import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {GeometricBadge} from "../components/GeometricBadge";

export const LayersDemoScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const bounce = spring({
    frame,
    fps,
    config: {damping: 14, stiffness: 120},
  });

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a"}}>
      <Interactive.Div
        name="Surface panel"
        style={{
          position: "absolute",
          left: 80,
          top: 80,
          right: 80,
          bottom: 80,
          backgroundColor: "#1e293b",
          borderRadius: 28,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Interactive.Div
        name="Layer label"
        style={{
          position: "absolute",
          left: 120,
          top: 120,
          color: "#f8fafc",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 48,
          fontWeight: 700,
          scale: interpolate(frame, [0, 1 * fps], [0.8, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({damping: 200}),
            output: "perceptual-scale",
          }),
        }}
      >
        Layers & motion
      </Interactive.Div>
      <Interactive.Div
        name="Moving bar"
        style={{
          position: "absolute",
          left: 120,
          top: 240,
          width: 420,
          height: 18,
          borderRadius: 999,
          backgroundColor: "#38bdf8",
          scale: `${bounce}`,
          transformOrigin: "left center",
        }}
      />
      <GeometricBadge
        name="Geo badge"
        from={15}
        durationInFrames={75}
        premountFor={fps}
        label="GEO"
        fill="#38bdf8"
        style={{
          rotate: interpolate(frame, [15, 15 + 1 * fps], ["-12deg", "0deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({damping: 200}),
          }),
          opacity: interpolate(frame, [15, 15 + 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
