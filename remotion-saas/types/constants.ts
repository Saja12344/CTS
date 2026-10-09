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
  brandName: "CORE TECH SOLUTIONS",
  tagline: "We turn ideas into digital products.",
  canvasColor: "#F4F2EE",
  inkColor: "#0B0B0C",
  accentColor: "#D96B2F",
  scene1Text: "Every great product starts with an idea.",
  scene2Text: "An idea becomes a possibility.",
  scene3Text: "From concept to digital product.",
  scene4Text: "Built with purpose.",
};

/** 18s vertical brand film @ 30fps */
export const DURATION_IN_FRAMES = 540;
export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const VIDEO_FPS = 30;
