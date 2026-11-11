/** Central timeline — 600 frames @ 30fps = 20s */

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const DURATION_FRAMES = 600;

export const scenes = {
  spark: { from: 0, duration: 90, label: "The spark" },
  expand: { from: 82, duration: 128, label: "The idea expands" },
  structure: { from: 202, duration: 106, label: "From content to structure" },
  code: { from: 292, duration: 136, label: "The code becomes the product" },
  product: { from: 412, duration: 106, label: "The product reveal" },
  brand: { from: 502, duration: 98, label: "Brand reveal" },
} as const;

/** Nominal story beats (for SFX cue sheet / docs) */
export const beats = {
  scene1: { start: 0, end: 90 },
  scene2: { start: 90, end: 210 },
  scene3: { start: 210, end: 300 },
  scene4: { start: 300, end: 420 },
  scene5: { start: 420, end: 510 },
  scene6: { start: 510, end: 600 },
} as const;
