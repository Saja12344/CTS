import {Easing, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

type Props = {
  readonly text: string;
  readonly enterAt?: number;
  readonly exitEarly?: boolean;
};

export const Caption: React.FC<Props> = ({
  text,
  enterAt = 18,
  exitEarly = true,
}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const exitStart = exitEarly
    ? durationInFrames - Math.round(0.5 * fps)
    : durationInFrames + 10;

  const opacity = interpolate(
    frame,
    [enterAt, enterAt + 14, exitStart, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 64,
        right: 64,
        bottom: 160,
        textAlign: "center",
        fontFamily: brandFontFamily,
        fontSize: 34,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.35,
        color: BRAND.colors.warmWhite,
        textShadow: "0 8px 40px rgba(0,0,0,0.65)",
        opacity,
      }}
    >
      {text}
    </div>
  );
};
