import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

/** Soft fade-in at scene start (no fade-out — avoids black dips on hard cuts). */
export const SceneFade: React.FC<{readonly children: React.ReactNode}> = ({
  children,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return <AbsoluteFill style={{opacity}}>{children}</AbsoluteFill>;
};
