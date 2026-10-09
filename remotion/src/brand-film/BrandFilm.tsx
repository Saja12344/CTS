import {Audio} from "@remotion/media";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "./brand";
import "./fonts";
import {SparkScene} from "./scenes/SparkScene";
import {StructureScene} from "./scenes/StructureScene";
import {DigitalProductScene} from "./scenes/DigitalProductScene";
import {ResolutionScene} from "./scenes/ResolutionScene";
import {BrandRevealScene} from "./scenes/BrandRevealScene";
import {SceneFade} from "./components/SceneFade";

/**
 * Core Tech Solutions brand film
 * Concept: From Thought to Digital Reality
 * Format: 1080×1920 · 30fps · 540 frames (18s)
 */
export const BrandFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const {scenes} = BRAND;

  const masterVolume = interpolate(
    frame,
    [0, 0.6 * fps, durationInFrames - 1.2 * fps, durationInFrames],
    [0, 0.72, 0.72, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <Audio
        src={staticFile("audio/brand-film-bed.wav")}
        volume={masterVolume}
        premountFor={fps}
      />

      <Sequence
        name="Spark"
        from={scenes.spark.from}
        durationInFrames={scenes.spark.durationInFrames}
        premountFor={fps}
        style={{
          translate: "230px 0px"
        }}
      >
        <SceneFade>
          <SparkScene />
        </SceneFade>
      </Sequence>

      <Sequence
        name="Structure"
        from={scenes.structure.from}
        durationInFrames={scenes.structure.durationInFrames}
        premountFor={fps}
      >
        <SceneFade>
          <StructureScene />
        </SceneFade>
      </Sequence>

      <Sequence
        name="Digital Product"
        from={scenes.digital.from}
        durationInFrames={scenes.digital.durationInFrames}
        premountFor={fps}
      >
        <SceneFade>
          <DigitalProductScene />
        </SceneFade>
      </Sequence>

      <Sequence
        name="Resolution"
        from={scenes.resolution.from}
        durationInFrames={scenes.resolution.durationInFrames}
        premountFor={fps}
      >
        <SceneFade>
          <ResolutionScene />
        </SceneFade>
      </Sequence>

      <Sequence
        name="Brand Reveal"
        from={scenes.reveal.from}
        durationInFrames={scenes.reveal.durationInFrames}
        premountFor={fps}
      >
        {/* Fade in only — hold last frame fully readable */}
        <AbsoluteFill
          style={{
            opacity: interpolate(frame - scenes.reveal.from, [0, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <BrandRevealScene />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
