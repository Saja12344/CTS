import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {MaskReveal} from "../anim/MaskReveal";
import {TypedText} from "../anim/TypedText";
import {easings} from "../anim/easings";
import {BrowserFrame} from "../components/BrowserFrame";
import {CameraPlate} from "../components/CameraPlate";
import {SIG} from "../config";
import {filmFont} from "../fonts";

/** Abstract idea resolves into the real CTS hero inside a browser frame. */
export const BridgeScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const settle = interpolate(frame, [0, 50], [1.08, 1], {
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
          padding: 56,
          transform: `scale(${settle})`,
        }}
      >
        <MaskReveal startFrame={4} duration={22} direction="left-to-right" style={{width: "100%", height: "100%"}}>
          <BrowserFrame url="coretechsolutions.com" width="100%" height="100%">
            <CameraPlate
              src="cts-hq/hero.png"
              fromScale={1.08}
              toScale={1.02}
              fromY={20}
              toY={0}
              origin="40% 45%"
            />
          </BrowserFrame>
        </MaskReveal>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 56,
          background:
            "linear-gradient(180deg, transparent 60%, rgba(11,11,12,0.75) 100%)",
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 28,
            fontWeight: 500,
            color: SIG.colors.warmWhite,
            textAlign: "center",
            maxWidth: 920,
            textShadow: "0 2px 20px rgba(0,0,0,0.7)",
          }}
        >
          <TypedText
            text="A problem worth solving. A possibility worth exploring."
            startFrame={Math.round(0.9 * fps)}
            perWord={10}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
