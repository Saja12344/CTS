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
import { useColors, useFilmTheme } from "../FilmContext";
import { colors, easeOut } from "../theme";

type Node = {
  kind: "card" | "chart" | "image" | "widget" | "icon" | "text";
  x: number;
  y: number;
  w: number;
  h: number;
  appear: number;
  lift: number;
  fill: string;
  title?: string;
};

const NODES: Node[] = [
  { kind: "card", x: -280, y: -160, w: 180, h: 140, appear: 8, lift: 40, fill: colors.mist, title: "Brief" },
  { kind: "chart", x: 40, y: -180, w: 160, h: 130, appear: 18, lift: 48, fill: "#EEF1F3" },
  { kind: "image", x: 260, y: -80, w: 150, h: 120, appear: 28, lift: 55, fill: colors.mist },
  { kind: "widget", x: -320, y: 40, w: 150, h: 120, appear: 36, lift: 50, fill: "#EEF2EC" },
  { kind: "text", x: -40, y: 60, w: 200, h: 110, appear: 46, lift: 58, fill: colors.white, title: "Flow" },
  { kind: "icon", x: 240, y: 100, w: 90, h: 90, appear: 54, lift: 62, fill: "#F8EFE8" },
  { kind: "card", x: 80, y: 160, w: 170, h: 100, appear: 64, lift: 70, fill: colors.mist, title: "UI" },
];

export const Scene2Expand: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const themeColors = useColors();
  const { scene2Text } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 16, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const pan = interpolate(frame, [0, durationInFrames], [-30, 40], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pull = interpolate(frame, [0, durationInFrames], [1.08, 0.92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineProgress = interpolate(frame, [0, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: themeColors.canvas,
        opacity: fadeIn * fadeOut,
      }}
    >
      <AbsoluteFill
        style={{
          transform: `translateX(${pan}px) scale(${pull})`,
          transformOrigin: "50% 45%",
          perspective: 1200,
        }}
      >
        <svg
          width={1920}
          height={1080}
          style={{ position: "absolute", inset: 0 }}
          fill="none"
        >
          {NODES.map((n, i) => {
            const appear = interpolate(frame, [n.appear, n.appear + 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <line
                key={i}
                x1={960}
                y1={480}
                x2={960 + n.x + n.w / 2}
                y2={480 + n.y + n.h / 2}
                stroke={themeColors.ink}
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={0.35 * appear * lineProgress}
                strokeDasharray={400}
                strokeDashoffset={400 * (1 - appear * lineProgress)}
              />
            );
          })}
          <circle
            cx={960}
            cy={480}
            r={6}
            fill={themeColors.orange}
            opacity={interpolate(frame, [0, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}
          />
        </svg>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: 0,
            height: 0,
            transformStyle: "preserve-3d",
          }}
        >
          {NODES.map((n, i) => {
            const appear = interpolate(frame, [n.appear, n.appear + 14], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...easeOut),
            });
            const depth = interpolate(frame, [n.lift, n.lift + 22], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...easeOut),
            });
            const inkOnly = depth < 0.35;
            const scale = interpolate(appear, [0, 1], [0.82, 1]);
            const rotY = interpolate(depth, [0, 1], [0, i % 2 === 0 ? -12 : 10]);
            const rotX = interpolate(depth, [0, 1], [0, 8]);

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: n.x,
                  top: n.y,
                  transform: `scale(${scale})`,
                  opacity: appear,
                  transformStyle: "preserve-3d",
                }}
              >
                <ContentModule
                  kind={n.kind}
                  width={n.w}
                  height={n.h}
                  depth={depth}
                  fill={n.fill}
                  inkOnly={inkOnly}
                  title={n.title}
                  rotationY={rotY}
                  rotationX={rotX}
                />
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      <SceneText
        text={scene2Text}
        appearAt={48}
        holdUntil={100}
        fadeOutAt={124}
        bottom={120}
        left={140}
      />
    </AbsoluteFill>
  );
};
