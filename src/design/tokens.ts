/** Core Tech design system */
export const colors = {
  graphite: "#0B0B0C",
  charcoal: "#17181A",
  titanium: "#E6E6E4",
  warmWhite: "#F4F2EE",
  mutedGray: "#8E9098",
  border: "#2A2B30",
  accent: "#C8FF4D",
} as const;

export const typography = {
  display: "Space Grotesk",
  arabic: "IBM Plex Sans Arabic",
} as const;

/** Visual asset map — one purpose per asset */
export const visualMap = {
  hero: "hero-metallic.jpg — signature sculptural mark only",
  capabilities: "typography + hairline rows — no sculpture",
  process: "numbered progression columns — layout as motion",
  manifesto: "typography + negative space only",
  about: "logo-dark mark only",
  contact: "no image — form opens on demand",
} as const;
