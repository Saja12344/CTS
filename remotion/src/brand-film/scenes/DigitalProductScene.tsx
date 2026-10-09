import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {SceneCaption} from "../components/SceneCaption";

/** 180–329 — geometric idea becomes a clean digital interface */
export const DigitalProductScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const shell = spring({
    frame,
    fps,
    config: {damping: 200, stiffness: 90},
  });

  const rows = [0, 1, 2, 3].map((i) =>
    interpolate(frame, [12 + i * 10, 28 + i * 10], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.22, 1, 0.36, 1),
    }),
  );

  const accentBar = interpolate(frame, [50, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        <div
          style={{
            width: 520,
            height: 920,
            borderRadius: 48,
            border: `1px solid ${BRAND.colors.border}`,
            backgroundColor: BRAND.colors.charcoal,
            padding: 40,
            opacity: 0.2 + shell * 0.8,
            transform: `translateY(${(1 - shell) * 40}px) scale(${0.94 + shell * 0.06})`,
            boxShadow: "0 40px 120px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: rows[0],
            }}
          >
            <div
              style={{
                width: 72,
                height: 8,
                borderRadius: 4,
                backgroundColor: BRAND.colors.mutedGray,
              }}
            />
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: BRAND.colors.accent,
                opacity: 0.85,
              }}
            />
          </div>

          {/* Hero block */}
          <div
            style={{
              height: 180,
              borderRadius: 24,
              background: `linear-gradient(145deg, ${BRAND.colors.border} 0%, #101114 100%)`,
              border: `1px solid ${BRAND.colors.border}`,
              opacity: rows[1],
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 28,
                bottom: 28,
                width: 160 * accentBar,
                height: 6,
                borderRadius: 3,
                backgroundColor: BRAND.colors.accent,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                top: 36,
                width: 120,
                height: 10,
                borderRadius: 5,
                backgroundColor: BRAND.colors.titanium,
                opacity: 0.7,
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 28,
                top: 60,
                width: 200,
                height: 8,
                borderRadius: 4,
                backgroundColor: BRAND.colors.mutedGray,
                opacity: 0.5,
              }}
            />
          </div>

          {/* List rows */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                height: 88,
                borderRadius: 20,
                border: `1px solid ${BRAND.colors.border}`,
                backgroundColor: "#121316",
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "0 24px",
                opacity: rows[Math.min(i + 1, 3)],
                transform: `translateX(${(1 - rows[Math.min(i + 1, 3)]) * 24}px)`,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  border: `1px solid ${BRAND.colors.border}`,
                  backgroundColor: i === 0 ? "rgba(200,255,77,0.12)" : "transparent",
                }}
              />
              <div style={{flex: 1, display: "flex", flexDirection: "column", gap: 10}}>
                <div
                  style={{
                    width: 140 + i * 24,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: BRAND.colors.titanium,
                    opacity: 0.75,
                  }}
                />
                <div
                  style={{
                    width: 200,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: BRAND.colors.mutedGray,
                    opacity: 0.45,
                  }}
                />
              </div>
            </div>
          ))}

          <div style={{flex: 1}} />

          {/* CTA bar */}
          <div
            style={{
              height: 64,
              borderRadius: 16,
              backgroundColor: BRAND.colors.warmWhite,
              opacity: rows[3],
              transform: `scale(${0.96 + rows[3] * 0.04})`,
            }}
          />
        </div>
      </AbsoluteFill>
      <SceneCaption text={BRAND.scenes.digital.caption} enterAt={18} />
    </AbsoluteFill>
  );
};
