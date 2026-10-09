import React from "react";
import { useColors } from "../FilmContext";
import { sora } from "../fonts";

type Props = {
  width?: number;
  rotateY?: number;
  rotateX?: number;
  scale?: number;
  uiProgress?: number;
  highlight?: number;
  style?: React.CSSProperties;
};

export const Smartphone: React.FC<Props> = ({
  width = 320,
  rotateY = -18,
  rotateX = 6,
  scale = 1,
  uiProgress = 1,
  highlight = 0,
  style,
}) => {
  const colors = useColors();
  const height = width * 2.05;
  const radius = width * 0.14;

  return (
    <div
      style={{
        width,
        height,
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: "preserve-3d",
        borderRadius: radius,
        background: `linear-gradient(145deg, #3A3734 0%, ${colors.charcoal} 40%, #1A1816 100%)`,
        boxShadow:
          "0 40px 80px rgba(20,18,16,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
        padding: width * 0.035,
        boxSizing: "border-box",
        position: "relative",
        fontFamily: sora,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: radius * 0.82,
          background: colors.screen,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <OrbitUI progress={uiProgress} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${-40 + highlight * 140}%`,
            width: "35%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
            pointerEvents: "none",
            transform: "skewX(-12deg)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: height * 0.028,
          left: "50%",
          transform: "translateX(-50%)",
          width: width * 0.28,
          height: width * 0.055,
          borderRadius: 20,
          background: "#0A0A0A",
        }}
      />
    </div>
  );
};

const OrbitUI: React.FC<{ progress: number }> = ({ progress }) => {
  const colors = useColors();
  const show = (threshold: number) => Math.min(1, Math.max(0, (progress - threshold) / 0.15));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: colors.canvas,
        color: colors.ink,
        padding: "42px 16px 16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ opacity: show(0), display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, color: colors.silver, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Orbit
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 2 }}>Today</div>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            background: colors.orange,
            opacity: 0.95,
          }}
        />
      </div>

      <div
        style={{
          opacity: show(0.2),
          background: colors.white,
          borderRadius: 14,
          padding: 14,
          boxShadow: "0 8px 20px rgba(30,28,26,0.08)",
          border: `1px solid ${colors.mist}`,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Product spine</div>
        <div style={{ height: 6, borderRadius: 3, background: colors.mist, marginBottom: 6, width: "88%" }} />
        <div style={{ height: 6, borderRadius: 3, background: colors.mist, width: "64%" }} />
      </div>

      <div style={{ opacity: show(0.4), display: "flex", gap: 10 }}>
        <div
          style={{
            flex: 1,
            height: 88,
            borderRadius: 14,
            background: `linear-gradient(145deg, ${colors.mist}, ${colors.slate}66)`,
            boxShadow: "0 6px 16px rgba(30,28,26,0.08)",
          }}
        />
        <div
          style={{
            flex: 1,
            height: 88,
            borderRadius: 14,
            background: colors.white,
            border: `1px solid ${colors.mist}`,
            padding: 10,
            display: "flex",
            alignItems: "flex-end",
            gap: 5,
            boxSizing: "border-box",
          }}
        >
          {[0.4, 0.65, 0.5, 0.85].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h * 100}%`,
                borderRadius: "3px 3px 0 0",
                background: i === 3 ? colors.orange : colors.slate,
                opacity: 0.85,
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          opacity: show(0.6),
          marginTop: "auto",
          height: 44,
          borderRadius: 12,
          background: colors.orange,
          color: colors.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: "0.02em",
        }}
      >
        Open workspace
      </div>
    </div>
  );
};
