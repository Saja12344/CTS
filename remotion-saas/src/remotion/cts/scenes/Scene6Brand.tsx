import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandWordmark } from "../components/BrandWordmark";
import { Smartphone } from "../components/Smartphone";
import { useColors } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene6Brand: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const phoneX = interpolate(frame, [0, 28], [-40, -380], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const phoneScale = interpolate(frame, [0, 28], [0.95, 0.72], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const phoneOpacity = interpolate(frame, [0, 40], [0.9, 0.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const wordmarkOpacity = interpolate(frame, [12, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const wordmarkRise = interpolate(frame, [12, 34], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.canvas,
        opacity: fadeIn,
      }}
    >
      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: `translateX(${phoneX}px) scale(${phoneScale})`,
            opacity: phoneOpacity,
          }}
        >
          <Smartphone
            width={300}
            rotateY={-12}
            rotateX={4}
            scale={1}
            uiProgress={1}
            highlight={0}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: "52%",
            transform: `translateX(-10%) translateY(${wordmarkRise}px)`,
            opacity: wordmarkOpacity,
          }}
        >
          <BrandWordmark showTagline />
        </div>
      </AbsoluteFill>

      {/* Hold readable through end — no extra slogans */}
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [durationInFrames - 8, durationInFrames], [0, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
