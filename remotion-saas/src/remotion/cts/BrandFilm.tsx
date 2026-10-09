import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import type { BrandFilmProps } from "../../../types/constants";
import { FilmThemeProvider, useColors } from "./FilmContext";
import { Scene1Human } from "./scenes/Scene1Human";
import { Scene2Grow } from "./scenes/Scene2Grow";
import { Scene3Product } from "./scenes/Scene3Product";
import { Scene4Assemble } from "./scenes/Scene4Assemble";
import { Scene5Brand } from "./scenes/Scene5Brand";
import { AudioLayer } from "./sfx/AudioLayer";
import { scenes } from "./timeline";
import "./fonts";

const BrandFilmInner: React.FC = () => {
  const { fps } = useVideoConfig();
  const colors = useColors();

  return (
    <AbsoluteFill style={{ backgroundColor: colors.graphite }}>
      <Sequence
        name="1 · Human idea"
        from={scenes.human.from}
        durationInFrames={scenes.human.duration}
        premountFor={fps}
      >
        <Scene1Human />
      </Sequence>
      <Sequence
        name="2 · Idea grows"
        from={scenes.grow.from}
        durationInFrames={scenes.grow.duration}
        premountFor={fps}
      >
        <Scene2Grow />
      </Sequence>
      <Sequence
        name="3 · World → product"
        from={scenes.product.from}
        durationInFrames={scenes.product.duration}
        premountFor={fps}
      >
        <Scene3Product />
      </Sequence>
      <Sequence
        name="4 · Assemble"
        from={scenes.assemble.from}
        durationInFrames={scenes.assemble.duration}
        premountFor={fps}
      >
        <Scene4Assemble />
      </Sequence>
      <Sequence
        name="5 · Brand"
        from={scenes.brand.from}
        durationInFrames={scenes.brand.duration}
        premountFor={fps}
      >
        <Scene5Brand />
      </Sequence>
      <AudioLayer />
    </AbsoluteFill>
  );
};

export const BrandFilm: React.FC<BrandFilmProps> = (props) => (
  <FilmThemeProvider props={props}>
    <BrandFilmInner />
  </FilmThemeProvider>
);
