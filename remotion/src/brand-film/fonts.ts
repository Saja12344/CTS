import {loadFont} from "@remotion/google-fonts/SpaceGrotesk";

const loaded = loadFont("normal", {
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const brandFontFamily = loaded.fontFamily;
