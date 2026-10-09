import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { Scene1Spark } from "./scenes/Scene1Spark";
import { Scene2Expand } from "./scenes/Scene2Expand";
import { Scene3Structure } from "./scenes/Scene3Structure";
import { Scene4Code } from "./scenes/Scene4Code";
import { Scene5Product } from "./scenes/Scene5Product";
import { Scene6Brand } from "./scenes/Scene6Brand";
import { SfxLayer } from "./sfx/SfxLayer";
import { scenes } from "./timeline";
import { colors } from "./theme";
import "./fonts";

export const BrandFilm: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.canvas }}>
      <Sequence
        name="1 · The spark"
        from={scenes.spark.from}
        durationInFrames={scenes.spark.duration}
        premountFor={fps}
      >
        <Scene1Spark />
      </Sequence>

      <Sequence
        name="2 · The idea expands"
        from={scenes.expand.from}
        durationInFrames={scenes.expand.duration}
        premountFor={fps}
      >
        <Scene2Expand />
      </Sequence>

      <Sequence
        name="3 · From content to structure"
        from={scenes.structure.from}
        durationInFrames={scenes.structure.duration}
        premountFor={fps}
      >
        <Scene3Structure />
      </Sequence>

      <Sequence
        name="4 · The code becomes the product"
        from={scenes.code.from}
        durationInFrames={scenes.code.duration}
        premountFor={fps}
      >
        <Scene4Code />
      </Sequence>

      <Sequence
        name="5 · The product reveal"
        from={scenes.product.from}
        durationInFrames={scenes.product.duration}
        premountFor={fps}
      >
        <Scene5Product />
      </Sequence>

      <Sequence
        name="6 · Brand reveal"
        from={scenes.brand.from}
        durationInFrames={scenes.brand.duration}
        premountFor={fps}
      >
        <Scene6Brand />
      </Sequence>

      <SfxLayer />
    </AbsoluteFill>
  );
};
