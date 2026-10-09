import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {SceneCaption} from "../components/SceneCaption";

/** 330–434 — quiet resolve */
export const ResolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const settle = interpolate(frame, [0, 1.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const breath = interpolate(
    frame,
    [1.2 * fps, durationInFrames],
    [1, 1.035],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.sin),
    },
  );

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        <div
          style={{
            width: 280 * breath,
            height: 280 * breath,
            borderRadius: 36,
            border: `1px solid ${BRAND.colors.titanium}`,
            opacity: 0.25 + settle * 0.55,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              backgroundColor: BRAND.colors.accent,
              opacity: 0.35 + settle * 0.65,
              transform: `rotate(45deg) scale(${0.7 + settle * 0.3})`,
              boxShadow: `0 0 48px rgba(200,255,77,${0.25 * settle})`,
            }}
          />
        </div>
        {/* Thin baseline */}
        <div
          style={{
            position: "absolute",
            width: 180 * settle,
            height: 1,
            top: "58%",
            backgroundColor: BRAND.colors.mutedGray,
            opacity: 0.7,
          }}
        />
      </AbsoluteFill>
      <SceneCaption text={BRAND.scenes.resolution.caption} enterAt={12} />
    </AbsoluteFill>
  );
};
