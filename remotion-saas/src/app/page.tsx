"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import type { z } from "zod";
import {
  CompositionProps,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";
import { RenderControls } from "../components/RenderControls";
import { Spacing } from "../components/Spacing";
import { Tips } from "../components/Tips";
import { BrandFilm } from "../remotion/cts/BrandFilm";

const Home: NextPage = () => {
  const [brandName, setBrandName] = useState(defaultMyCompProps.brandName);
  const [tagline, setTagline] = useState(defaultMyCompProps.tagline);
  const [canvasColor, setCanvasColor] = useState(defaultMyCompProps.canvasColor);
  const [inkColor, setInkColor] = useState(defaultMyCompProps.inkColor);
  const [accentColor, setAccentColor] = useState(defaultMyCompProps.accentColor);
  const [scene1Text, setScene1Text] = useState(defaultMyCompProps.scene1Text);
  const [scene2Text, setScene2Text] = useState(defaultMyCompProps.scene2Text);
  const [scene3Text, setScene3Text] = useState(defaultMyCompProps.scene3Text);
  const [scene4Text, setScene4Text] = useState(defaultMyCompProps.scene4Text);

  const inputProps: z.infer<typeof CompositionProps> = useMemo(
    () => ({
      brandName,
      tagline,
      canvasColor,
      inkColor,
      accentColor,
      scene1Text,
      scene2Text,
      scene3Text,
      scene4Text,
    }),
    [
      brandName,
      tagline,
      canvasColor,
      inkColor,
      accentColor,
      scene1Text,
      scene2Text,
      scene3Text,
      scene4Text,
    ],
  );

  return (
    <div>
      <div className="max-w-screen-md m-auto mb-5 px-4">
        <header className="mt-12 mb-8">
          <p className="text-sm tracking-[0.14em] uppercase text-unfocused-border-color mb-2">
            Core Tech Solutions
          </p>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Brand Film Studio
          </h1>
          <p className="mt-2 text-sm text-unfocused-border-color leading-relaxed max-w-xl">
            Preview and customize the 20s CTS brand film. Edit wordmark, tagline,
            colors, and scene copy — then render via Remotion Lambda when AWS is
            configured.
          </p>
        </header>

        <div className="overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)] mb-10">
          <Player
            component={BrandFilm}
            inputProps={inputProps}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionHeight={VIDEO_HEIGHT}
            compositionWidth={VIDEO_WIDTH}
            style={{
              width: "100%",
            }}
            controls
            autoPlay
            loop
            initiallyMuted
            acknowledgeRemotionLicense
          />
        </div>
        <RenderControls
          values={{
            brandName,
            tagline,
            canvasColor,
            inkColor,
            accentColor,
            scene1Text,
            scene2Text,
            scene3Text,
            scene4Text,
          }}
          setters={{
            setBrandName,
            setTagline,
            setCanvasColor,
            setInkColor,
            setAccentColor,
            setScene1Text,
            setScene2Text,
            setScene3Text,
            setScene4Text,
          }}
          inputProps={inputProps}
        />
        <Spacing />
        <Spacing />
        <Tips />
      </div>
    </div>
  );
};

export default Home;
