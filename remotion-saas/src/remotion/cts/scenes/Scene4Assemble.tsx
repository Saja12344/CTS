import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Caption } from "../components/Caption";
import { PremiumPhone } from "../components/PremiumPhone";
import { BookingUI } from "../components/ui/BookingUI";
import { DashboardUI } from "../components/ui/DashboardUI";
import { TasksUI } from "../components/ui/TasksUI";
import { useColors, useFilmTheme } from "../FilmContext";
import { easeOut } from "../theme";

export const Scene4Assemble: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { scene4Text } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [durationInFrames - 16, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const assemble = interpolate(frame, [8, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const phoneIn = interpolate(frame, [0, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const orbit = interpolate(frame, [0, durationInFrames], [-26, -8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const settle = interpolate(frame, [80, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const fly = (fromX: number, fromY: number, fromScale: number) => ({
    opacity: interpolate(assemble, [0, 0.35], [1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
    transform: `
      translate(
        ${interpolate(assemble, [0, 1], [fromX, 0])}px,
        ${interpolate(assemble, [0, 1], [fromY, 40])}px
      )
      scale(${interpolate(assemble, [0, 1], [fromScale, 0.25])})
      rotateY(${interpolate(assemble, [0, 1], [fromX > 0 ? 18 : -18, 0])}deg)
    `,
  });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 45%, #2C241E 0%, ${colors.charcoal} 50%, ${colors.graphite} 100%)`,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill style={{ perspective: 1600 }}>
        <div style={{ position: "absolute", left: -40, top: 180, ...fly(-220, -80, 0.85) }}>
          <DashboardUI width={420} height={290} />
        </div>
        <div style={{ position: "absolute", right: -20, top: 260, ...fly(240, -40, 0.9) }}>
          <BookingUI width={240} height={450} />
        </div>
        <div style={{ position: "absolute", left: 40, bottom: 120, ...fly(-160, 120, 0.8) }}>
          <TasksUI width={440} height={260} />
        </div>

        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: phoneIn,
            transform: `translateY(${interpolate(phoneIn, [0, 1], [80, 0])}px) scale(${0.82 + phoneIn * 0.18 + settle * 0.04})`,
          }}
        >
          <PremiumPhone
            width={380}
            rotateY={orbit}
            rotateX={interpolate(settle, [0, 1], [12, 4])}
            scale={1}
          />
        </AbsoluteFill>
      </AbsoluteFill>

      <Caption text={scene4Text} appearAt={70} holdUntil={120} fadeOutAt={145} />
    </AbsoluteFill>
  );
};
