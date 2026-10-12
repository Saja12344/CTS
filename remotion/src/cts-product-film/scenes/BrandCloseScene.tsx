import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {SelectiveCaption, SitePlate} from "../components/SitePlate";
import {PRODUCT_FILM} from "../config";
import {filmFont} from "../fonts";

/** Contact surface settles into authentic logo + tagline. */
export const BrandCloseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const contactOut = interpolate(frame, [0, 70], [1, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoIn = interpolate(frame, [40, 78], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const logoSpring = spring({
    frame: Math.max(0, frame - 42),
    fps,
    config: {damping: 200, stiffness: 80},
  });

  return (
    <AbsoluteFill style={{backgroundColor: PRODUCT_FILM.colors.graphite}}>
      <AbsoluteFill style={{opacity: contactOut}}>
        <SitePlate src="cts-site/contact.png" scaleFrom={1.02} scaleTo={1.06} />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background: `rgba(11,11,12,${0.35 + logoIn * 0.55})`,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: logoIn,
          transform: `translateY(${(1 - logoSpring) * 22}px) scale(${0.94 + logoSpring * 0.06})`,
          paddingBottom: 40,
        }}
      >
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 22}}>
          <Img
            src={staticFile("brand/logo-lockup.png")}
            style={{width: 580, height: "auto", objectFit: "contain"}}
          />
          <div
            style={{
              fontFamily: filmFont,
              fontSize: 16,
              letterSpacing: "0.3em",
              color: PRODUCT_FILM.colors.titanium,
              fontWeight: 600,
            }}
          >
            {PRODUCT_FILM.name}
          </div>
          <div
            style={{
              width: 56 * logoIn,
              height: 1,
              background: PRODUCT_FILM.colors.accent,
            }}
          />
        </div>
      </AbsoluteFill>
      <SelectiveCaption
        text={PRODUCT_FILM.tagline}
        appear={[95, 125]}
        holdUntil={210}
      />
    </AbsoluteFill>
  );
};
