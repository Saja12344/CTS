import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DoodleCharacter } from "../components/DoodleCharacter";
import { SceneText } from "../components/SceneText";
import { colors, easeOut } from "../theme";

export const Scene1Spark: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const draw = interpolate(frame, [5, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const spark = interpolate(frame, [58, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const cam = interpolate(frame, [0, durationInFrames], [1, 1.04], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - 14, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ backgroundColor: colors.canvas, opacity: fadeOut }}>
      <AbsoluteFill
        style={{
          transform: `scale(${cam})`,
          transformOrigin: "45% 42%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 180,
        }}
      >
        <DoodleCharacter drawProgress={draw} sparkProgress={spark} scale={1.15} />
      </AbsoluteFill>
      <SceneText
        text="Every idea starts somewhere."
        appearAt={38}
        holdUntil={72}
        fadeOutAt={88}
        bottom={140}
        left={140}
      />
    </AbsoluteFill>
  );
};
