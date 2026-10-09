import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PremiumPhone } from "../components/PremiumPhone";
import { useColors, useFilmTheme } from "../FilmContext";
import { space } from "../fonts";
import { easeOut } from "../theme";

export const Scene5Brand: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const colors = useColors();
  const { brandName, tagline } = useFilmTheme();

  const fadeIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const phoneShift = interpolate(frame, [0, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });
  const brandIn = interpolate(frame, [22, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(...easeOut),
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.graphite,
        opacity: fadeIn,
        fontFamily: space,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 40%, #222326 0%, ${colors.graphite} 65%)`,
        }}
      />

      <AbsoluteFill
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 48,
        }}
      >
        <div
          style={{
            opacity: interpolate(phoneShift, [0, 1], [1, 0.35]),
            transform: `
              translateY(${interpolate(phoneShift, [0, 1], [0, -220])}px)
              scale(${interpolate(phoneShift, [0, 1], [1, 0.55])})
            `,
          }}
        >
          <PremiumPhone width={300} rotateY={-10} rotateX={4} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "42%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            opacity: brandIn,
            transform: `translateY(${interpolate(brandIn, [0, 1], [24, 0])}px)`,
            padding: "0 48px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Img
            src={staticFile("cts/logo-lockup-light.png")}
            style={{
              width: 720,
              maxWidth: "88%",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: colors.muted,
              fontWeight: 500,
            }}
          >
            {brandName}
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 400,
              color: colors.titanium,
              textAlign: "center",
              maxWidth: 640,
              lineHeight: 1.4,
              opacity: 0.92,
            }}
          >
            {tagline}
          </div>
        </div>
      </AbsoluteFill>

      {/* Hold readable through end */}
      <AbsoluteFill
        style={{
          opacity: interpolate(frame, [durationInFrames - 6, durationInFrames], [0, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
