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
import {PRODUCT_FILM} from "./config";
import "./fonts";
import {ApproachScene} from "./scenes/ApproachScene";
import {BrandCloseScene} from "./scenes/BrandCloseScene";
import {BuildScene} from "./scenes/BuildScene";
import {HeroSiteScene} from "./scenes/HeroSiteScene";
import {SparkScene} from "./scenes/SparkScene";

/**
 * CTS Product Brand Film — authentic website UI, TransitionSeries fades,
 * VO + bed + SFX synchronized to scene cuts.
 */
export const CTSProductBrandFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const t = PRODUCT_FILM.transitionFrames;
  const {scenes} = PRODUCT_FILM;

  const bedVol = interpolate(
    frame,
    [0, 0.5 * fps, durationInFrames - 1.2 * fps, durationInFrames],
    [0, 0.32, 0.32, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const voVol = interpolate(
    frame,
    [0, 0.25 * fps, durationInFrames - 0.7 * fps, durationInFrames],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  // Transition midpoints (after TransitionSeries shortening)
  // Scene starts on master timeline:
  // spark 0
  // hero: 150 - 15 = 135
  // build: 135 + 195 - 15 = 315
  // approach: 315 + 225 - 15 = 525
  // brand: 525 + 180 - 15 = 690
  const cutFrames = [135, 315, 525, 690] as const;

  return (
    <AbsoluteFill style={{backgroundColor: PRODUCT_FILM.colors.graphite}}>
      <Audio
        src={staticFile("audio/premium-brand-bed.wav")}
        volume={bedVol}
        premountFor={fps}
      />
      <Audio
        src={staticFile("audio/premium-brand-vo.wav")}
        volume={voVol}
        premountFor={fps}
      />
      <Audio
        src={staticFile("audio/premium-brand-sfx.wav")}
        volume={0.4}
        premountFor={fps}
      />

      {cutFrames.map((from, i) => (
        <Sequence key={from} from={from - 2} durationInFrames={28} premountFor={fps}>
          <Audio
            src={staticFile("audio/sfx/whoosh.wav")}
            volume={0.45 - i * 0.04}
            premountFor={fps}
          />
        </Sequence>
      ))}
      <Sequence from={340} durationInFrames={20} premountFor={fps}>
        <Audio src={staticFile("audio/sfx/mouse-click.wav")} volume={0.35} premountFor={fps} />
      </Sequence>
      <Sequence from={545} durationInFrames={20} premountFor={fps}>
        <Audio src={staticFile("audio/sfx/switch.wav")} volume={0.3} premountFor={fps} />
      </Sequence>

      <TransitionSeries>
        <TransitionSeries.Sequence
          name="Spark"
          durationInFrames={scenes.spark.durationInFrames}
          premountFor={fps}
        >
          <SparkScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence
          name="Hero Site"
          durationInFrames={scenes.hero.durationInFrames}
          premountFor={fps}
        >
          <HeroSiteScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence
          name="What We Build"
          durationInFrames={scenes.build.durationInFrames}
          premountFor={fps}
        >
          <BuildScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence
          name="Approach"
          durationInFrames={scenes.approach.durationInFrames}
          premountFor={fps}
        >
          <ApproachScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({durationInFrames: t})}
        />
        <TransitionSeries.Sequence
          name="Brand Close"
          durationInFrames={scenes.brand.durationInFrames}
          premountFor={fps}
        >
          <BrandCloseScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
