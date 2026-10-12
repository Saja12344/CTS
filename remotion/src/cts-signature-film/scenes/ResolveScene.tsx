import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {TypedText} from "../anim/TypedText";
import {easings} from "../anim/easings";
import {BrowserFrame} from "../components/BrowserFrame";
import {CameraPlate} from "../components/CameraPlate";
import {SIG} from "../config";
import {filmFont} from "../fonts";

/** Confident contact composition - purpose without fake claims. */
export const ResolveScene: React.FC = () => {
  const frame = useCurrentFrame();
  const pull = interpolate(frame, [0, 150], [1.1, 0.98], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: easings.cinematic,
  });

  return (
    <AbsoluteFill style={{backgroundColor: SIG.colors.graphite}}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 64,
          transform: `scale(${pull})`,
        }}
      >
        <BrowserFrame url="coretechsolutions.com/#contact" width="100%" height="100%">
          <CameraPlate
            src="cts-hq/contact.png"
            fromScale={1.06}
            toScale={1.0}
            fromY={16}
            toY={0}
            origin="50% 60%"
          />
        </BrowserFrame>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 64,
          background:
            "linear-gradient(180deg, transparent 55%, rgba(11,11,12,0.8) 100%)",
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
          <TypedText text="From the first concept to the final detail." startFrame={28} />
        </div>
        <div
          style={{
            marginTop: 14,
            width: interpolate(frame, [70, 100], [0, 44], {
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
