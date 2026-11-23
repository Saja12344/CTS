import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";
import {Atmosphere, FilmVignette} from "../components/Atmosphere";
import {FILM} from "../config";
import {filmFont} from "../fonts";
import {PhoneShell} from "../ui/PhoneShell";
import {ProductWorkspace} from "../ui/ProductWorkspace";

/** Scene 4 — products settle into a composed, confident frame. */
export const ResolveScene: React.FC = () => {
  const frame = useCurrentFrame();

  const settle = interpolate(frame, [0, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const fadeOut = interpolate(frame, [115, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{opacity: fadeOut}}>
      <Atmosphere intensity={0.22} scale={1.05} />
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 36,
          flexDirection: "row",
        }}
      >
        <div
          style={{
            opacity: settle,
            transform: `translateX(${(1 - settle) * -40}px) scale(${0.86 + settle * 0.06})`,
          }}
        >
          <ProductWorkspace scale={0.78} />
        </div>
        <div
          style={{
            opacity: settle,
            transform: `translateX(${(1 - settle) * 40}px) translateY(${(1 - settle) * 20}px) scale(${0.9 + settle * 0.08})`,
          }}
        >
          <PhoneShell width={230} />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 88,
          opacity: interpolate(frame, [40, 70], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            fontFamily: filmFont,
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: FILM.colors.mutedGray,
          }}
        >
          Built to move businesses forward
        </div>
      </AbsoluteFill>
      <FilmVignette />
    </AbsoluteFill>
  );
};
