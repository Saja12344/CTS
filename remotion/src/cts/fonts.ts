import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadPlex } from "@remotion/google-fonts/IBMPlexMono";

export const { fontFamily: sora } = loadSora("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});

export const { fontFamily: plexMono } = loadPlex("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});
