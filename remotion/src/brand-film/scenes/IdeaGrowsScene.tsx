import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {Caption} from "../components/Caption";

/** Dense luminous planes — idea expands until it owns the entire frame */
export const IdeaGrowsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const cam = interpolate(frame, [0, durationInFrames], [0, 260], {
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const fill = interpolate(frame, [40, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const planes = [
    {w: 220, h: 220, rx: 40, x: 0, y: 0, z: 0, rot: -6},
    {w: 480, h: 340, rx: 36, x: -80, y: 40, z: -80, rot: 14},
    {w: 560, h: 420, rx: 44, x: 120, y: -60, z: -160, rot: -18},
    {w: 720, h: 520, rx: 48, x: -40, y: 90, z: -240, rot: 10},
    {w: 980, h: 720, rx: 56, x: 60, y: -30, z: -340, rot: -8},
    {w: 1400, h: 1100, rx: 64, x: 0, y: 20, z: -480, rot: 4},
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND.colors.graphite,
        perspective: 1100,
        overflow: "hidden",
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 48%, rgba(200,255,77,${0.22 + fill * 0.28}) 0%, rgba(23,24,26,0.4) 40%, ${BRAND.colors.graphite} 72%)`,
        }}
      />

      <AbsoluteFill
        style={{
          transform: `translateZ(${cam}px) scale(${0.7 + progress * 0.95})`,
          transformStyle: "preserve-3d",
        }}
      >
        {planes.map((p, i) => {
          const appear = interpolate(frame, [i * 6, i * 6 + 22], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: "50%",
                top: "48%",
                width: p.w,
                height: p.h,
                marginLeft: -p.w / 2 + p.x,
                marginTop: -p.h / 2 + p.y,
                borderRadius: p.rx,
                opacity: appear * (0.95 - i * 0.08),
                background:
                  i === 0
                    ? `radial-gradient(circle, ${BRAND.colors.accent} 0%, rgba(200,255,77,0.35) 40%, transparent 70%)`
                    : `linear-gradient(145deg, rgba(246,244,238,${0.14 * appear}), rgba(200,255,77,${0.1 * appear}), rgba(23,24,26,${0.55 * appear}))`,
                border: `1px solid rgba(200,255,77,${0.18 + appear * 0.25})`,
                boxShadow:
                  i === 0
                    ? "0 0 100px rgba(200,255,77,0.7)"
                    : "0 40px 100px rgba(0,0,0,0.4)",
                transform: `translateZ(${p.z}px) rotateX(${18 + i * 3}deg) rotateY(${p.rot * appear}deg)`,
                backdropFilter: "blur(6px)",
              }}
            />
          );
        })}

        {/* Specular shards filling edges */}
        {Array.from({length: 14}).map((_, i) => {
          const ang = (i / 14) * Math.PI * 2;
          const dist = 180 + progress * (220 + (i % 5) * 40);
          const x = Math.cos(ang) * dist;
          const y = Math.sin(ang) * dist * 1.15;
          const appear = interpolate(frame, [10 + i * 3, 30 + i * 3], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={`d-${i}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "48%",
                width: 10 + (i % 3) * 6,
                height: 10 + (i % 3) * 6,
                marginLeft: x,
                marginTop: y,
                borderRadius: i % 2 === 0 ? 3 : "50%",
                background: BRAND.colors.accent,
                opacity: appear * (0.25 + (i % 4) * 0.1),
                boxShadow: "0 0 16px rgba(200,255,77,0.55)",
                transform: `translateZ(${-60 - i * 12}px)`,
              }}
            />
          );
        })}
      </AbsoluteFill>

      {/* Immersion: full-frame light field late in scene */}
      <AbsoluteFill
        style={{
          opacity: fill,
          background: `
            radial-gradient(circle at 30% 30%, rgba(200,255,77,0.2), transparent 35%),
            radial-gradient(circle at 70% 60%, rgba(246,244,238,0.08), transparent 40%),
            linear-gradient(180deg, rgba(200,255,77,0.08), transparent 40%, rgba(11,11,12,0.5))
          `,
        }}
      />

      <Caption text={BRAND.scenes.grows.caption} enterAt={18} />
    </AbsoluteFill>
  );
};
