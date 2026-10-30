import {AbsoluteFill} from "remotion";
import {SelectiveCaption, SitePlate} from "../components/SitePlate";

/** Authentic What We Build section. */
export const BuildScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <SitePlate
        src="cts-site/build.png"
        scaleFrom={1.03}
        scaleTo={1.09}
        panY={18}
      />
      <SelectiveCaption
        text="From concept to digital product."
        appear={[50, 80]}
        holdUntil={200}
      />
    </AbsoluteFill>
  );
};
