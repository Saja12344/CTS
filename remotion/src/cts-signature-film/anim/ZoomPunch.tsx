import {interpolate, useCurrentFrame} from "remotion";
import {easings} from "./easings";

export const ZoomPunch: React.FC<{
  start: number;
  peak: number;
  end: number;
  peakScale?: number;
  children: React.ReactNode;
  transformOrigin?: string;
  style?: React.CSSProperties;
}> = ({
  start,
  peak,
  end,
  peakScale = 1.05,
  children,
  transformOrigin = "center",
  style,
}) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [start, peak, end], [1, peakScale, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.slowInLand,
  });

  return (
    <div style={{transform: `scale(${scale})`, transformOrigin, ...style}}>
      {children}
    </div>
  );
};
