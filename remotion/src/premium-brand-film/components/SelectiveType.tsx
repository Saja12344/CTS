import {AbsoluteFill, Easing, interpolate, useCurrentFrame} from "remotion";
import {FILM} from "../config";
import {filmFont} from "../fonts";

export const SelectiveType: React.FC<{
  readonly text: string;
  readonly appear: [number, number];
  readonly holdUntil: number;
  readonly size?: number;
  readonly y?: number;
}> = ({text, appear, holdUntil, size = 42, y = 0}) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, appear, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const exit = interpolate(frame, [holdUntil - 18, holdUntil], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = enter * exit;
  if (opacity <= 0.01) return null;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 96 + y,
      }}
    >
      <div
        style={{
          fontFamily: filmFont,
          fontSize: size,
          fontWeight: 500,
          letterSpacing: "-0.025em",
          color: FILM.colors.warmWhite,
          textAlign: "center",
          maxWidth: 980,
          opacity,
          transform: `translateY(${(1 - enter) * 16}px)`,
        }}
      >
        {text}
      </div>
      <div
        style={{
          marginTop: 18,
          width: 48 * enter,
          height: 1,
          background: FILM.colors.accent,
          opacity: opacity * 0.9,
        }}
      />
    </AbsoluteFill>
  );
};
