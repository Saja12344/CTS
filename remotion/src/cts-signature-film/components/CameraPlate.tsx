import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {easings} from "../anim/easings";

/** Deterministic cinematic pan/zoom across a real interface asset. */
export const CameraPlate: React.FC<{
  readonly src: string;
  readonly fromScale?: number;
  readonly toScale?: number;
  readonly fromX?: number;
  readonly toX?: number;
  readonly fromY?: number;
  readonly toY?: number;
  readonly origin?: string;
  readonly objectFit?: "cover" | "contain";
}> = ({
  src,
  fromScale = 1.05,
  toScale = 1.14,
  fromX = 0,
  toX = 0,
  fromY = 0,
  toY = 0,
  origin = "50% 40%",
  objectFit = "cover",
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const p = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.soft,
  });
  const scale = fromScale + (toScale - fromScale) * p;
  const x = fromX + (toX - fromX) * p;
  const y = fromY + (toY - fromY) * p;

  return (
    <AbsoluteFill style={{overflow: "hidden"}}>
      <Img
        src={staticFile(src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit,
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
          transformOrigin: origin,
        }}
      />
    </AbsoluteFill>
  );
};
