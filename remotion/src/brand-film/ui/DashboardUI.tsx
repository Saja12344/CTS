import {
  Activity,
  ArrowUpRight,
  BarChart3,
  LayoutDashboard,
  Users,
} from "lucide-react";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

const metrics = [
  {label: "Active users", value: "12.4k", delta: "+18%", Icon: Users},
  {label: "Conversion", value: "4.8%", delta: "+0.6%", Icon: ArrowUpRight},
  {label: "Revenue", value: "$86k", delta: "+12%", Icon: Activity},
] as const;

const bars = [42, 68, 54, 88, 72, 96, 64, 78, 90, 70, 84, 98];

/** Content-rich analytics dashboard — demo of products Core Tech can build. */
export const DashboardUI: React.FC<{readonly scale?: number}> = ({
  scale = 1,
}) => {
  return (
    <div
      style={{
        width: 720,
        height: 480,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 28,
        background: `linear-gradient(160deg, #1c1d21 0%, ${BRAND.colors.charcoal} 55%, #101114 100%)`,
        border: `1px solid ${BRAND.colors.glassBorder}`,
        boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
        overflow: "hidden",
        fontFamily: brandFontFamily,
        color: BRAND.colors.warmWhite,
        display: "flex",
      }}
    >
      {/* Side nav */}
      <div
        style={{
          width: 72,
          borderRight: `1px solid ${BRAND.colors.border}`,
          padding: "22px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: BRAND.colors.accent,
            color: BRAND.colors.graphite,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LayoutDashboard size={18} strokeWidth={2.4} />
        </div>
        <BarChart3 size={20} color={BRAND.colors.mutedGray} />
        <Users size={20} color={BRAND.colors.mutedGray} />
        <Activity size={20} color={BRAND.colors.mutedGray} />
      </div>

      <div style={{flex: 1, padding: 22, display: "flex", flexDirection: "column", gap: 16}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
          <div>
            <div style={{fontSize: 12, letterSpacing: "0.18em", color: BRAND.colors.mutedGray, textTransform: "uppercase"}}>
              Operations
            </div>
            <div style={{fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", marginTop: 4}}>
              Performance overview
            </div>
          </div>
          <div
            style={{
              fontSize: 12,
              padding: "8px 12px",
              borderRadius: 999,
              border: `1px solid ${BRAND.colors.border}`,
              color: BRAND.colors.titanium,
            }}
          >
            Live · 24h
          </div>
        </div>

        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12}}>
          {metrics.map(({label, value, delta, Icon}) => (
            <div
              key={label}
              style={{
                borderRadius: 18,
                border: `1px solid ${BRAND.colors.border}`,
                background: "rgba(255,255,255,0.03)",
                padding: 14,
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between", marginBottom: 10}}>
                <span style={{fontSize: 12, color: BRAND.colors.mutedGray}}>{label}</span>
                <Icon size={16} color={BRAND.colors.accent} />
              </div>
              <div style={{fontSize: 28, fontWeight: 650, letterSpacing: "-0.04em"}}>{value}</div>
              <div style={{fontSize: 12, color: BRAND.colors.accent, marginTop: 4}}>{delta}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            flex: 1,
            borderRadius: 18,
            border: `1px solid ${BRAND.colors.border}`,
            background: "rgba(0,0,0,0.22)",
            padding: 16,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{display: "flex", justifyContent: "space-between", marginBottom: 14}}>
            <span style={{fontSize: 13, fontWeight: 500}}>Weekly throughput</span>
            <span style={{fontSize: 12, color: BRAND.colors.mutedGray}}>Units</span>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              paddingBottom: 4,
            }}
          >
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: 6,
                  background:
                    i === bars.length - 1
                      ? BRAND.colors.accent
                      : "linear-gradient(180deg, rgba(230,230,228,0.55), rgba(230,230,228,0.12))",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
