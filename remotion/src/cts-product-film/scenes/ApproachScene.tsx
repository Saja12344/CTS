import {AbsoluteFill} from "remotion";
import {SelectiveCaption, SitePlate} from "../components/SitePlate";

/** Authentic Our Approach process UI. */
export const ApproachScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <SitePlate
        src="cts-site/approach.png"
        scaleFrom={1.04}
        scaleTo={1.1}
        panY={-8}
      />
      <SelectiveCaption
        text="Built to move businesses forward."
        appear={[36, 64]}
        holdUntil={160}
      />
    </AbsoluteFill>
  );
};
