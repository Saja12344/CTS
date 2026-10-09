import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadSpace } from "@remotion/google-fonts/SpaceGrotesk";

export const { fontFamily: sora } = loadSora("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});

export const { fontFamily: space } = loadSpace("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
