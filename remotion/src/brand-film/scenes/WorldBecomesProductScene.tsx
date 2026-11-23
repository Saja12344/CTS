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

/** Scene 3 — abstract world resolves into distinct product UIs in depth */
export const WorldBecomesProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const worldFade = interpolate(frame, [0, 24], [1, 0.15], {
    extrapolateRight: "clamp",
  });

  const dash = spring({frame: frame - 8, fps, config: {damping: 200}});
  const mobile = spring({frame: frame - 22, fps, config: {damping: 200}});
  const commerce = spring({frame: frame - 36, fps, config: {damping: 180}});

  const orbit = interpolate(frame, [0, 120], [-8, 10], {
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.sin),
  });

  const expand = interpolate(frame, [70, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.colors.graphite,
        perspective: 1400,
        overflow: "hidden",
      }}
    >
      {/* Residual idea-world atmosphere */}
      <AbsoluteFill
        style={{
          opacity: worldFade,
          background:
            "radial-gradient(circle at 50% 40%, rgba(200,255,77,0.18), transparent 50%)",
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, #17181A 0%, #0B0B0C 70%)",
        }}
      />

      <AbsoluteFill
        style={{
          transform: `rotateY(${orbit}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Dashboard — back left */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "38%",
            marginLeft: -360 - expand * 40,
            marginTop: -260,
            opacity: Math.min(1, Math.max(0, dash)),
            transform: `
              translateZ(${-120 + expand * 40}px)
              translateY(${(1 - Math.min(1, Math.max(0, dash))) * 80}px)
              rotateY(18deg)
              rotateX(8deg)
              scale(${0.72 + Math.min(1, Math.max(0, dash)) * 0.08})
            `,
            filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.45))",
          }}
        >
          <DashboardUI scale={0.92} />
        </div>

        {/* Mobile — front center-right */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "42%",
            marginLeft: 40 + expand * 30,
            marginTop: -280,
            opacity: Math.min(1, Math.max(0, mobile)),
            transform: `
              translateZ(${80 + expand * 60}px)
              translateY(${(1 - Math.min(1, Math.max(0, mobile))) * 100}px)
              rotateY(-12deg)
              rotateX(4deg)
              scale(${0.78 + Math.min(1, Math.max(0, mobile)) * 0.08})
            `,
            filter: "drop-shadow(0 50px 70px rgba(0,0,0,0.55))",
          }}
        >
          <MobileProductUI scale={0.85} />
        </div>

        {/* Commerce — mid depth */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "58%",
            marginLeft: -280,
            marginTop: 40 - expand * 20,
            opacity: Math.min(1, Math.max(0, commerce)) * 0.98,
            transform: `
              translateZ(${-20 + expand * 30}px)
              translateY(${(1 - Math.min(1, Math.max(0, commerce))) * 90}px)
              rotateY(8deg)
              rotateX(-4deg)
              scale(${0.7 + Math.min(1, Math.max(0, commerce)) * 0.1})
            `,
            filter: "drop-shadow(0 36px 50px rgba(0,0,0,0.45))",
          }}
        >
          <CommerceUI scale={0.9} />
        </div>
      </AbsoluteFill>

      <Caption text={BRAND.scenes.world.caption} enterAt={28} />
    </AbsoluteFill>
  );
};
