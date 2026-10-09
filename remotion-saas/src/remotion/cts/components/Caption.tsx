import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { space } from "../fonts";
import { easeOut } from "../theme";

export const Caption: React.FC<{
  text: string;
  appearAt?: number;
  holdUntil?: number;
  fadeOutAt?: number;
  color?: string;
  bottom?: number;
}> = ({
  text,
  appearAt = 10,
  holdUntil = 50,
  fadeOutAt,
  color = "rgba(255,255,255,0.88)",
  bottom = 160,
}) => {
  const frame = useCurrentFrame();
  const end = fadeOutAt ?? holdUntil + 16;
  const opacity = interpolate(
    frame,
    [appearAt, appearAt + 12, holdUntil, end],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(...easeOut) },
  );
  const y = interpolate(frame, [appearAt, appearAt + 14], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          left: 64,
          right: 64,
          bottom,
          opacity,
          transform: `translateY(${y}px)`,
          fontFamily: space,
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: "0.01em",
          lineHeight: 1.35,
          color,
          textAlign: "center",
          textShadow: "0 2px 24px rgba(0,0,0,0.35)",
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
