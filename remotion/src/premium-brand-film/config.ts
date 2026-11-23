/** Core Tech Solutions — Premium SaaS Brand Film (16:9) */

export const FILM = {
  id: "CTSPremiumBrandFilm",
  width: 1920,
  height: 1080,
  fps: 30,
  /** 30 seconds — VO + visual breathing room */
  durationInFrames: 900,
  name: "CORE TECH SOLUTIONS",
  tagline: "We turn ideas into digital products.",
  colors: {
    graphite: "#0B0B0C",
    charcoal: "#17181A",
    titanium: "#E6E6E4",
    warmWhite: "#F4F2EE",
    mutedGray: "#8E9098",
    border: "#2A2B30",
    accent: "#C8FF4D",
    accentSoft: "rgba(200,255,77,0.16)",
    glass: "rgba(246,244,238,0.07)",
    glassBorder: "rgba(230,230,228,0.2)",
  },
  scenes: {
    atmosphere: {from: 0, durationInFrames: 120},
    spark: {from: 90, durationInFrames: 165},
    products: {from: 225, durationInFrames: 360},
    resolve: {from: 540, durationInFrames: 165},
    brand: {from: 660, durationInFrames: 240},
  },
  /** Selective on-screen type only — not every VO line */
  captions: {
    opening: {from: 48, until: 120, text: "Every great product begins with an idea."},
    mid: {from: 400, until: 500, text: "From concept to digital product."},
    close: {from: 780, until: 900, text: "We turn ideas into digital products."},
  },
} as const;
