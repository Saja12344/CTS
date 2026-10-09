import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {Caption} from "../components/Caption";
import {CommerceUI} from "../ui/CommerceUI";
import {DashboardUI} from "../ui/DashboardUI";
import {MobileProductUI} from "../ui/MobileProductUI";
import {PhoneDevice} from "../ui/PhoneDevice";

/** Scene 4 — UI world converges into a premium smartphone */
export const AssemblyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const phoneIn = spring({
    frame: frame - 6,
    fps,
    config: {damping: 18, stiffness: 80},
  });

  const converge = interpolate(frame, [20, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const settle = interpolate(frame, [90, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const orbit = interpolate(frame, [0, durationInFrames], [16, -6], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const panelOpacity = interpolate(converge, [0.7, 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.colors.graphite,
        perspective: 1400,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(200,255,77,0.1), transparent 55%)",
        }}
      />

      {/* Converging panels */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "42%",
          opacity: panelOpacity,
          transform: `
            translate(-50%, -50%)
            translate(${interpolate(converge, [0, 1], [-420, -20])}px, ${interpolate(converge, [0, 1], [-180, 0])}px)
            scale(${interpolate(converge, [0, 1], [0.55, 0.18])})
            rotateY(${interpolate(converge, [0, 1], [25, 0])}deg)
          `,
        }}
      >
        <DashboardUI />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "48%",
          opacity: panelOpacity,
          transform: `
            translate(-50%, -50%)
            translate(${interpolate(converge, [0, 1], [380, 10])}px, ${interpolate(converge, [0, 1], [-40, 10])}px)
            scale(${interpolate(converge, [0, 1], [0.5, 0.16])})
            rotateY(${interpolate(converge, [0, 1], [-22, 0])}deg)
          `,
        }}
      >
        <MobileProductUI />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "62%",
          opacity: panelOpacity,
          transform: `
            translate(-50%, -50%)
            translate(${interpolate(converge, [0, 1], [-60, 0])}px, ${interpolate(converge, [0, 1], [280, 40])}px)
            scale(${interpolate(converge, [0, 1], [0.48, 0.14])})
            rotateX(${interpolate(converge, [0, 1], [18, 0])}deg)
          `,
        }}
      >
        <CommerceUI />
      </div>

      {/* Phone */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `
            translateY(${(1 - Math.min(1, Math.max(0, phoneIn))) * 120 - settle * 20}px)
            rotateY(${orbit}deg)
            scale(${0.86 + Math.min(1, Math.max(0, phoneIn)) * 0.14})
          `,
          opacity: Math.min(1, Math.max(0.15, phoneIn)),
        }}
      >
        <PhoneDevice width={430} />
      </AbsoluteFill>

      <Caption text={BRAND.scenes.assembly.caption} enterAt={70} />
    </AbsoluteFill>
  );
};
