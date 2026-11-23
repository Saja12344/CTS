import {AbsoluteFill} from "remotion";
import {SelectiveCaption, SitePlate} from "../components/SitePlate";

/** Authentic CTS hero — the real product surface. */
export const HeroSiteScene: React.FC = () => {
  return (
    <AbsoluteFill>
      <SitePlate src="cts-site/hero.png" scaleFrom={1.02} scaleTo={1.08} panY={-12} />
      <SelectiveCaption
        text="A problem worth solving. A possibility worth exploring."
        appear={[40, 70]}
        holdUntil={175}
      />
    </AbsoluteFill>
  );
};
