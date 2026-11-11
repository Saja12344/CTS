import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Caption } from "../components/Caption";
import { BookingUI } from "../components/ui/BookingUI";
import { DashboardUI } from "../components/ui/DashboardUI";
import { TasksUI } from "../components/ui/TasksUI";
import { useColors, useFilmTheme } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene3Product: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { scene3Text } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const world = interpolate(frame, [0, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const drift = interpolate(frame, [0, durationInFrames], [-20, 30], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, #2A211C 0%, ${colors.charcoal} 45%, ${colors.graphite} 100%)`,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          perspective: 1600,
          transform: `translateX(${drift}px)`,
        }}
      >
        {/* Dashboard */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "18%",
            marginLeft: -260,
            opacity: world,
            transform: `
              translateY(${interpolate(world, [0, 1], [80, 0])}px)
              rotateY(${interpolate(world, [0, 1], [-28, -12])}deg)
              rotateX(8deg)
              scale(${0.85 + world * 0.15})
            `,
            transformStyle: "preserve-3d",
          }}
        >
          <DashboardUI />
        </div>

        {/* Booking mobile */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "42%",
            opacity: interpolate(frame, [18, 48], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `
              translateY(${interpolate(frame, [18, 48], [60, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...easeOut),
              })}px)
              rotateY(16deg)
              rotateX(6deg)
              scale(0.92)
            `,
            transformStyle: "preserve-3d",
          }}
        >
          <BookingUI />
        </div>

        {/* Tasks board */}
        <div
          style={{
            position: "absolute",
            right: "4%",
            bottom: "12%",
            opacity: interpolate(frame, [32, 62], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `
              translateY(${interpolate(frame, [32, 62], [50, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(...easeOut),
              })}px)
              rotateY(-14deg)
              rotateX(10deg)
              scale(0.78)
            `,
            transformStyle: "preserve-3d",
          }}
        >
          <TasksUI />
        </div>
      </AbsoluteFill>

      <Caption text={scene3Text} appearAt={50} holdUntil={100} fadeOutAt={120} />
    </AbsoluteFill>
  );
};
