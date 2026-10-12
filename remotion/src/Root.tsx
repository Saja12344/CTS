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
import {LightLeakDriftFilm} from "./light-leak-drift/LightLeakDriftFilm";
import {PremiumBrandFilm} from "./premium-brand-film/PremiumBrandFilm";
import {FILM as PREMIUM_FILM} from "./premium-brand-film/config";
import {CTSProductBrandFilm} from "./cts-product-film/CTSProductBrandFilm";
import {PRODUCT_FILM} from "./cts-product-film/config";
import {SparkScene} from "./cts-product-film/scenes/SparkScene";
import {HeroSiteScene} from "./cts-product-film/scenes/HeroSiteScene";
import {BuildScene} from "./cts-product-film/scenes/BuildScene";
import {ApproachScene} from "./cts-product-film/scenes/ApproachScene";
import {BrandCloseScene} from "./cts-product-film/scenes/BrandCloseScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="CTS-Product">
        <Composition
          id={PRODUCT_FILM.id}
          component={CTSProductBrandFilm}
          durationInFrames={PRODUCT_FILM.durationInFrames}
          fps={PRODUCT_FILM.fps}
          width={PRODUCT_FILM.width}
          height={PRODUCT_FILM.height}
        />
        <Still
          id="CTSProductBrandFilmStill"
          component={CTSProductBrandFilm}
          width={PRODUCT_FILM.width}
          height={PRODUCT_FILM.height}
        />
        <Composition
          id="cts-Scene-Spark"
          component={SparkScene}
          durationInFrames={PRODUCT_FILM.scenes.spark.durationInFrames}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="cts-Scene-Hero"
          component={HeroSiteScene}
          durationInFrames={PRODUCT_FILM.scenes.hero.durationInFrames}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="cts-Scene-Build"
          component={BuildScene}
          durationInFrames={PRODUCT_FILM.scenes.build.durationInFrames}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="cts-Scene-Approach"
          component={ApproachScene}
          durationInFrames={PRODUCT_FILM.scenes.approach.durationInFrames}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="cts-Scene-Brand"
          component={BrandCloseScene}
          durationInFrames={PRODUCT_FILM.scenes.brand.durationInFrames}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
      <Folder name="BrandPremium">
        <Composition
          id={PREMIUM_FILM.id}
          component={PremiumBrandFilm}
          durationInFrames={PREMIUM_FILM.durationInFrames}
          fps={PREMIUM_FILM.fps}
          width={PREMIUM_FILM.width}
          height={PREMIUM_FILM.height}
        />
        <Still
          id="CTSPremiumBrandFilmStill"
          component={PremiumBrandFilm}
          width={PREMIUM_FILM.width}
          height={PREMIUM_FILM.height}
        />
      </Folder>
      <Folder name="LightLeak">
        <Composition
          id="LightLeakDriftFilm"
          component={LightLeakDriftFilm}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
        />
        <Still
          id="LightLeakDriftStill"
          component={LightLeakDriftFilm}
          width={1920}
          height={1080}
        />
      </Folder>
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
