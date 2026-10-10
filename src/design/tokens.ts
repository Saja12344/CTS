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
  display: "Inter",
  arabic: "IBM Plex Sans Arabic",
} as const;

/** Visual asset map — one purpose per asset */
export const visualMap = {
  hero: "atmosphere + WebGPU LinearGradient/CursorTrail (shaders/js) + network — logo only in navbar",
  capabilities: "dark tech panels",
  process: "English methodology with solid progress spine",
  manifesto: "typography + soft glow",
  about: "copy panel — no repeated logo",
  contact: "form panel + focus lines",
} as const;
