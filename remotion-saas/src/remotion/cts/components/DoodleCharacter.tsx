import React from "react";
import { Easing, interpolate } from "remotion";
import { useColors } from "../FilmContext";
import { easeOut } from "../theme";

type Props = {
  drawProgress: number;
  sparkProgress: number;
  scale?: number;
};

/** Minimal thinker profile — ink strokes with progressive draw-on */
export const DoodleCharacter: React.FC<Props> = ({
  drawProgress,
  sparkProgress,
  scale = 1,
}) => {
  const colors = useColors();
  const head = pathProgress(drawProgress, 0, 0.38);
  const nose = pathProgress(drawProgress, 0.32, 0.48);
  const jaw = pathProgress(drawProgress, 0.42, 0.62);
  const shoulder = pathProgress(drawProgress, 0.55, 0.82);
  const arm = pathProgress(drawProgress, 0.72, 0.95);
  const spark = sparkProgress;

  return (
    <svg
      width={420 * scale}
      height={480 * scale}
      viewBox="0 0 420 480"
      fill="none"
      style={{ overflow: "visible" }}
    >
      <Stroke
        d="M210 70 C268 72 312 118 308 178 C304 238 258 278 208 275 C168 273 138 248 128 212"
        progress={head}
        length={420}
        color={colors.ink}
      />
      <Stroke
        d="M250 155 C262 168 268 182 262 198"
        progress={nose}
        length={90}
        color={colors.ink}
      />
      <Stroke
        d="M208 275 C200 300 196 320 198 345"
        progress={jaw}
        length={90}
        color={colors.ink}
      />
      <Stroke
        d="M198 345 C150 355 95 370 70 400 M198 345 C250 352 310 365 360 385"
        progress={shoulder}
        length={340}
        color={colors.ink}
      />
      <Stroke
        d="M250 250 C275 265 288 290 285 318 C282 340 268 352 250 348"
        progress={arm}
        length={180}
        color={colors.ink}
      />

      <g
        opacity={interpolate(spark, [0, 0.2], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
        transform={`translate(318, 118) scale(${interpolate(spark, [0, 1], [0.4, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(...easeOut),
        })})`}
      >
        <circle cx={0} cy={0} r={5} fill={colors.orange} />
        <Stroke
          d="M0 -22 L0 -10 M0 10 L0 22 M-22 0 L-10 0 M10 0 L22 0 M-14 -14 L-7 -7 M7 7 L14 14 M14 -14 L7 -7 M-7 7 L-14 14"
          progress={interpolate(spark, [0.1, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}
          length={160}
          color={colors.ink}
          width={2}
        />
      </g>
    </svg>
  );
};

const Stroke: React.FC<{
  d: string;
  progress: number;
  length: number;
  color: string;
  width?: number;
}> = ({ d, progress, length, color, width = 2.4 }) => {
  const p = Math.max(0, Math.min(1, progress));
  return (
    <path
      d={d}
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      strokeDasharray={length}
      strokeDashoffset={length * (1 - p)}
    />
  );
};

function pathProgress(global: number, start: number, end: number) {
  return interpolate(global, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
}
