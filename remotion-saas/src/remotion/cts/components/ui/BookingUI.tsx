import React from "react";
import { Img, staticFile } from "remotion";
import { CalendarDays, MapPin, Star } from "lucide-react";
import { space } from "../../fonts";
import { colors } from "../../theme";

/** Mobile booking / discovery screen with real imagery */
export const BookingUI: React.FC<{ width?: number; height?: number }> = ({
  width = 300,
  height = 560,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 28,
        background: colors.warmWhite,
        overflow: "hidden",
        fontFamily: space,
        color: colors.graphite,
        boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <Img
          src={staticFile("cts/ui-travel.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.72) 100%)",
          }}
        />
        <div style={{ position: "absolute", left: 18, bottom: 16, color: colors.white }}>
          <div style={{ fontSize: 12, opacity: 0.85, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Voyage
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, marginTop: 4 }}>Lisbon weekend</div>
        </div>
      </div>

      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
            <MapPin size={16} color={colors.orange} />
            Alfama · 2 guests
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 600 }}>
            <Star size={14} color={colors.lime} fill={colors.lime} />
            4.9
          </div>
        </div>

        <div
          style={{
            borderRadius: 16,
            border: `1px solid ${colors.mist}`,
            padding: 14,
            display: "flex",
            gap: 12,
            alignItems: "center",
            background: colors.white,
          }}
        >
          <CalendarDays size={18} color={colors.slate} />
          <div>
            <div style={{ fontSize: 12, color: colors.muted }}>Dates</div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Fri 12 — Sun 14</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {["Private host", "Flexible cancel"].map((t) => (
            <div
              key={t}
              style={{
                borderRadius: 12,
                background: colors.mist,
                padding: "12px 10px",
                fontSize: 12,
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ color: colors.muted, fontSize: 13 }}>Total</span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>$286</span>
          </div>
          <div
            style={{
              height: 48,
              borderRadius: 14,
              background: colors.graphite,
              color: colors.white,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Reserve stay
          </div>
        </div>
      </div>
    </div>
  );
};
