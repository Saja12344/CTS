import { z } from "zod";

export const COMP_NAME = "CTSBrandFilm";

export const CompositionProps = z.object({
  brandName: z.string(),
  tagline: z.string(),
  canvasColor: z.string(),
  inkColor: z.string(),
  accentColor: z.string(),
  scene1Text: z.string(),
  scene2Text: z.string(),
  scene3Text: z.string(),
  scene4Text: z.string(),
});

export type BrandFilmProps = z.infer<typeof CompositionProps>;

export const defaultMyCompProps: BrandFilmProps = {
  brandName: "Core Tech Solutions",
  tagline: "We turn ideas into digital products.",
  canvasColor: "#F6F3EE",
  inkColor: "#1E1C1A",
  accentColor: "#D96B2F",
  scene1Text: "Every idea starts somewhere.",
  scene2Text: "Shaped into possibilities.",
  scene3Text: "Designed with purpose.",
  scene4Text: "Built to work.",
};

/** 20s brand film @ 30fps */
export const DURATION_IN_FRAMES = 600;
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;
