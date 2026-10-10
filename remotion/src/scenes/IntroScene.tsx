import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {TitleCard} from "../components/TitleCard";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a"}}>
      <Interactive.Div
        name="Intro backdrop"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#0f172a",
          opacity: interpolate(frame, [0, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <Img
        name="Sample logo"
        src={staticFile("sample-logo.png")}
        style={{
          position: "absolute",
          left: 80,
          bottom: 80,
          width: 96,
          height: 96,
          objectFit: "contain",
          opacity: interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
      <TitleCard
        name="Intro title"
        from={0}
        durationInFrames={90}
        premountFor={fps}
        accentColor="#38bdf8"
        style={{
          opacity: interpolate(frame, [0, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          scale: interpolate(frame, [0, 1 * fps], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({damping: 200}),
            output: "perceptual-scale",
          }),
        }}
      >
        Workflow Test
      </TitleCard>
      <Interactive.Div
        name="Intro subtitle"
        style={{
          position: "absolute",
          left: 80,
          top: 200,
          color: "#94a3b8",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: 32,
          opacity: interpolate(frame, [0.5 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.5 * fps, 1.5 * fps],
            ["0px 16px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        Studio + Sequences + render pipeline
      </Interactive.Div>
    </AbsoluteFill>
  );
};
