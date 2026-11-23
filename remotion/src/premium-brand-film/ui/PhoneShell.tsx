import {FILM} from "../config";
import {filmFont} from "../fonts";

export const PhoneShell: React.FC<{readonly width?: number}> = ({width = 280}) => {
  const height = width * (19.5 / 9);
  const bezel = 10;

  return (
    <div
      style={{
        width,
        height,
        borderRadius: width * 0.14,
        padding: bezel,
        background: "linear-gradient(145deg, #3a3b40 0%, #151618 40%, #0a0a0b 100%)",
        boxShadow: "0 40px 90px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.22)",
        boxSizing: "border-box",
        fontFamily: filmFont,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: width * 0.11,
          overflow: "hidden",
          background: FILM.colors.graphite,
          color: FILM.colors.warmWhite,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: width * 0.28,
            height: 18,
            borderRadius: 20,
            background: "#050505",
          }}
        />
        <div style={{padding: "42px 18px 18px"}}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: FILM.colors.mutedGray,
            }}
          >
            Mobile product
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
            }}
          >
            Clarity in every tap
          </div>
          <div
            style={{
              marginTop: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {["Home", "Explore", "Account"].map((label, i) => (
              <div
                key={label}
                style={{
                  borderRadius: 14,
                  padding: "14px 14px",
                  border: `1px solid ${FILM.colors.border}`,
                  background: i === 0 ? "rgba(200,255,77,0.1)" : FILM.colors.glass,
                }}
              >
                <div style={{fontSize: 13, fontWeight: 500}}>{label}</div>
                <div style={{fontSize: 11, color: FILM.colors.mutedGray, marginTop: 4}}>
                  Designed for real use
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
