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
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";
import {PhoneDevice} from "../ui/PhoneDevice";

/** Scene 5 — finished product + authentic logo reveal */
export const BrandRevealScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const phoneSettle = spring({
    frame,
    fps,
    config: {damping: 200, stiffness: 90},
  });

  const logoIn = interpolate(frame, [28, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const nameIn = interpolate(frame, [42, 68], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tagIn = interpolate(frame, [55, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(200,255,77,0.08), transparent 50%)",
        }}
      />

      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 120,
          opacity: 0.35 + phoneSettle * 0.65,
          transform: `translateY(${(1 - phoneSettle) * 40}px) scale(${0.9 + phoneSettle * 0.08})`,
        }}
      >
        <PhoneDevice width={340} />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 220,
          paddingLeft: 56,
          paddingRight: 56,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            width: "100%",
            maxWidth: 860,
          }}
        >
          <Img
            src={staticFile("brand/logo-lockup.png")}
            style={{
              width: "82%",
              maxWidth: 760,
              height: "auto",
              objectFit: "contain",
              opacity: logoIn,
              transform: `translateY(${(1 - logoIn) * 18}px)`,
            }}
          />
          <div
            style={{
              fontFamily: brandFontFamily,
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.26em",
              color: BRAND.colors.warmWhite,
              opacity: nameIn,
            }}
          >
            {BRAND.name}
          </div>
          <div
            style={{
              width: 56 * tagIn,
              height: 1,
              background: BRAND.colors.accent,
              opacity: tagIn,
            }}
          />
          <div
            style={{
              fontFamily: brandFontFamily,
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: BRAND.colors.titanium,
              textAlign: "center",
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
