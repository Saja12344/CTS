import {SIG} from "../config";
import {filmFont} from "../fonts";

/** Cinematic browser chrome for authentic CTS site surfaces. */
export const BrowserFrame: React.FC<{
  readonly children: React.ReactNode;
  readonly url?: string;
  readonly width?: number | string;
  readonly height?: number | string;
  readonly scale?: number;
}> = ({
  children,
  url = "coretech.sa",
  width = "100%",
  height = "100%",
  scale = 1,
}) => {
  return (
    <div
      style={{
        width,
        height,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 14,
        overflow: "hidden",
        background: "#111214",
        border: "1px solid rgba(230,230,228,0.18)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
        display: "flex",
        flexDirection: "column",
        fontFamily: filmFont,
      }}
    >
      <div
        style={{
          height: 42,
          background: "linear-gradient(180deg, #1c1d21 0%, #141518 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 14px",
          flexShrink: 0,
        }}
      >
        <div style={{display: "flex", gap: 6}}>
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <div
              key={c}
              style={{width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.9}}
            />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            height: 24,
            borderRadius: 6,
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.06)",
            color: SIG.colors.muted,
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            letterSpacing: "0.02em",
          }}
        >
          {url}
        </div>
      </div>
      <div style={{flex: 1, position: "relative", overflow: "hidden", background: SIG.colors.graphite}}>
        {children}
      </div>
    </div>
  );
};
