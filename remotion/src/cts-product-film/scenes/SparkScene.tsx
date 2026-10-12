import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {SelectiveCaption} from "../components/SitePlate";
import {PRODUCT_FILM} from "../config";
import {filmFont} from "../fonts";

/** Brief brand spark — then yield to real product UI. */
export const SparkScene: React.FC = () => {
  const frame = useCurrentFrame();
  const push = interpolate(frame, [0, 150], [1.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });
  const spark = interpolate(frame, [12, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: PRODUCT_FILM.colors.graphite}}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(200,255,77,0.1), transparent 55%)",
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
            width: 260,
            height: 260,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,255,77,0.35) 0%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
        <Img
          src={staticFile("brand/hero-metallic.jpg")}
          style={{
            width: 320,
            height: 320,
            objectFit: "contain",
            filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.55))",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 80,
          opacity: interpolate(frame, [20, 45], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 13,
            letterSpacing: "0.28em",
            color: PRODUCT_FILM.colors.mutedGray,
          }}
        >
          CORE TECH SOLUTIONS
        </div>
      </AbsoluteFill>
      <SelectiveCaption
        text="Every great product begins with an idea."
        appear={[48, 72]}
        holdUntil={145}
      />
    </AbsoluteFill>
  );
};
