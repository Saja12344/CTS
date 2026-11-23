import {Series, AbsoluteFill, useVideoConfig} from "remotion";
import {IntroScene} from "../scenes/IntroScene";
import {LayersDemoScene} from "../scenes/LayersDemoScene";
import {OutroScene} from "../scenes/OutroScene";

/**
 * Small editable demo composition for verifying Remotion Studio workflow.
 * Not a brand / marketing video.
 */
export const WorkflowTest: React.FC = () => {
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{backgroundColor: "#0f172a"}}>
      <Series>
        <Series.Sequence name="Intro" durationInFrames={90} premountFor={fps}>
          <IntroScene />
        </Series.Sequence>
        <Series.Sequence
          name="Layers"
          durationInFrames={90}
          premountFor={fps}
        >
          <LayersDemoScene />
        </Series.Sequence>
        <Series.Sequence name="Outro" durationInFrames={60} premountFor={fps}>
          <OutroScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
