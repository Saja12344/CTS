import {Easing} from "remotion";

export const easings = {
  violentPush: Easing.bezier(0.7, 0, 0.1, 1),
  slowInLand: Easing.bezier(0.2, 0.9, 0.1, 1),
  standard: Easing.bezier(0.4, 0, 0.2, 1),
  soft: Easing.bezier(0.25, 0.46, 0.45, 0.94),
  whip: Easing.bezier(0.85, 0, 0.15, 1),
  maskReveal: Easing.bezier(0.33, 1, 0.68, 1),
  cinematic: Easing.bezier(0.22, 1, 0.36, 1),
};
