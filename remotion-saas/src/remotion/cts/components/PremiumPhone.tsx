import React from "react";
import { colors } from "../theme";
import { PhoneHomeUI } from "./ui/PhoneHomeUI";

type Props = {
  width?: number;
  rotateY?: number;
  rotateX?: number;
  scale?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

/** Convincing physical smartphone with glass + specular frame */
export const PremiumPhone: React.FC<Props> = ({
  width = 360,
  rotateY = -18,
  rotateX = 8,
  scale = 1,
  style,
  children,
}) => {
  const height = width * 2.05;
  const radius = width * 0.14;

  return (
    <div
      style={{
        width,
        height,
        transform: `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transformStyle: "preserve-3d",
        borderRadius: radius,
        background: "linear-gradient(145deg, #3A3A3C 0%, #1A1A1C 42%, #0A0A0B 100%)",
        boxShadow:
          "0 50px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.5)",
        padding: width * 0.032,
        boxSizing: "border-box",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: height * 0.03,
          left: "50%",
          transform: "translateX(-50%)",
          width: width * 0.3,
          height: width * 0.055,
          borderRadius: 20,
          background: "#050505",
          zIndex: 2,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: radius * 0.82,
          overflow: "hidden",
          background: colors.screen,
          position: "relative",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {children ?? <PhoneHomeUI />}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.16) 0%, transparent 28%, transparent 62%, rgba(255,255,255,0.05) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};
