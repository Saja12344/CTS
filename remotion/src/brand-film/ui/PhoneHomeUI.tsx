import {
  Activity,
  Home,
  LayoutDashboard,
  Search,
  ShoppingBag,
  Users,
} from "lucide-react";
import {Img, staticFile} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

/** Finished product home screen shown inside the assembled phone. */
export const PhoneHomeUI: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg, #141518 0%, ${BRAND.colors.graphite} 100%)`,
        fontFamily: brandFontFamily,
        color: BRAND.colors.warmWhite,
        display: "flex",
        flexDirection: "column",
        padding: "54px 18px 22px",
        boxSizing: "border-box",
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18}}>
        <div>
          <div style={{fontSize: 12, color: BRAND.colors.mutedGray}}>Good evening</div>
          <div style={{fontSize: 24, fontWeight: 650, letterSpacing: "-0.03em"}}>Your workspace</div>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 12,
            background: BRAND.colors.accent,
            color: BRAND.colors.graphite,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LayoutDashboard size={18} />
        </div>
      </div>

      <div
        style={{
          borderRadius: 22,
          overflow: "hidden",
          height: 150,
          position: "relative",
          border: `1px solid ${BRAND.colors.border}`,
          marginBottom: 14,
        }}
      >
        <Img
          src={staticFile("film/city.jpeg")}
          style={{width: "100%", height: "100%", objectFit: "cover"}}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))",
          }}
        />
        <div style={{position: "absolute", left: 14, bottom: 14}}>
          <div style={{fontSize: 11, color: BRAND.colors.accent, letterSpacing: "0.12em", textTransform: "uppercase"}}>
            Live ops
          </div>
          <div style={{fontSize: 18, fontWeight: 600}}>City launch pulse</div>
        </div>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14}}>
        {[
          {label: "Users", value: "12.4k", Icon: Users},
          {label: "Orders", value: "1.2k", Icon: ShoppingBag},
        ].map(({label, value, Icon}) => (
          <div
            key={label}
            style={{
              borderRadius: 18,
              border: `1px solid ${BRAND.colors.border}`,
              background: "rgba(255,255,255,0.03)",
              padding: 14,
            }}
          >
            <Icon size={16} color={BRAND.colors.accent} />
            <div style={{fontSize: 22, fontWeight: 650, marginTop: 10}}>{value}</div>
            <div style={{fontSize: 11, color: BRAND.colors.mutedGray}}>{label}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          borderRadius: 18,
          border: `1px solid ${BRAND.colors.border}`,
          padding: 14,
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: 12}}>
          <span style={{fontSize: 13, fontWeight: 500}}>Today</span>
          <Activity size={15} color={BRAND.colors.accent} />
        </div>
        {["Ship catalog refresh", "Review booking flow", "Publish dashboard"].map((item, i) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              padding: "10px 0",
              borderTop: i === 0 ? "none" : `1px solid ${BRAND.colors.border}`,
              fontSize: 13,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 99,
                background: i === 0 ? BRAND.colors.accent : BRAND.colors.mutedGray,
              }}
            />
            {item}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 12,
          height: 56,
          borderRadius: 18,
          border: `1px solid ${BRAND.colors.border}`,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: BRAND.colors.mutedGray,
        }}
      >
        <Home size={20} color={BRAND.colors.accent} />
        <Search size={20} />
        <ShoppingBag size={20} />
        <Users size={20} />
      </div>
    </div>
  );
};
