import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {Atmosphere, FilmVignette} from "../components/Atmosphere";
import {SelectiveType} from "../components/SelectiveType";
import {FILM} from "../config";
import {PhoneShell} from "../ui/PhoneShell";
import {ProductWorkspace} from "../ui/ProductWorkspace";
import {SiteFrame} from "../ui/SiteFrame";

/** Scene 3 — idea becomes coherent digital products (cinematic composition). */
export const ProductWorldScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const push = interpolate(frame, [0, 300], [1.06, 0.96], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  });

  const dashIn = interpolate(frame, [8, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const siteIn = interpolate(frame, [70, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const phoneIn = interpolate(frame, [120, 165], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const parallax = Math.sin(frame / fps) * 6;
  const fadeOut = interpolate(frame, [290, 330], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{opacity: fadeOut}}>
      <Atmosphere intensity={0.28} driftX={frame * 0.05} scale={1.08} />

      <AbsoluteFill
        style={{
          transform: `scale(${push})`,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Dashboard — hero product */}
        <div
          style={{
            position: "absolute",
            opacity: dashIn,
            transform: `translate(${-40 + parallax}px, ${20 + (1 - dashIn) * 40}px) scale(${0.92 + dashIn * 0.08})`,
            filter: `blur(${(1 - dashIn) * 6}px)`,
            zIndex: 2,
          }}
        >
          <ProductWorkspace scale={0.98} />
        </div>

        {/* Site — left depth layer */}
        <div
          style={{
            position: "absolute",
            opacity: siteIn * 0.95,
            transform: `translate(${-520 - parallax * 1.4}px, ${-40 + (1 - siteIn) * 30}px) rotate(-4deg) scale(${0.72 + siteIn * 0.05})`,
            filter: `blur(${(1 - siteIn) * 4}px)`,
            zIndex: 1,
          }}
        >
          <SiteFrame scale={0.9} />
        </div>

        {/* Phone — right accent */}
        <div
          style={{
            position: "absolute",
            opacity: phoneIn,
            transform: `translate(${520 + parallax}px, ${30 + (1 - phoneIn) * 36}px) rotate(3deg) scale(${0.9 + phoneIn * 0.08})`,
            filter: `blur(${(1 - phoneIn) * 4}px)`,
            zIndex: 3,
          }}
        >
          <PhoneShell width={250} />
        </div>
      </AbsoluteFill>

      <SelectiveType
        text={FILM.captions.mid.text}
        appear={[160, 190]}
        holdUntil={260}
        size={36}
        y={-10}
      />
      <FilmVignette />
    </AbsoluteFill>
  );
};
