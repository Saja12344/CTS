import React from "react";
import { Composition, Folder } from "remotion";
import { BrandFilm } from "./cts/BrandFilm";
import { Scene1Spark } from "./cts/scenes/Scene1Spark";
import { Scene2Expand } from "./cts/scenes/Scene2Expand";
import { Scene3Structure } from "./cts/scenes/Scene3Structure";
import { Scene4Code } from "./cts/scenes/Scene4Code";
import { Scene5Product } from "./cts/scenes/Scene5Product";
import { Scene6Brand } from "./cts/scenes/Scene6Brand";
import {
  DURATION_FRAMES,
  FPS,
  HEIGHT,
  WIDTH,
  scenes,
} from "./cts/timeline";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CTSBrandFilm"
        component={BrandFilm}
        durationInFrames={DURATION_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Folder name="CTS-Scenes">
        <Composition
          id="CTS-Scene1-Spark"
          component={Scene1Spark}
          durationInFrames={scenes.spark.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="CTS-Scene2-Expand"
          component={Scene2Expand}
          durationInFrames={scenes.expand.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="CTS-Scene3-Structure"
          component={Scene3Structure}
          durationInFrames={scenes.structure.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="CTS-Scene4-Code"
          component={Scene4Code}
          durationInFrames={scenes.code.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="CTS-Scene5-Product"
          component={Scene5Product}
          durationInFrames={scenes.product.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
        <Composition
          id="CTS-Scene6-Brand"
          component={Scene6Brand}
          durationInFrames={scenes.brand.duration}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
    </>
  );
};
