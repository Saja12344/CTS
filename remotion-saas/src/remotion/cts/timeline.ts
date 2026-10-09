/** Vertical 9:16 brand film — 540 frames @ 30fps = 18s */

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
export const DURATION_FRAMES = 540;

export const scenes = {
  human: { from: 0, duration: 90, label: "The human idea" },
  grow: { from: 82, duration: 106, label: "The idea grows" },
  product: { from: 180, duration: 128, label: "World becomes product" },
  assemble: { from: 292, duration: 150, label: "Everything comes together" },
  brand: { from: 430, duration: 110, label: "Finished product and brand" },
} as const;
