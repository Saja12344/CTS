import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ContentModule } from "../components/ContentModule";
import { SceneText } from "../components/SceneText";
import { colors, easeOut } from "../theme";

const GRID = [
  { kind: "card" as const, gx: 0, gy: 0, w: 220, h: 150, fill: colors.white, title: "Brief" },
  { kind: "chart" as const, gx: 1, gy: 0, w: 220, h: 150, fill: "#EEF1F3" },
  { kind: "image" as const, gx: 2, gy: 0, w: 220, h: 150, fill: colors.mist },
  { kind: "widget" as const, gx: 0, gy: 1, w: 220, h: 140, fill: "#EEF2EC" },
  { kind: "text" as const, gx: 1, gy: 1, w: 220, h: 140, fill: colors.white, title: "Spine" },
  { kind: "card" as const, gx: 2, gy: 1, w: 220, h: 140, fill: "#F8EFE8", title: "Ship" },
];

export const Scene3Structure: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 18, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const assemble = interpolate(frame, [4, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const camZ = interpolate(frame, [0, durationInFrames], [0.95, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const focus = interpolate(frame, [50, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  const cellW = 240;
  const cellH = 170;
  const originX = -360;
  const originY = -180;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.canvas,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          perspective: 1400,
          transform: `scale(${camZ})`,
          transformOrigin: "50% 48%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "46%",
            transformStyle: "preserve-3d",
          }}
        >
          {GRID.map((item, i) => {
            const scatterX = ((i % 3) - 1) * 180 + (i > 2 ? 40 : -60);
            const scatterY = (Math.floor(i / 3) - 0.5) * 160 + (i % 2) * 50;
            const targetX = originX + item.gx * cellW;
            const targetY = originY + item.gy * cellH;
            const x = interpolate(assemble, [0, 1], [scatterX, targetX]);
            const y = interpolate(assemble, [0, 1], [scatterY, targetY]);
            const rot = interpolate(assemble, [0, 1], [i % 2 === 0 ? -16 : 14, 0]);
            const isSpine = item.gx === 1 && item.gy === 1;
            const scale = isSpine
              ? interpolate(focus, [0, 1], [1, 1.18])
              : interpolate(focus, [0, 1], [1, 0.92]);
            const opacity = isSpine
              ? 1
              : interpolate(focus, [0, 1], [1, 0.55]);

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: `rotateY(${rot}deg) scale(${scale})`,
                  opacity,
                  transformStyle: "preserve-3d",
                }}
              >
                <ContentModule
                  kind={item.kind}
                  width={item.w}
                  height={item.h}
                  depth={0.85}
                  fill={item.fill}
                  title={item.title}
                  rotationY={isSpine ? interpolate(focus, [0, 1], [-8, 0]) : -6}
                  rotationX={6}
                />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      <SceneText
        text="Designed with purpose."
        appearAt={28}
        holdUntil={78}
        fadeOutAt={100}
        bottom={110}
        left={140}
      />
    </AbsoluteFill>
  );
};
