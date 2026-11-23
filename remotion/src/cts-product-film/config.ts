/** CTS Product Brand Film — authentic website surfaces */

export const PRODUCT_FILM = {
  id: "CTSProductBrandFilm",
  width: 1920,
  height: 1080,
  fps: 30,
  /**
   * Scene durations before TransitionSeries overlap.
   * Four 15-frame fades → total = 960 - 60 = 900 (30s).
   */
  scenes: {
    spark: {durationInFrames: 150},
    hero: {durationInFrames: 195},
    build: {durationInFrames: 225},
    approach: {durationInFrames: 180},
    brand: {durationInFrames: 210},
  },
  transitionFrames: 15,
  /** Master length after transitions */
  durationInFrames: 900,
  name: "CORE TECH SOLUTIONS",
  tagline: "We turn ideas into digital products.",
  colors: {
    graphite: "#0B0B0C",
    warmWhite: "#F4F2EE",
    titanium: "#E6E6E4",
    mutedGray: "#8E9098",
    accent: "#C8FF4D",
  },
} as const;
