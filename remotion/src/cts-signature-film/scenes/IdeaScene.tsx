import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {TypedText} from "../anim/TypedText";
import {easings} from "../anim/easings";
import {SIG} from "../config";
import {filmFont} from "../fonts";

export const IdeaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const push = interpolate(frame, [0, 120], [1.1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.cinematic,
  });
  const spark = interpolate(frame, [8, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.maskReveal,
  });

  return (
    <AbsoluteFill style={{backgroundColor: SIG.colors.graphite}}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 48%, rgba(200,255,77,0.12), transparent 52%)",
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${push})`,
          opacity: spark,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,255,77,0.32) 0%, transparent 68%)",
            filter: "blur(1px)",
          }}
        />
        <Img
          src={staticFile("brand/hero-metallic.jpg")}
          style={{
            width: 340,
            height: 340,
            objectFit: "contain",
            filter: "drop-shadow(0 28px 70px rgba(0,0,0,0.55))",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 72,
          opacity: interpolate(frame, [16, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 12,
            letterSpacing: "0.32em",
            color: SIG.colors.muted,
            fontWeight: 500,
          }}
        >
          {SIG.name}
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 88,
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 36,
            fontWeight: 500,
            color: SIG.colors.warmWhite,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          <TypedText text="Every great product begins with an idea." startFrame={42} />
        </div>
        <div
          style={{
            marginTop: 16,
            width: interpolate(frame, [70, 95], [0, 48], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 1,
            background: SIG.colors.accent,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
