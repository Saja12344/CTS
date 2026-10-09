import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Caption } from "../components/Caption";
import { useColors, useFilmTheme } from "../FilmContext";
import { easeOut } from "../theme";

const ORBS = [
  { s: 0.35, x: 0, y: 0, delay: 0 },
  { s: 0.7, x: -40, y: 30, delay: 6 },
  { s: 1.1, x: 50, y: -20, delay: 12 },
  { s: 1.8, x: -20, y: 10, delay: 20 },
  { s: 2.8, x: 10, y: -40, delay: 28 },
  { s: 4.2, x: 0, y: 0, delay: 38 },
];

export const Scene2Grow: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { scene2Text } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const camZ = interpolate(frame, [0, durationInFrames], [1, 1.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const fill = interpolate(frame, [20, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill style={{ backgroundColor: colors.graphite, opacity: fadeIn * fadeOut }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 42%, ${colors.orange}33 0%, ${colors.charcoal} 42%, ${colors.graphite} 100%)`,
          transform: `scale(${camZ})`,
        }}
      />

      <AbsoluteFill
        style={{
          perspective: 1200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {ORBS.map((o, i) => {
          const local = interpolate(frame, [o.delay, o.delay + 36], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(...easeOut),
          });
          const size = 140 * o.s * (0.4 + local * 0.9) * (1 + fill * 0.85);
          const glow = i < 2 ? colors.orange : i < 4 ? colors.orangeSoft : colors.titanium;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                transform: `translate(${o.x * (1 - fill * 0.3)}px, ${o.y * (1 - fill * 0.3)}px) rotateX(${18 - fill * 10}deg)`,
                background: `radial-gradient(circle at 35% 30%, ${glow}aa 0%, ${glow}22 45%, transparent 70%)`,
                border: `1px solid ${colors.glassBorder}`,
                boxShadow: `0 0 ${40 + i * 18}px ${glow}55, inset 0 0 ${30 + i * 10}px ${colors.glass}`,
                opacity: 0.35 + local * 0.45,
                backdropFilter: "blur(8px)",
              }}
            />
          );
        })}

        {/* Flow ribbons */}
        {[0, 1, 2, 3].map((i) => {
          const t = interpolate(frame, [10 + i * 8, 70 + i * 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={`r-${i}`}
              style={{
                position: "absolute",
                width: 420 + i * 80,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${colors.orange}cc, ${colors.titanium}88, transparent)`,
                transform: `rotate(${-35 + i * 22}deg) scaleX(${t})`,
                opacity: 0.35 + t * 0.35,
                transformOrigin: "center",
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Full-frame immersion veil */}
      <AbsoluteFill
        style={{
          opacity: fill * 0.85,
          background: `radial-gradient(circle at 50% 45%, ${colors.orange}66 0%, ${colors.warmWhite}22 35%, ${colors.charcoal}ee 75%, ${colors.graphite} 100%)`,
        }}
      />

      <Caption text={scene2Text} appearAt={40} holdUntil={78} fadeOutAt={100} />
    </AbsoluteFill>
  );
};
