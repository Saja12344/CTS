import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CodeEditor } from "../components/CodeEditor";
import { SceneText } from "../components/SceneText";
import { useColors, useFilmTheme } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene4Code: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { scene4Text } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const morph = interpolate(frame, [0, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const codeProgress = interpolate(frame, [24, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cardScale = interpolate(morph, [0, 1], [0.55, 1]);
  const cardRadius = interpolate(morph, [0, 1], [12, 14]);

  const exitFold = interpolate(
    frame,
    [durationInFrames - 28, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.canvas,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 1400,
        }}
      >
        <div
          style={{
            transform: `
              scale(${cardScale * interpolate(exitFold, [0, 1], [1, 0.72])})
              rotateX(${interpolate(exitFold, [0, 1], [4, 18])}deg)
              rotateY(${interpolate(morph, [0, 1], [-18, -6]) + exitFold * -8}deg)
            `,
            transformStyle: "preserve-3d",
            borderRadius: cardRadius,
            overflow: "hidden",
          }}
        >
          <CodeEditor progress={codeProgress} width={820} height={500} />
        </div>
      </AbsoluteFill>

      <SceneText
        text={scene4Text}
        appearAt={36}
        holdUntil={100}
        fadeOutAt={125}
        bottom={100}
        left={140}
        color={colors.ink}
      />
    </AbsoluteFill>
  );
};
