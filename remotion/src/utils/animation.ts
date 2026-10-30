import {Easing} from "remotion";

/** Shared easing presets (non-keyframable helpers — use inline Easing in Interactive styles). */
export const easeOutSoft = Easing.bezier(0.16, 1, 0.3, 1);
export const springGentle = {damping: 200} as const;
