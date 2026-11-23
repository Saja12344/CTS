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
import {Atmosphere, FilmVignette} from "../components/Atmosphere";
import {SelectiveType} from "../components/SelectiveType";
import {FILM} from "../config";
import {filmFont} from "../fonts";

/** Scene 5 — restrained logo + wordmark reveal. */
export const BrandCloseScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const logoSpring = spring({
    frame: frame - 12,
    fps,
    config: {damping: 200, stiffness: 80, mass: 0.9},
  });
  const logoIn = interpolate(frame, [8, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const nameIn = interpolate(frame, [36, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line = interpolate(frame, [55, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{backgroundColor: FILM.colors.graphite}}>
      <Atmosphere intensity={0.18} scale={1.04} />
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(200,255,77,0.07), transparent 48%)",
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            opacity: logoIn,
            transform: `translateY(${(1 - logoSpring) * 24}px) scale(${0.94 + logoSpring * 0.06})`,
          }}
        >
          <Img
            src={staticFile("brand/logo-lockup.png")}
            style={{
              width: 620,
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.45))",
            }}
          />
          <div
            style={{
              fontFamily: filmFont,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.32em",
              color: FILM.colors.titanium,
              opacity: nameIn,
            }}
          >
            {FILM.name}
          </div>
          <div
            style={{
              width: 64 * line,
              height: 1,
              background: FILM.colors.accent,
              opacity: line,
            }}
          />
        </div>
      </AbsoluteFill>

      <SelectiveType
        text={FILM.captions.close.text}
        appear={[95, 125]}
        holdUntil={195}
        size={34}
        y={-8}
      />
      <FilmVignette />
    </AbsoluteFill>
  );
};
