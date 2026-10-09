import React from "react";
import { Audio, Sequence, staticFile } from "remotion";
import { scenes } from "../timeline";

/** Score + timed cues — generated ambient pad as documented commercial-safe fallback */
export const AudioLayer: React.FC = () => {
  return (
    <>
      <Audio src={staticFile("cts/score.mp3")} volume={0.55} />
      <Sequence from={34} durationInFrames={30}>
        <Audio src={staticFile("cts/spark.mp3")} volume={0.7} />
      </Sequence>
      <Sequence from={scenes.assemble.from + 24} durationInFrames={20}>
        <Audio src={staticFile("cts/tick.mp3")} volume={0.45} />
      </Sequence>
      <Sequence from={scenes.assemble.from + 48} durationInFrames={20}>
        <Audio src={staticFile("cts/tick.mp3")} volume={0.4} />
      </Sequence>
      <Sequence from={scenes.assemble.from + 72} durationInFrames={20}>
        <Audio src={staticFile("cts/tick.mp3")} volume={0.5} />
      </Sequence>
    </>
  );
};
