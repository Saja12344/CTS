import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

/** 435–539 — authentic logo reveal; logo hidden until this scene */
export const BrandRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const logoIn = interpolate(frame, [8, 8 + 1.1 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const nameIn = interpolate(frame, [22, 22 + fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const tagIn = interpolate(frame, [38, 38 + fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  // Hold readable through end — no fade-out on last frames
  const hold = interpolate(frame, [durationInFrames - 6, durationInFrames], [1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 64,
          paddingRight: 64,
          opacity: hold,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 36,
            width: "100%",
            maxWidth: 860,
          }}
        >
          <Img
            src={staticFile("brand/logo-lockup.png")}
            style={{
              width: "88%",
              maxWidth: 820,
              height: "auto",
              objectFit: "contain",
              opacity: logoIn,
              transform: `translateY(${(1 - logoIn) * 16}px)`,
            }}
          />
          <div
            style={{
              fontFamily: brandFontFamily,
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.28em",
              color: BRAND.colors.warmWhite,
              textAlign: "center",
              opacity: nameIn,
              transform: `translateY(${(1 - nameIn) * 10}px)`,
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              width: 64 * tagIn,
              height: 1,
              backgroundColor: BRAND.colors.accent,
              opacity: 0.85 * tagIn,
            }}
          />
          <div
            style={{
              fontFamily: brandFontFamily,
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.4,
              color: BRAND.colors.titanium,
              textAlign: "center",
              maxWidth: 720,
              opacity: tagIn,
              transform: `translateY(${(1 - tagIn) * 12}px)`,
            }}
          >
            {BRAND.tagline}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
