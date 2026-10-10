import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a"}}>
      <Interactive.Div
        name="Outro title"
        style={{
          position: "absolute",
          left: 80,
          top: 280,
          color: "#f8fafc",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 64,
          fontWeight: 700,
          opacity: interpolate(frame, [0, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [durationInFrames - 20, durationInFrames],
            ["0px 0px", "0px -24px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Render verified
      </Interactive.Div>
      <Interactive.Div
        name="Outro hint"
        style={{
          position: "absolute",
          left: 80,
          top: 370,
          color: "#94a3b8",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 28,
          opacity: interpolate(frame, [0.4 * fps, 1.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Edit props in Studio · Export with remotion render
      </Interactive.Div>
    </AbsoluteFill>
  );
};
