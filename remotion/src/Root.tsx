import {Composition, Folder, Still} from "remotion";
import {BrandFilm} from "./brand-film/BrandFilm";
import {TitleCard} from "./components/TitleCard";
import {GeometricBadge} from "./components/GeometricBadge";
import {WorkflowTest} from "./compositions/WorkflowTest";
import {IntroScene} from "./scenes/IntroScene";
import {LayersDemoScene} from "./scenes/LayersDemoScene";
import {OutroScene} from "./scenes/OutroScene";
import {
  SmartWaveFilm,
  SmartWaveFilmVertical,
} from "./smart-wave/SmartWaveFilm";
import {HologramDriftFilm} from "./hologram-drift/HologramDriftFilm";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Hologram">
        <Composition
          id="HologramDriftFilm"
          component={HologramDriftFilm}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
        />
        <Still
          id="HologramDriftStill"
          component={HologramDriftFilm}
          width={1080}
          height={1920}
        />
      </Folder>
      <Folder name="Wave">
        <Composition
          id="SmartWaveFilm"
          component={SmartWaveFilm}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="SmartWaveFilmVertical"
          component={SmartWaveFilmVertical}
          durationInFrames={300}
          fps={30}
          width={1080}
          height={1920}
        />
        <Still
          id="SmartWaveStill"
          component={SmartWaveFilm}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="Brand">
        <Composition
          id="CoreTechBrandFilm"
          component={BrandFilm}
          durationInFrames={540}
          fps={30}
          width={1080}
          height={1920}
        />
        <Still
          id="CoreTechBrandFilmStill"
          component={BrandFilm}
          width={1080}
          height={1920}
        />
      </Folder>
      <Folder name="Workflow">
        <Composition
          id="WorkflowTest"
          component={WorkflowTest}
          durationInFrames={240}
          fps={30}
          width={1280}
          height={720}
        />
        <Still
          id="WorkflowStill"
          component={IntroScene}
          width={1280}
          height={720}
        />
      </Folder>
      <Folder name="Scenes">
        <Composition
          id="IntroScene"
          component={IntroScene}
          durationInFrames={90}
          fps={30}
          width={1280}
          height={720}
        />
        <Composition
          id="LayersDemoScene"
          component={LayersDemoScene}
          durationInFrames={90}
          fps={30}
          width={1280}
          height={720}
        />
        <Composition
          id="OutroScene"
          component={OutroScene}
          durationInFrames={60}
          fps={30}
          width={1280}
          height={720}
        />
      </Folder>
      <Folder name="Elements">
        <Composition
          id="TitleCard"
          component={TitleCard}
          durationInFrames={90}
          fps={30}
          width={1280}
          height={720}
          defaultProps={{
            children: "Workflow Test",
            accentColor: "#38bdf8",
          }}
        />
        <Composition
          id="GeometricBadge"
          component={GeometricBadge}
          durationInFrames={60}
          fps={30}
          width={1280}
          height={720}
          defaultProps={{
            label: "GEO",
            fill: "#38bdf8",
          }}
        />
      </Folder>
    </>
  );
};
