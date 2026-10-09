/** Core Tech design system — documented HEX values */
export const colors = {
  graphite: "#0B0B0C",
  charcoal: "#17181A",
  titanium: "#E6E6E4",
  warmWhite: "#F4F2EE",
  mutedGray: "#8E9098",
  border: "#2A2B30",
  accent: "#C8FF4D", // restrained acid lime — CTAs, section index, hover accents only
} as const;

export const typography = {
  display: "Manrope",
  arabic: "IBM Plex Sans Arabic",
} as const;

export const motion = {
  durationMs: { fast: 400, base: 600, slow: 800 },
  ease: [0.22, 1, 0.36, 1] as const,
} as const;
