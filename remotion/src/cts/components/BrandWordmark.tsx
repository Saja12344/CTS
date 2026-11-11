import React from "react";
import { sora } from "../fonts";
import { colors } from "../theme";

type Props = {
  opacity?: number;
  scale?: number;
  showTagline?: boolean;
};

/**
 * Authentic brand treatment: wordmark only.
 * No icon, logo mark, or temporary symbol.
 */
export const BrandWordmark: React.FC<Props> = ({
  opacity = 1,
  scale = 1,
  showTagline = true,
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 22,
        fontFamily: sora,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 52,
          fontWeight: 600,
          color: colors.charcoal,
          letterSpacing: "0.08em",
          lineHeight: 1.15,
          textTransform: "none",
        }}
      >
        Core Tech Solutions
      </div>
      {showTagline ? (
        <div
          style={{
            fontSize: 22,
            fontWeight: 400,
            color: colors.ink,
            letterSpacing: "0.01em",
            opacity: 0.78,
            maxWidth: 560,
            lineHeight: 1.4,
          }}
        >
          We turn ideas into digital products.
        </div>
      ) : null}
    </div>
  );
};
