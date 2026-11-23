import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {AccentGrain, FadeOverlay} from "./components/Atmosphere";
import {FILM} from "./config";
import "./fonts";
import {AtmosphereScene} from "./scenes/AtmosphereScene";
import {BrandCloseScene} from "./scenes/BrandCloseScene";
import {ProductWorldScene} from "./scenes/ProductWorldScene";
import {ResolveScene} from "./scenes/ResolveScene";
import {SparkExpandScene} from "./scenes/SparkExpandScene";

/**
 * CTS Premium SaaS Brand Film — 1920×1080 cinematic commercial.
 * Atmosphere → spark → products → resolve → brand close.
 * VO + music bed + SFX mixed as real audio assets.
 */
export const PremiumBrandFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const {scenes} = FILM;

  const bedVol = interpolate(
    frame,
    [0, 0.6 * fps, durationInFrames - 1.2 * fps, durationInFrames],
    [0, 0.42, 0.42, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const voVol = interpolate(
    frame,
    [0, 0.3 * fps, durationInFrames - 0.8 * fps, durationInFrames],
    [0, 1, 1, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );
  const sfxVol = interpolate(
    frame,
    [0, 0.4 * fps, durationInFrames - 1 * fps, durationInFrames],
    [0, 0.55, 0.55, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  return (
    <AbsoluteFill style={{backgroundColor: FILM.colors.graphite}}>
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
        volume={sfxVol}
        premountFor={fps}
      />

      <Sequence
        name="Atmosphere"
        from={scenes.atmosphere.from}
        durationInFrames={scenes.atmosphere.durationInFrames}
        premountFor={fps}
      >
        <AtmosphereScene />
      </Sequence>

      <Sequence
        name="Spark Expand"
        from={scenes.spark.from}
        durationInFrames={scenes.spark.durationInFrames}
        premountFor={fps}
      >
        <SparkExpandScene />
      </Sequence>

      <Sequence
        name="Product World"
        from={scenes.products.from}
        durationInFrames={scenes.products.durationInFrames}
        premountFor={fps}
      >
        <ProductWorldScene />
      </Sequence>

      <Sequence
        name="Resolve"
        from={scenes.resolve.from}
        durationInFrames={scenes.resolve.durationInFrames}
        premountFor={fps}
      >
        <ResolveScene />
      </Sequence>

      <Sequence
        name="Brand Close"
        from={scenes.brand.from}
        durationInFrames={scenes.brand.durationInFrames}
        premountFor={fps}
      >
        <BrandCloseScene />
      </Sequence>

      <AccentGrain opacity={0.035} />
      <FadeOverlay fadeOut={[durationInFrames - 24, durationInFrames]} />
    </AbsoluteFill>
  );
};
