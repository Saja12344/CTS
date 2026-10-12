import {FILM} from "../config";
import {filmFont} from "../fonts";

/** Minimal marketing-site frame aligned with CTS site language. */
export const SiteFrame: React.FC<{readonly scale?: number}> = ({scale = 1}) => {
  return (
    <div
      style={{
        width: 720,
        height: 440,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 18,
        background: FILM.colors.warmWhite,
        border: `1px solid ${FILM.colors.glassBorder}`,
        boxShadow: "0 40px 100px rgba(0,0,0,0.45)",
        overflow: "hidden",
        fontFamily: filmFont,
        color: FILM.colors.graphite,
      }}
    >
      <div
        style={{
          height: 48,
          borderBottom: "1px solid rgba(11,11,12,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 22px",
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: 10}}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              background: FILM.colors.graphite,
            }}
          />
          <div style={{fontSize: 12, fontWeight: 600, letterSpacing: "0.12em"}}>
            CORE TECH
          </div>
        </div>
        <div style={{display: "flex", gap: 18, fontSize: 11, color: "rgba(11,11,12,0.55)"}}>
          <span>Work</span>
          <span>Approach</span>
          <span>Contact</span>
        </div>
      </div>
      <div style={{padding: "36px 34px 28px"}}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(11,11,12,0.45)",
          }}
        >
          Ideas into products
        </div>
        <div
          style={{
            marginTop: 14,
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
            maxWidth: 480,
          }}
        >
          Digital products designed around real needs.
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 14,
            color: "rgba(11,11,12,0.58)",
            maxWidth: 420,
            lineHeight: 1.5,
          }}
        >
          From first concept to final detail — clarity, structure, and craft.
        </div>
        <div
          style={{
            marginTop: 28,
            display: "inline-flex",
            padding: "12px 18px",
            background: FILM.colors.graphite,
            color: FILM.colors.warmWhite,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Start a project
        </div>
      </div>
    </div>
  );
};
