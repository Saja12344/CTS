import React from "react";
import { Img, staticFile } from "remotion";
import { Bell, Home, LayoutGrid, Search, UserRound } from "lucide-react";
import { space } from "../../fonts";
import { colors } from "../../theme";

/** Finished product home screen shown inside the assembled phone */
export const PhoneHomeUI: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: colors.warmWhite,
        fontFamily: space,
        color: colors.graphite,
        display: "flex",
        flexDirection: "column",
        padding: "42px 16px 18px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 12, color: colors.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Workspace
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 2 }}>Good morning</div>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            background: colors.graphite,
            color: colors.lime,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Bell size={16} />
        </div>
      </div>

      <div
        style={{
          marginTop: 16,
          borderRadius: 18,
          overflow: "hidden",
          height: 140,
          position: "relative",
          background: colors.charcoal,
        }}
      >
        <Img
          src={staticFile("cts/ui-desk.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg, rgba(11,11,12,0.75), transparent 60%)",
          }}
        />
        <div style={{ position: "absolute", left: 14, bottom: 14, color: colors.white }}>
          <div style={{ fontSize: 12, opacity: 0.8 }}>Today</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Ship dashboard v2</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
        {[
          { t: "Analytics", s: "+18%", c: colors.orange },
          { t: "Tasks", s: "6 open", c: colors.lime },
        ].map((card) => (
          <div
            key={card.t}
            style={{
              borderRadius: 16,
              background: colors.white,
              border: `1px solid ${colors.mist}`,
              padding: 14,
              boxShadow: "0 8px 20px rgba(11,11,12,0.06)",
            }}
          >
            <div style={{ fontSize: 12, color: colors.muted }}>{card.t}</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6, color: card.c }}>{card.s}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 12,
          borderRadius: 16,
          background: colors.white,
          border: `1px solid ${colors.mist}`,
          padding: 12,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {["Review booking UI", "Sync notifications", "Prep client demo"].map((row, i) => (
          <div key={row} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: i === 0 ? colors.orange : colors.mist,
              }}
            />
            {row}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          height: 54,
          borderRadius: 18,
          background: colors.graphite,
          color: colors.titanium,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0 8px",
        }}
      >
        <Home size={18} color={colors.lime} />
        <Search size={18} />
        <LayoutGrid size={18} />
        <UserRound size={18} />
      </div>
    </div>
  );
};
