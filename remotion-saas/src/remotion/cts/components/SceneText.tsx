import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { useColors } from "../FilmContext";
import { sora } from "../fonts";
import { easeOut } from "../theme";

type Props = {
  text: string;
  appearAt?: number;
  holdUntil?: number;
  fadeOutAt?: number;
  align?: "left" | "center" | "right";
  bottom?: number;
  left?: number;
  right?: number;
  size?: number;
  color?: string;
  weight?: number;
  tracking?: string;
};

export const SceneText: React.FC<Props> = ({
  text,
  appearAt = 12,
  holdUntil = 60,
  fadeOutAt,
  align = "left",
  bottom = 120,
  left = 120,
  right,
  size = 36,
  color,
  weight = 500,
  tracking = "0.01em",
}) => {
  const frame = useCurrentFrame();
  const colors = useColors();
  const resolvedColor = color ?? colors.ink;
  const fadeEnd = fadeOutAt ?? holdUntil + 18;

  const opacity = interpolate(
    frame,
    [appearAt, appearAt + 14, holdUntil, fadeEnd],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(...easeOut),
    },
  );

  const rise = interpolate(frame, [appearAt, appearAt + 16], [10, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        justifyContent: "flex-end",
        alignItems:
          align === "center"
            ? "center"
            : align === "right"
              ? "flex-end"
              : "flex-start",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom,
          left: align === "left" ? left : undefined,
          right: align === "right" ? (right ?? left) : undefined,
          opacity,
          transform: `translateY(${rise}px)`,
          fontFamily: sora,
          fontSize: size,
          fontWeight: weight,
          color: resolvedColor,
          letterSpacing: tracking,
          lineHeight: 1.35,
          maxWidth: 720,
          textAlign: align,
        }}
      >
        {text}
      </div>
    </AbsoluteFill>
  );
};
