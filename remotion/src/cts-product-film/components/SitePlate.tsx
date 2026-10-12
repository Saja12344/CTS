import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {PRODUCT_FILM} from "../config";
import {filmFont} from "../fonts";

/** Authentic CTS site screenshot with slow cinematic Ken Burns. */
export const SitePlate: React.FC<{
  readonly src: string;
  readonly scaleFrom?: number;
  readonly scaleTo?: number;
  readonly panX?: number;
  readonly panY?: number;
}> = ({
  src,
  scaleFrom = 1.04,
  scaleTo = 1.1,
  panX = 0,
  panY = 0,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
  const scale = scaleFrom + (scaleTo - scaleFrom) * progress;
  const x = panX * progress;
  const y = panY * progress;

  return (
    <AbsoluteFill style={{backgroundColor: PRODUCT_FILM.colors.graphite, overflow: "hidden"}}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
          transformOrigin: "50% 40%",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

export const SelectiveCaption: React.FC<{
  readonly text: string;
  readonly appear: [number, number];
  readonly holdUntil: number;
}> = ({text, appear, holdUntil}) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, appear, [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const exit = interpolate(frame, [holdUntil - 16, holdUntil], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = enter * exit;
  if (opacity < 0.01) return null;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 72,
      }}
    >
      <div
        style={{
          fontFamily: filmFont,
          fontSize: 34,
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: PRODUCT_FILM.colors.warmWhite,
          textAlign: "center",
          maxWidth: 900,
          opacity,
          transform: `translateY(${(1 - enter) * 14}px)`,
          textShadow: "0 2px 24px rgba(0,0,0,0.65)",
        }}
      >
        {text}
      </div>
      <div
        style={{
          marginTop: 14,
          width: 44 * enter,
          height: 1,
          background: PRODUCT_FILM.colors.accent,
          opacity: opacity * 0.95,
        }}
      />
    </AbsoluteFill>
  );
};
