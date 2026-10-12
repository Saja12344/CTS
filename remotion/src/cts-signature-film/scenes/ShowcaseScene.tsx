import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {MaskReveal} from "../anim/MaskReveal";
import {TypedText} from "../anim/TypedText";
import {ZoomPunch} from "../anim/ZoomPunch";
import {easings} from "../anim/easings";
import {BrowserFrame} from "../components/BrowserFrame";
import {CameraPlate} from "../components/CameraPlate";
import {SIG} from "../config";
import {filmFont} from "../fonts";

/**
 * Product centerpiece: hero → CTA punch → build list → approach steps.
 * All surfaces are authentic CTS website captures.
 */
export const ShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const captionOpacity = interpolate(frame, [40, 70, 250, 290], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: SIG.colors.graphite}}>
      {/* Beat A - hero product */}
      <Sequence from={0} durationInFrames={88} premountFor={fps}>
        <AbsoluteFill style={{padding: 48, justifyContent: "center", alignItems: "center"}}>
          <ZoomPunch start={16} peak={34} end={60} peakScale={1.04} style={{width: "100%", height: "100%"}}>
            <BrowserFrame url="coretechsolutions.com" width="100%" height="100%">
              <CameraPlate
                src="cts-hq/hero.png"
                fromScale={1.02}
                toScale={1.1}
                fromX={0}
                toX={-30}
                origin="35% 50%"
              />
            </BrowserFrame>
          </ZoomPunch>
        </AbsoluteFill>
      </Sequence>

      {/* Beat B - build detail match-cut */}
      <Sequence from={72} durationInFrames={130} premountFor={fps}>
        <AbsoluteFill style={{padding: 64}}>
          <MaskReveal startFrame={0} duration={18} direction="top-to-bottom" style={{width: "100%", height: "100%"}}>
            <BrowserFrame url="coretechsolutions.com/#build" width="100%" height="100%">
              <CameraPlate
                src="cts-hq/build-detail.png"
                fromScale={1.04}
                toScale={1.12}
                fromY={10}
                toY={-24}
                origin="50% 30%"
                objectFit="cover"
              />
            </BrowserFrame>
          </MaskReveal>
        </AbsoluteFill>
      </Sequence>

      {/* Beat C - approach process close-up */}
      <Sequence from={185} durationInFrames={127} premountFor={fps}>
        <AbsoluteFill style={{padding: 72}}>
          <MaskReveal startFrame={0} duration={16} direction="left-to-right" style={{width: "100%", height: "100%"}}>
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(230,230,228,0.16)",
                boxShadow: "0 36px 100px rgba(0,0,0,0.5)",
                transform: `scale(${interpolate(frame, [185, 300], [1.02, 1.08], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: easings.soft,
                })})`,
              }}
            >
              <CameraPlate
                src="cts-hq/approach-detail.png"
                fromScale={1.0}
                toScale={1.08}
                fromX={-20}
                toX={20}
                objectFit="cover"
                origin="50% 50%"
              />
            </div>
          </MaskReveal>
        </AbsoluteFill>
      </Sequence>

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 48,
          opacity: captionOpacity,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 26,
            fontWeight: 500,
            color: SIG.colors.warmWhite,
            textAlign: "center",
            maxWidth: 980,
            textShadow: "0 2px 24px rgba(0,0,0,0.8)",
          }}
        >
          <TypedText
            text="We turn complexity into clarity, creating digital experiences built around real needs."
            startFrame={48}
            perWord={9}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
