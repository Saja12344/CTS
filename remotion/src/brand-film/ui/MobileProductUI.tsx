import {Heart, MapPin, Search, Star} from "lucide-react";
import {Img, staticFile} from "remotion";
import {BRAND} from "../brand";
import {brandFontFamily} from "../fonts";

/** Mobile discovery / booking style product screen with real imagery. */
export const MobileProductUI: React.FC<{readonly scale?: number}> = ({
  scale = 1,
}) => {
  return (
    <div
      style={{
        width: 360,
        height: 720,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
        borderRadius: 36,
        background: BRAND.colors.charcoal,
        border: `1px solid ${BRAND.colors.glassBorder}`,
        boxShadow: "0 36px 90px rgba(0,0,0,0.5)",
        overflow: "hidden",
        fontFamily: brandFontFamily,
        color: BRAND.colors.warmWhite,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{padding: "18px 18px 10px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <div style={{fontSize: 11, letterSpacing: "0.16em", color: BRAND.colors.mutedGray, textTransform: "uppercase"}}>
            Discover
          </div>
          <div style={{fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em"}}>Nearby spaces</div>
        </div>
        <Search size={20} color={BRAND.colors.titanium} />
      </div>

      <div style={{padding: "0 18px 14px", display: "flex", gap: 8}}>
        {["All", "Work", "Events"].map((tab, i) => (
          <div
            key={tab}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              background: i === 0 ? BRAND.colors.accent : "transparent",
              color: i === 0 ? BRAND.colors.graphite : BRAND.colors.mutedGray,
              border: i === 0 ? "none" : `1px solid ${BRAND.colors.border}`,
            }}
          >
            {tab}
          </div>
        ))}
      </div>

      <div style={{padding: "0 18px", flex: 1, display: "flex", flexDirection: "column", gap: 14}}>
        <div
          style={{
            position: "relative",
            height: 220,
            borderRadius: 24,
            overflow: "hidden",
            border: `1px solid ${BRAND.colors.border}`,
          }}
        >
          <Img
            src={staticFile("film/product-a.jpeg")}
            style={{width: "100%", height: "100%", objectFit: "cover"}}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75))",
            }}
          />
          <div style={{position: "absolute", top: 14, right: 14}}>
            <Heart size={18} color={BRAND.colors.warmWhite} />
          </div>
          <div style={{position: "absolute", left: 16, bottom: 16, right: 16}}>
            <div style={{fontSize: 18, fontWeight: 600}}>Studio Loft</div>
            <div style={{display: "flex", gap: 8, alignItems: "center", marginTop: 4, fontSize: 12, color: BRAND.colors.titanium}}>
              <MapPin size={12} /> Riyadh · 1.2 km
              <span style={{display: "inline-flex", alignItems: "center", gap: 3, marginLeft: "auto"}}>
                <Star size={12} color={BRAND.colors.accent} fill={BRAND.colors.accent} /> 4.9
              </span>
            </div>
          </div>
        </div>

        {[
          {title: "Focus Pod", meta: "Available today · from $28", img: "film/product-b.jpeg"},
          {title: "City View Desk", meta: "Book evenings · from $18", img: "film/city.jpeg"},
        ].map((row) => (
          <div
            key={row.title}
            style={{
              display: "flex",
              gap: 12,
              padding: 10,
              borderRadius: 18,
              border: `1px solid ${BRAND.colors.border}`,
              background: "rgba(255,255,255,0.03)",
              alignItems: "center",
            }}
          >
            <Img
              src={staticFile(row.img)}
              style={{width: 64, height: 64, borderRadius: 14, objectFit: "cover"}}
            />
            <div style={{flex: 1}}>
              <div style={{fontSize: 15, fontWeight: 600}}>{row.title}</div>
              <div style={{fontSize: 12, color: BRAND.colors.mutedGray, marginTop: 4}}>{row.meta}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{padding: 18}}>
        <div
          style={{
            height: 52,
            borderRadius: 16,
            background: BRAND.colors.warmWhite,
            color: BRAND.colors.graphite,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Reserve space
        </div>
      </div>
    </div>
  );
};
