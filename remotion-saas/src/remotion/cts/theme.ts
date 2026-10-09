export const defaultColors = {
  canvas: "#F6F3EE",
  ink: "#1E1C1A",
  charcoal: "#2F2C2A",
  silver: "#B8B3AC",
  mist: "#E8E4DE",
  orange: "#D96B2F",
  slate: "#5A6F7D",
  sage: "#6F7F6A",
  editorBg: "#1A1D22",
  editorFg: "#D6D2CC",
  editorMuted: "#8A8680",
  screen: "#0F1216",
  white: "#FFFFFF",
  codeKeyword: "#D96B2F",
  codeString: "#8FA68A",
  codeFn: "#7A9BB0",
  codeComment: "#6E6A64",
} as const;

export type FilmColors = {
  [K in keyof typeof defaultColors]: string;
};

/** @deprecated Prefer useColors() for SaaS props — kept for module-level static fills */
export const colors = defaultColors;

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.4, 0, 0.2, 1] as const;
