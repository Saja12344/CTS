import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Caption } from "../components/Caption";
import { useColors, useFilmTheme } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene1Human: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { scene1Text } = useFilmTheme();

  const push = interpolate(frame, [0, durationInFrames], [1.05, 1.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const panX = interpolate(frame, [0, durationInFrames], [0, -30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const spark = interpolate(frame, [34, 52], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const sparkPulse = 0.85 + Math.sin(frame * 0.35) * 0.15;

  const fadeOut = interpolate(frame, [durationInFrames - 14, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.graphite, opacity: fadeOut }}>
      <AbsoluteFill
        style={{
          transform: `scale(${push}) translate(${panX}px, 20px)`,
          transformOrigin: "58% 38%",
        }}
      >
        <Img
          src={staticFile("cts/thinker.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(0.92) contrast(1.05)",
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 55% 35%, transparent 0%, rgba(11,11,12,0.15) 45%, rgba(11,11,12,0.72) 100%)",
        }}
      />

      {/* Idea spark near temple */}
      <div
        style={{
          position: "absolute",
          left: "62%",
          top: "34%",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: colors.orange,
          opacity: spark,
          transform: `scale(${spark * sparkPulse})`,
          boxShadow: `
            0 0 ${12 + spark * 28}px ${colors.orange},
            0 0 ${40 + spark * 60}px ${colors.orangeSoft}99,
            0 0 ${90 + spark * 40}px ${colors.orange}44
          `,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "62%",
          top: "34%",
          width: 80,
          height: 80,
          marginLeft: -31,
          marginTop: -31,
          borderRadius: "50%",
          border: `1px solid ${colors.orange}66`,
          opacity: spark * 0.55,
          transform: `scale(${0.4 + spark * 1.2})`,
        }}
      />

      <Caption text={scene1Text} appearAt={48} holdUntil={72} fadeOutAt={88} bottom={180} />
    </AbsoluteFill>
  );
};
