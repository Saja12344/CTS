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
import {AssemblyScene} from "./scenes/AssemblyScene";
import {BrandRevealScene} from "./scenes/BrandRevealScene";
import {HumanIdeaScene} from "./scenes/HumanIdeaScene";
import {IdeaGrowsScene} from "./scenes/IdeaGrowsScene";
import {WorldBecomesProductScene} from "./scenes/WorldBecomesProductScene";

/**
 * Core Tech Solutions brand film — narrative rebuild
 * Human idea → expanding possibility → product UIs → phone assembly → logo
 */
export const BrandFilm: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const {scenes} = BRAND;

  const masterVolume = interpolate(
    frame,
    [0, 0.5 * fps, durationInFrames - 1.1 * fps, durationInFrames],
    [0, 0.78, 0.78, 0],
    {extrapolateLeft: "clamp", extrapolateRight: "clamp"},
  );

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <Audio
        src={staticFile("audio/brand-film-bed.wav")}
        volume={masterVolume}
        premountFor={fps}
      />

      <Sequence
        name="Human Idea"
        from={scenes.human.from}
        durationInFrames={scenes.human.durationInFrames}
        premountFor={fps}
        style={{
          translate: "105px 0px"
        }}
      >
        <HumanIdeaScene />
      </Sequence>

      <Sequence
        name="Idea Grows"
        from={scenes.grows.from}
        durationInFrames={scenes.grows.durationInFrames}
        premountFor={fps}
        style={{
          translate: "388px 0px"
        }}
      >
        <IdeaGrowsScene />
      </Sequence>

      <Sequence
        name="World Becomes Product"
        from={scenes.world.from}
        durationInFrames={scenes.world.durationInFrames}
        premountFor={fps}
      >
        <WorldBecomesProductScene />
      </Sequence>

      <Sequence
        name="Assembly"
        from={scenes.assembly.from}
        durationInFrames={scenes.assembly.durationInFrames}
        premountFor={fps}
      >
        <AssemblyScene />
      </Sequence>

      <Sequence
        name="Brand Reveal"
        from={scenes.brand.from}
        durationInFrames={scenes.brand.durationInFrames}
        premountFor={fps}
      >
        <BrandRevealScene />
      </Sequence>
    </AbsoluteFill>
  );
};
