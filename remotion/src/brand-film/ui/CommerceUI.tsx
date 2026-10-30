import {Bell, Package, ShoppingBag, TrendingUp} from "lucide-react";
import {Img, staticFile} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

/** Commerce / orders secondary interface — distinct from dashboard & discovery. */
export const CommerceUI: React.FC<{readonly scale?: number}> = ({scale = 1}) => {
  return (
    <div
      style={{
        width: 520,
        height: 420,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 26,
        background: `linear-gradient(145deg, #22242a, ${BRAND.colors.charcoal})`,
        border: `1px solid ${BRAND.colors.glassBorder}`,
        boxShadow: "0 34px 80px rgba(0,0,0,0.5)",
        overflow: "hidden",
        fontFamily: brandFontFamily,
        color: BRAND.colors.warmWhite,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <div style={{fontSize: 12, color: BRAND.colors.mutedGray, letterSpacing: "0.14em", textTransform: "uppercase"}}>
            Commerce
          </div>
          <div style={{fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em"}}>Orders & inventory</div>
        </div>
        <div style={{display: "flex", gap: 10, alignItems: "center"}}>
          <Bell size={18} color={BRAND.colors.titanium} />
          <ShoppingBag size={18} color={BRAND.colors.accent} />
        </div>
      </div>

      <div style={{display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12, flex: 1}}>
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: `1px solid ${BRAND.colors.border}`,
            position: "relative",
          }}
        >
          <Img
            src={staticFile("film/product-b.jpeg")}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
          <div
            style={{
              position: "absolute",
              left: 12,
              bottom: 12,
              right: 12,
              padding: 12,
              borderRadius: 14,
              background: "rgba(11,11,12,0.72)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{fontSize: 13, fontWeight: 600}}>Featured drop</div>
            <div style={{fontSize: 11, color: BRAND.colors.mutedGray, marginTop: 3}}>284 units · shipping today</div>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: 10}}>
          {[
            {label: "Fulfilled", value: "1,284", Icon: Package},
            {label: "Growth", value: "+23%", Icon: TrendingUp},
          ].map(({label, value, Icon}) => (
            <div
              key={label}
              style={{
                flex: 1,
                borderRadius: 16,
                border: `1px solid ${BRAND.colors.border}`,
                background: "rgba(255,255,255,0.03)",
                padding: 14,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <span style={{fontSize: 12, color: BRAND.colors.mutedGray}}>{label}</span>
                <Icon size={16} color={BRAND.colors.accent} />
              </div>
              <div style={{fontSize: 28, fontWeight: 650, letterSpacing: "-0.04em"}}>{value}</div>
            </div>
          ))}
          <div
            style={{
              borderRadius: 16,
              background: BRAND.colors.accent,
              color: BRAND.colors.graphite,
              padding: "12px 14px",
              fontWeight: 650,
              fontSize: 13,
              textAlign: "center",
            }}
          >
            Open catalog
          </div>
        </div>
      </div>
    </div>
  );
};
