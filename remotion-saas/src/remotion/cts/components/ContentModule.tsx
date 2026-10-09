import React from "react";
import { useColors } from "../FilmContext";
import type { FilmColors } from "../theme";
import { defaultColors } from "../theme";
import { sora } from "../fonts";

export type ModuleKind = "card" | "chart" | "image" | "widget" | "text" | "icon";

type Props = {
  kind: ModuleKind;
  width: number;
  height: number;
  depth?: number;
  fill?: string;
  inkOnly?: boolean;
  title?: string;
  rotationY?: number;
  rotationX?: number;
  opacity?: number;
  style?: React.CSSProperties;
};

export const ContentModule: React.FC<Props> = ({
  kind,
  width,
  height,
  depth = 0,
  fill = defaultColors.mist,
  inkOnly = false,
  title,
  rotationY = 0,
  rotationX = 0,
  opacity = 1,
  style,
}) => {
  const colors = useColors();
  const shadow =
    depth > 0.2
      ? `0 ${8 + depth * 12}px ${20 + depth * 24}px rgba(30,28,26,${0.08 + depth * 0.12})`
      : "none";

  const border = inkOnly
    ? `1.5px solid ${colors.ink}`
    : `1px solid rgba(30,28,26,${0.12 + depth * 0.08})`;

  const bg = inkOnly ? "transparent" : fill;

  return (
    <div
      style={{
        width,
        height,
        opacity,
        transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${depth * 40}px)`,
        transformStyle: "preserve-3d",
        background: bg,
        border,
        borderRadius: kind === "widget" ? 16 : 12,
        boxShadow: shadow,
        overflow: "hidden",
        position: "relative",
        fontFamily: sora,
        ...style,
      }}
    >
      {kind === "card" || kind === "text" ? (
        <CardFace title={title} inkOnly={inkOnly} colors={colors} />
      ) : null}
      {kind === "chart" ? <ChartFace inkOnly={inkOnly} colors={colors} /> : null}
      {kind === "image" ? <ImageFace inkOnly={inkOnly} colors={colors} /> : null}
      {kind === "widget" ? <WidgetFace inkOnly={inkOnly} colors={colors} /> : null}
      {kind === "icon" ? <IconFace inkOnly={inkOnly} colors={colors} /> : null}
    </div>
  );
};

const CardFace: React.FC<{
  title?: string;
  inkOnly: boolean;
  colors: FilmColors;
}> = ({ title, inkOnly, colors }) => (
  <div style={{ padding: 18, height: "100%", boxSizing: "border-box" }}>
    <div
      style={{
        width: "42%",
        height: 8,
        borderRadius: 4,
        background: inkOnly ? colors.ink : colors.charcoal,
        opacity: inkOnly ? 0.85 : 0.9,
        marginBottom: 14,
      }}
    />
    <div
      style={{
        width: "78%",
        height: 6,
        borderRadius: 3,
        background: inkOnly ? colors.ink : colors.silver,
        opacity: 0.55,
        marginBottom: 8,
      }}
    />
    <div
      style={{
        width: "62%",
        height: 6,
        borderRadius: 3,
        background: inkOnly ? colors.ink : colors.silver,
        opacity: 0.4,
        marginBottom: 16,
      }}
    />
    {title ? (
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 18,
          fontSize: 13,
          fontWeight: 500,
          color: inkOnly ? colors.ink : colors.charcoal,
          opacity: 0.75,
        }}
      >
        {title}
      </div>
    ) : (
      <div
        style={{
          position: "absolute",
          bottom: 16,
          left: 18,
          right: 18,
          height: 28,
          borderRadius: 8,
          background: inkOnly ? "transparent" : colors.orange,
          border: inkOnly ? `1.5px solid ${colors.ink}` : "none",
          opacity: inkOnly ? 0.7 : 0.95,
        }}
      />
    )}
  </div>
);

const ChartFace: React.FC<{ inkOnly: boolean; colors: FilmColors }> = ({
  inkOnly,
  colors,
}) => {
  const bars = [0.45, 0.7, 0.55, 0.9, 0.65];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 10,
        padding: "22px 20px 18px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h * 100}%`,
            borderRadius: "4px 4px 0 0",
            background: inkOnly
              ? colors.ink
              : i === 3
                ? colors.orange
                : colors.slate,
            opacity: inkOnly ? 0.7 : 0.85,
            border: inkOnly ? `1.5px solid ${colors.ink}` : "none",
          }}
        />
      ))}
    </div>
  );
};

const ImageFace: React.FC<{ inkOnly: boolean; colors: FilmColors }> = ({
  inkOnly,
  colors,
}) => (
  <div style={{ width: "100%", height: "100%", position: "relative" }}>
    <div
      style={{
        position: "absolute",
        inset: 14,
        borderRadius: 8,
        border: `1.5px solid ${inkOnly ? colors.ink : "transparent"}`,
        background: inkOnly
          ? "transparent"
          : `linear-gradient(145deg, ${colors.mist} 0%, ${colors.slate}55 55%, ${colors.orange}40 100%)`,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 22,
        left: 24,
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `1.5px solid ${colors.ink}`,
        background: inkOnly ? "transparent" : colors.canvas,
        opacity: 0.85,
      }}
    />
  </div>
);

const WidgetFace: React.FC<{ inkOnly: boolean; colors: FilmColors }> = ({
  inkOnly,
  colors,
}) => (
  <div
    style={{
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      height: "100%",
      boxSizing: "border-box",
    }}
  >
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          background: inkOnly ? "transparent" : colors.sage,
          border: `1.5px solid ${colors.ink}`,
        }}
      />
      <div
        style={{
          flex: 1,
          height: 7,
          borderRadius: 4,
          background: inkOnly ? colors.ink : colors.charcoal,
          opacity: 0.55,
        }}
      />
    </div>
    <div
      style={{
        flex: 1,
        borderRadius: 10,
        border: `1.5px dashed ${colors.ink}`,
        opacity: 0.45,
        background: inkOnly ? "transparent" : `${colors.sage}22`,
      }}
    />
  </div>
);

const IconFace: React.FC<{ inkOnly: boolean; colors: FilmColors }> = ({
  inkOnly,
  colors,
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        border: `1.75px solid ${colors.ink}`,
        background: inkOnly ? "transparent" : colors.orange,
        opacity: inkOnly ? 0.85 : 0.95,
        transform: "rotate(12deg)",
      }}
    />
  </div>
);
