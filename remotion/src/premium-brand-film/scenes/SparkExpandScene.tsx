import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {Atmosphere, FilmVignette} from "../components/Atmosphere";
import {FILM} from "../config";
import {filmFont} from "../fonts";

/** Scene 2 — abstract idea expands into geometric possibility. */
export const SparkExpandScene: React.FC = () => {
  const frame = useCurrentFrame();

  const expand = interpolate(frame, [0, 90], [0.55, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const ring = interpolate(frame, [20, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lines = interpolate(frame, [40, 110], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(frame, [120, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{opacity: fadeOut}}>
      <Atmosphere intensity={0.4} driftX={frame * 0.12} driftY={-frame * 0.05} scale={1.1} />

      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        <div
          style={{
            width: 520 * expand,
            height: 520 * expand,
            borderRadius: "50%",
            border: `1px solid rgba(200,255,77,${0.15 + ring * 0.35})`,
            boxShadow: `0 0 80px rgba(200,255,77,${0.08 + ring * 0.12})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "12%",
              borderRadius: "50%",
              border: `1px solid rgba(230,230,228,${0.08 + ring * 0.2})`,
            }}
          />
          <Img
            src={staticFile("brand/hero-metallic.jpg")}
            style={{
              width: 220 * expand,
              height: 220 * expand,
              objectFit: "contain",
              opacity: 0.75,
              filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))",
            }}
          />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: lines,
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 280 + i * 120,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${FILM.colors.titanium}, transparent)`,
              opacity: 0.18 + i * 0.08,
              transform: `rotate(${-18 + i * 18}deg) scaleX(${lines})`,
            }}
          />
        ))}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 110,
          opacity: interpolate(frame, [50, 80], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: FILM.colors.mutedGray,
          }}
        >
          Possibility takes form
        </div>
      </AbsoluteFill>
      <FilmVignette />
    </AbsoluteFill>
  );
};
