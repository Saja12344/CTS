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
  hero: "logo-mark-ref — assemble ribbon + stem into Core Tech mark",
  capabilities: "typography + hairline draw — no sculpture",
  process: "scroll-scrubbed progress spine through methodology steps",
  manifesto: "staggered typography clip reveal",
  about: "logo-dark mark echo",
  contact: "form focus lines + button motion",
} as const;
