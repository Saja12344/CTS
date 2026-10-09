import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {BRAND} from "../brand";
import {SceneCaption} from "../components/SceneCaption";

/** 75–179 — clarity / structure */
export const StructureScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const draw = interpolate(frame, [0, 1.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const cross = interpolate(frame, [0.4 * fps, 1.6 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

  const frameSize = 520;
  const stroke = 1.5;

  return (
    <AbsoluteFill style={{backgroundColor: BRAND.colors.graphite}}>
      <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
        <div style={{position: "relative", width: frameSize, height: frameSize}}>
          {/* Outer frame — drawn as four edges via scale */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: `${stroke}px solid ${BRAND.colors.titanium}`,
              opacity: 0.85,
              transform: `scale(${0.86 + draw * 0.14})`,
              clipPath: `inset(${(1 - draw) * 50}% ${(1 - draw) * 50}% ${(1 - draw) * 50}% ${(1 - draw) * 50}%)`,
            }}
          />
          {/* Inner guide */}
          <div
            style={{
              position: "absolute",
              inset: 72,
              border: `1px solid ${BRAND.colors.border}`,
              opacity: draw * 0.9,
            }}
          />
          {/* Crosshair */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 40,
              bottom: 40,
              width: 1,
              marginLeft: -0.5,
              backgroundColor: BRAND.colors.accent,
              opacity: 0.55 * cross,
              transform: `scaleY(${cross})`,
              transformOrigin: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 40,
              right: 40,
              height: 1,
              marginTop: -0.5,
              backgroundColor: BRAND.colors.accent,
              opacity: 0.55 * cross,
              transform: `scaleX(${cross})`,
              transformOrigin: "center",
            }}
          />
          {/* Corner ticks */}
          {[0, 1, 2, 3].map((i) => {
            const top = i < 2;
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: 28,
                  height: 28,
                  top: top ? 0 : undefined,
                  bottom: top ? undefined : 0,
                  left: left ? 0 : undefined,
                  right: left ? undefined : 0,
                  borderTop: top
                    ? `2px solid ${BRAND.colors.warmWhite}`
                    : undefined,
                  borderBottom: top
                    ? undefined
                    : `2px solid ${BRAND.colors.warmWhite}`,
                  borderLeft: left
                    ? `2px solid ${BRAND.colors.warmWhite}`
                    : undefined,
                  borderRight: left
                    ? undefined
                    : `2px solid ${BRAND.colors.warmWhite}`,
                  opacity: draw,
                }}
              />
            );
          })}
        </div>
      </AbsoluteFill>
      <SceneCaption text={BRAND.scenes.structure.caption} enterAt={14} />
    </AbsoluteFill>
  );
};
