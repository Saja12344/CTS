import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {TypedText} from "../anim/TypedText";
import {easings} from "../anim/easings";
import {SIG} from "../config";
import {filmFont} from "../fonts";

export const BrandRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();

  const iris = interpolate(frame, [0, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.violentPush,
  });
  const maxR = Math.hypot(width, height) / 2 + 80;
  const radius = iris * maxR;

  const logoSpring = spring({
    frame: Math.max(0, frame - 18),
    fps,
    config: {damping: 200, stiffness: 85, mass: 0.85},
  });
  const logoIn = interpolate(frame, [14, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.cinematic,
  });

  return (
    <AbsoluteFill style={{backgroundColor: SIG.colors.graphite}}>
      <AbsoluteFill
        style={{
          clipPath: `circle(${radius}px at 50% 48%)`,
          WebkitClipPath: `circle(${radius}px at 50% 48%)`,
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(200,255,77,0.08), transparent 50%)",
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: logoIn,
          transform: `translateY(${(1 - logoSpring) * 20}px) scale(${0.94 + logoSpring * 0.06})`,
          paddingBottom: 36,
        }}
      >
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 22}}>
          <Img
            src={staticFile("brand/logo-lockup.png")}
            style={{width: 560, height: "auto", objectFit: "contain"}}
          />
          <div
            style={{
              fontFamily: filmFont,
              fontSize: 15,
              letterSpacing: "0.34em",
              fontWeight: 600,
              color: SIG.colors.titanium,
            }}
          >
            {SIG.name}
          </div>
          <div
            style={{
              width: 56 * logoIn,
              height: 1,
              background: SIG.colors.accent,
            }}
          />
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 78,
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 30,
            fontWeight: 500,
            color: SIG.colors.warmWhite,
            textAlign: "center",
          }}
        >
          <TypedText text={SIG.tagline} startFrame={70} perWord={10} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
