/** Core Tech Solutions brand film — narrative rebuild */

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
    /** Brand accent from design tokens (lime). Spark color. */
    accent: "#C8FF4D",
    accentSoft: "rgba(200,255,77,0.18)",
    glass: "rgba(246,244,238,0.08)",
    glassBorder: "rgba(230,230,228,0.22)",
  },
  composition: {
    id: "CoreTechBrandFilm",
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 540,
  },
  scenes: {
    human: {
      from: 0,
      durationInFrames: 90,
      caption: "Every great product starts with an idea.",
    },
    grows: {
      from: 90,
      durationInFrames: 90,
      caption: "An idea becomes a possibility.",
    },
    world: {
      from: 180,
      durationInFrames: 120,
      caption: "From concept to digital product.",
    },
    assembly: {
      from: 300,
      durationInFrames: 135,
      caption: "Built with purpose.",
    },
    brand: {
      from: 435,
      durationInFrames: 105,
      caption: "We turn ideas into digital products.",
    },
  },
} as const;
