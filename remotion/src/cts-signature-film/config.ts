export const SIG = {
  id: "CTSSignatureFilm",
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 840, // 28s - VO breathing room beyond 25s request
  transitionFrames: 12,
  colors: {
    graphite: "#0B0B0C",
    warmWhite: "#F4F2EE",
    titanium: "#E6E6E4",
    muted: "#8E9098",
    accent: "#C8FF4D",
  },
  name: "CORE TECH SOLUTIONS",
  tagline: "We turn ideas into digital products.",
  /**
   * Scene lengths before TransitionSeries overlap (4 x 12f fades).
   * Sum 888 - 48 = 840.
   */
  scenes: {
    idea: 120, // 0-4s
    bridge: 132, // ~4-8s
    showcase: 312, // ~8-18s
    resolve: 156, // ~18-23s
    brand: 168, // ~23-28s
  },
} as const;
