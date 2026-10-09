import {Composition, Folder, Still} from "remotion";
import {TitleCard} from "./components/TitleCard";
import {GeometricBadge} from "./components/GeometricBadge";
import {WorkflowTest} from "./compositions/WorkflowTest";
import {IntroScene} from "./scenes/IntroScene";
import {LayersDemoScene} from "./scenes/LayersDemoScene";
import {OutroScene} from "./scenes/OutroScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
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
