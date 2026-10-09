import {
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

type Props = {
  readonly text: string;
  /** Local-frame fade-in start (default 12). */
  readonly enterAt?: number;
};

export const SceneCaption: React.FC<Props> = ({text, enterAt = 12}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const exitStart = durationInFrames - Math.round(0.45 * fps);

  const opacity = interpolate(
    frame,
    [enterAt, enterAt + 18, exitStart, durationInFrames],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    },
  );

  const translateY = interpolate(frame, [enterAt, enterAt + 18], [18, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 72,
        right: 72,
        bottom: 220,
        textAlign: "center",
        fontFamily: brandFontFamily,
        fontSize: 38,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: 1.35,
        color: BRAND.colors.titanium,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {text}
    </div>
  );
};
