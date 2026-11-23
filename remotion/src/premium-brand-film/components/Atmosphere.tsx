import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from "remotion";
import {FILM} from "../config";

/** Soft metallic / light-leak atmosphere — brand world, not generic purple SaaS. */
export const Atmosphere: React.FC<{
  readonly intensity?: number;
  readonly driftX?: number;
  readonly driftY?: number;
  readonly scale?: number;
}> = ({intensity = 0.45, driftX = 0, driftY = 0, scale = 1.12}) => {
  const frame = useCurrentFrame();
  const breathe = 0.92 + Math.sin(frame * 0.035) * 0.08;

  return (
    <AbsoluteFill style={{backgroundColor: FILM.colors.graphite, overflow: "hidden"}}>
      <AbsoluteFill
        style={{
          opacity: intensity * breathe,
          transform: `translate(${driftX}px, ${driftY}px) scale(${scale})`,
          transformOrigin: "40% 40%",
        }}
      >
        <Img
          src={staticFile("light-leak/plate-a.png")}
          style={{width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85) brightness(0.7)"}}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          opacity: 0.22 * intensity,
          mixBlendMode: "screen",
          transform: `translate(${-driftX * 0.4}px, ${-driftY * 0.3}px) scale(1.08)`,
        }}
      >
        <Img
          src={staticFile("brand/hero-metallic.jpg")}
          style={{
            width: "70%",
            height: "70%",
            objectFit: "contain",
            margin: "auto",
            filter: "grayscale(0.2) contrast(1.05)",
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 20%, rgba(11,11,12,0.55) 70%, rgba(11,11,12,0.92) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

export const FilmVignette: React.FC = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background:
        "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.55) 100%)",
    }}
  />
);

export const AccentGrain: React.FC<{readonly opacity?: number}> = ({opacity = 0.04}) => {
  const frame = useCurrentFrame();
  const shift = (frame % 7) * 3;
  return (
    <AbsoluteFill
      style={{
        opacity,
        pointerEvents: "none",
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 3px)",
        backgroundPosition: `0 ${shift}px`,
        mixBlendMode: "overlay",
      }}
    />
  );
};

export const FadeOverlay: React.FC<{
  readonly fadeIn?: [number, number];
  readonly fadeOut?: [number, number];
}> = ({fadeIn, fadeOut}) => {
  const frame = useCurrentFrame();
  let opacity = 0;
  if (fadeIn) {
    opacity = Math.max(
      opacity,
      1 -
        interpolate(frame, fadeIn, [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
    );
  }
  if (fadeOut) {
    opacity = Math.max(
      opacity,
      interpolate(frame, fadeOut, [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    );
  }
  if (opacity <= 0) return null;
  return <AbsoluteFill style={{backgroundColor: FILM.colors.graphite, opacity}} />;
};
