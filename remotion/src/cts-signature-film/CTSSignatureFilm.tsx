import {Audio} from "@remotion/media";
import {TransitionSeries, linearTiming} from "@remotion/transitions";
import {fade} from "@remotion/transitions/fade";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {SIG} from "./config";
import "./fonts";
import {BrandRevealScene} from "./scenes/BrandRevealScene";
import {BridgeScene} from "./scenes/BridgeScene";
import {IdeaScene} from "./scenes/IdeaScene";
import {ResolveScene} from "./scenes/ResolveScene";
import {ShowcaseScene} from "./scenes/ShowcaseScene";

/**
 * CTS Signature Brand Film - product-first cinematic demo.
 * VO-driven frame budget (saas-product-demo-video exception).
 */
export const CTSSignatureFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const t = SIG.transitionFrames;
  const s = SIG.scenes;

  const bedVol = interpolate(
    frame,
    [0, 0.45 * fps, durationInFrames - 1.1 * fps, durationInFrames],
    [0, 0.28, 0.28, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const voVol = interpolate(
    frame,
    [0, 0.2 * fps, durationInFrames - 0.6 * fps, durationInFrames],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  // Master cut points after TransitionSeries shortening (t=12)
  // idea 0 | bridge 120-12=108 | showcase 108+132-12=228 | resolve 228+312-12=528 | brand 528+156-12=672
  const cuts = [108, 228, 528, 672] as const;

  return (
    <AbsoluteFill style={{backgroundColor: SIG.colors.graphite}}>
      <Audio src={staticFile("audio/cts-signature-bed.wav")} volume={bedVol} premountFor={fps} />
      <Audio src={staticFile("audio/cts-signature-vo.wav")} volume={voVol} premountFor={fps} />

      {cuts.map((from, i) => (
        <Sequence key={from} from={Math.max(0, from - 1)} durationInFrames={26} premountFor={fps}>
          <Audio
            src={staticFile("audio/sfx/whoosh.wav")}
            volume={0.42 - i * 0.03}
            premountFor={fps}
          />
        </Sequence>
      ))}
      <Sequence from={250} durationInFrames={18} premountFor={fps}>
        <Audio src={staticFile("audio/sfx/mouse-click.wav")} volume={0.32} premountFor={fps} />
      </Sequence>
      <Sequence from={545} durationInFrames={18} premountFor={fps}>
        <Audio src={staticFile("audio/sfx/switch.wav")} volume={0.28} premountFor={fps} />
      </Sequence>
      <Sequence from={680} durationInFrames={30} premountFor={fps}>
        <Audio src={staticFile("audio/sfx/whoosh.wav")} volume={0.5} premountFor={fps} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence name="Idea" durationInFrames={s.idea} premountFor={fps}>
          <IdeaScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence name="Bridge" durationInFrames={s.bridge} premountFor={fps}>
          <BridgeScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence name="Showcase" durationInFrames={s.showcase} premountFor={fps}>
          <ShowcaseScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence name="Resolve" durationInFrames={s.resolve} premountFor={fps}>
          <ResolveScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence name="Brand" durationInFrames={s.brand} premountFor={fps}>
          <BrandRevealScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
