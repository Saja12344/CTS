import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Smartphone } from "../components/Smartphone";
import { useColors } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene5Product: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 16, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const assemble = interpolate(frame, [0, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const rotateY = interpolate(assemble, [0, 1], [-42, -16]);
  const rotateX = interpolate(assemble, [0, 1], [18, 5]);
  const scale = interpolate(assemble, [0, 1], [0.7, 1.05]);
  const uiProgress = interpolate(frame, [22, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const highlight = interpolate(frame, [55, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitShift = interpolate(
    frame,
    [durationInFrames - 22, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, #FFFCF8 0%, ${colors.canvas} 55%, #E8E2DA 100%)`,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `translateX(${exitShift * -160}px) scale(${1 - exitShift * 0.08})`,
        }}
      >
        <Smartphone
          width={340}
          rotateY={rotateY}
          rotateX={rotateX}
          scale={scale}
          uiProgress={uiProgress}
          highlight={highlight}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
