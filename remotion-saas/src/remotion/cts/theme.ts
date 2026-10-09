/** Brand tokens — site identity + film spark accent */
export const defaultColors = {
  graphite: "#0B0B0C",
  charcoal: "#17181A",
  titanium: "#E6E6E4",
  warmWhite: "#F4F2EE",
  muted: "#8E9098",
  border: "#2A2B30",
  lime: "#C8FF4D",
  orange: "#D96B2F",
  orangeSoft: "#F0A06A",
  white: "#FFFFFF",
  glass: "rgba(255,255,255,0.14)",
  glassBorder: "rgba(255,255,255,0.28)",
  screen: "#0F1216",
  // SaaS-compatible aliases
  canvas: "#F4F2EE",
  ink: "#0B0B0C",
  silver: "#B8B3AC",
  mist: "#E8E4DE",
  slate: "#5A6F7D",
  sage: "#6F7F6A",
  editorBg: "#1A1D22",
  editorFg: "#D6D2CC",
  editorMuted: "#8A8680",
  codeKeyword: "#D96B2F",
  codeString: "#8FA68A",
  codeFn: "#7A9BB0",
  codeComment: "#6E6A64",
} as const;

export type FilmColors = {
  [K in keyof typeof defaultColors]: string;
};

export const colors = defaultColors;

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;
