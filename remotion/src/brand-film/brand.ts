/** Core Tech Solutions brand film — knobs & storyboard timing */

export const BRAND = {
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
  },
  composition: {
    id: "CoreTechBrandFilm",
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 540,
  },
  /** Absolute frame ranges (inclusive start, exclusive end for Sequence duration). */
  scenes: {
    spark: {from: 0, durationInFrames: 75, caption: "Every great product starts with an idea."},
    structure: {from: 75, durationInFrames: 105, caption: "Clarity gives it direction."},
    digital: {from: 180, durationInFrames: 150, caption: "From concept to digital product."},
    resolution: {from: 330, durationInFrames: 105, caption: "Built with purpose."},
    reveal: {from: 435, durationInFrames: 105, caption: "We turn ideas into digital products."},
  },
} as const;
