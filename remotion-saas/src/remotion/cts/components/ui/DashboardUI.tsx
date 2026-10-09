import React from "react";
import { Activity, ArrowUpRight, Users } from "lucide-react";
import { space } from "../../fonts";
import { colors } from "../../theme";

/** Content-rich analytics dashboard — visual demo, not a client claim */
export const DashboardUI: React.FC<{ width?: number; height?: number }> = ({
  width = 520,
  height = 360,
}) => {
  const bars = [42, 68, 55, 82, 60, 94, 70];
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 22,
        background: `linear-gradient(160deg, #1C1E22 0%, ${colors.charcoal} 55%, #121316 100%)`,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 28px 60px rgba(0,0,0,0.45)",
        overflow: "hidden",
        fontFamily: space,
        color: colors.titanium,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.16em", color: colors.muted, textTransform: "uppercase" }}>
            Orbit Analytics
          </div>
          <div style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>Weekly pulse</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: `${colors.lime}22`,
            color: colors.lime,
            padding: "8px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <ArrowUpRight size={14} />
          +18.4%
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, padding: 18 }}>
        {[
          { label: "Active users", value: "12.4k", icon: Users },
          { label: "Sessions", value: "48.2k", icon: Activity },
          { label: "Conversion", value: "3.8%", icon: ArrowUpRight },
        ].map((m) => (
          <div
            key={m.label}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 14,
            }}
          >
            <m.icon size={16} color={colors.lime} />
            <div style={{ fontSize: 22, fontWeight: 600, marginTop: 10 }}>{m.value}</div>
            <div style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>{m.label}</div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: "0 18px 18px", display: "flex", alignItems: "flex-end", gap: 10 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              borderRadius: "8px 8px 4px 4px",
              background:
                i === bars.length - 1
                  ? `linear-gradient(180deg, ${colors.orange} 0%, ${colors.orangeSoft} 100%)`
                  : `linear-gradient(180deg, ${colors.titanium}55 0%, ${colors.muted}33 100%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
