import {interpolate, useCurrentFrame} from "remotion";
import {easings} from "./easings";

export type MaskDirection =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";

export const MaskReveal: React.FC<{
  startFrame: number;
  duration?: number;
  direction?: MaskDirection;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({
  startFrame,
  duration = 16,
  direction = "left-to-right",
  children,
  style,
}) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame - startFrame, [0, duration], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.maskReveal,
  });

  let clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
  if (direction === "right-to-left") clipPath = `inset(0 0 0 ${(1 - p) * 100}%)`;
  if (direction === "top-to-bottom") clipPath = `inset(0 0 ${(1 - p) * 100}% 0)`;
  if (direction === "bottom-to-top") clipPath = `inset(${(1 - p) * 100}% 0 0 0)`;

  return (
    <div style={{clipPath, WebkitClipPath: clipPath, ...style}}>{children}</div>
  );
};
