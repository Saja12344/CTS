import {BRAND} from "../brand";
import {PhoneHomeUI} from "./PhoneHomeUI";

type Props = {
  readonly width?: number;
  readonly screenScale?: number;
  readonly children?: React.ReactNode;
};

/** Convincing smartphone chassis with glass + finished screen content. */
export const PhoneDevice: React.FC<Props> = ({
  width = 420,
  children,
}) => {
  const height = width * (19.5 / 9);
  const bezel = 12;

  return (
    <div
      style={{
        width,
        height,
        borderRadius: width * 0.14,
        padding: bezel,
        background: `linear-gradient(145deg, #3a3b40 0%, #151618 40%, #0a0a0b 100%)`,
        boxShadow: `
          0 50px 120px rgba(0,0,0,0.65),
          inset 0 1px 0 rgba(255,255,255,0.25),
          inset 0 -1px 0 rgba(255,255,255,0.05)
        `,
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Side button hints */}
      <div
        style={{
          position: "absolute",
          right: -3,
          top: height * 0.22,
          width: 3,
          height: 54,
          borderRadius: 2,
          background: "#2c2d31",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: height * 0.18,
          width: 3,
          height: 28,
          borderRadius: 2,
          background: "#2c2d31",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -3,
          top: height * 0.24,
          width: 3,
          height: 48,
          borderRadius: 2,
          background: "#2c2d31",
        }}
      />

      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: width * 0.11,
          overflow: "hidden",
          background: BRAND.colors.graphite,
          position: "relative",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: width * 0.28,
            height: 28,
            borderRadius: 20,
            background: "#050505",
            zIndex: 5,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />
        {/* Glass reflection */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(115deg, rgba(255,255,255,0.14) 0%, transparent 32%, transparent 68%, rgba(255,255,255,0.04) 100%)",
            pointerEvents: "none",
            zIndex: 4,
          }}
        />
        <div style={{width: "100%", height: "100%", position: "relative", zIndex: 1}}>
          {children ?? <PhoneHomeUI />}
        </div>
      </div>
    </div>
  );
};
