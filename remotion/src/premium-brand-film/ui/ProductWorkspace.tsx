import {LayoutGrid, Layers, PanelsTopLeft, Sparkles} from "lucide-react";
import {FILM} from "../config";
import {filmFont} from "../fonts";

/** Believable product workspace — structure & craft, no fake metrics/claims. */
export const ProductWorkspace: React.FC<{readonly scale?: number}> = ({
  scale = 1,
}) => {
  const modules = [
    {label: "Discovery", detail: "Problem framing", Icon: Sparkles},
    {label: "Architecture", detail: "System design", Icon: Layers},
    {label: "Experience", detail: "Interface craft", Icon: PanelsTopLeft},
    {label: "Delivery", detail: "Product launch", Icon: LayoutGrid},
  ] as const;

  return (
    <div
      style={{
        width: 860,
        height: 520,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 22,
        background: `linear-gradient(165deg, #1a1b1f 0%, ${FILM.colors.charcoal} 55%, #0e0f12 100%)`,
        border: `1px solid ${FILM.colors.glassBorder}`,
        boxShadow: "0 48px 120px rgba(0,0,0,0.55)",
        overflow: "hidden",
        fontFamily: filmFont,
        color: FILM.colors.warmWhite,
        display: "flex",
      }}
    >
      <div
        style={{
          width: 220,
          borderRight: `1px solid ${FILM.colors.border}`,
          padding: "28px 22px",
          background: "rgba(0,0,0,0.28)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: 12}}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: FILM.colors.accent,
            }}
          />
          <div>
            <div style={{fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em"}}>
              Workspace
            </div>
            <div style={{fontSize: 11, color: FILM.colors.mutedGray, marginTop: 2}}>
              Product system
            </div>
          </div>
        </div>
        {["Overview", "Flows", "Components", "Release"].map((item, i) => (
          <div
            key={item}
            style={{
              fontSize: 13,
              padding: "10px 12px",
              borderRadius: 10,
              background: i === 0 ? FILM.colors.glass : "transparent",
              color: i === 0 ? FILM.colors.warmWhite : FILM.colors.mutedGray,
              border: i === 0 ? `1px solid ${FILM.colors.border}` : "1px solid transparent",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <div style={{flex: 1, padding: 28, display: "flex", flexDirection: "column", gap: 20}}>
        <div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: FILM.colors.mutedGray,
            }}
          >
            Build with clarity
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginTop: 6,
            }}
          >
            Digital product canvas
          </div>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14}}>
          {modules.map(({label, detail, Icon}) => (
            <div
              key={label}
              style={{
                borderRadius: 16,
                border: `1px solid ${FILM.colors.border}`,
                background: FILM.colors.glass,
                padding: "18px 16px",
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "rgba(200,255,77,0.12)",
                  color: FILM.colors.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={16} strokeWidth={2.2} />
              </div>
              <div>
                <div style={{fontSize: 15, fontWeight: 600}}>{label}</div>
                <div style={{fontSize: 12, color: FILM.colors.mutedGray, marginTop: 4}}>
                  {detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            height: 8,
            borderRadius: 999,
            background: FILM.colors.border,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "68%",
              height: "100%",
              borderRadius: 999,
              background: `linear-gradient(90deg, ${FILM.colors.accent}, #9fd63a)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
