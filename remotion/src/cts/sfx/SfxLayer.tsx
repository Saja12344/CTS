import React from "react";
import { AbsoluteFill } from "remotion";
import { scenes } from "../timeline";

/**
 * Editable SFX cue map — no music.
 * When WAVs land in public/sfx/, mount <Audio> from @remotion/media
 * using the `from` / `durationInFrames` fields below.
 * See ./cue-sheet.md for mix notes.
 */
export const SFX_CUES = [
  { id: "pen-stroke-A", from: 6, durationInFrames: 48, file: "sfx/pen-stroke-a.wav" },
  { id: "pen-stroke-B", from: 24, durationInFrames: 36, file: "sfx/pen-stroke-b.wav" },
  { id: "idea-chime", from: 70, durationInFrames: 20, file: "sfx/idea-chime.wav" },
  { id: "lift-whoosh", from: 156, durationInFrames: 14, file: "sfx/lift-whoosh.wav" },
  { id: "magnetic-snap", from: 216, durationInFrames: 10, file: "sfx/magnetic-snap.wav" },
  { id: "typing", from: 324, durationInFrames: 66, file: "sfx/typing.wav" },
  { id: "build-confirm", from: 396, durationInFrames: 12, file: "sfx/build-confirm.wav" },
  { id: "fold-whoosh", from: 408, durationInFrames: 16, file: "sfx/fold-whoosh.wav" },
  { id: "device-snap", from: 450, durationInFrames: 10, file: "sfx/device-snap.wav" },
  { id: "brand-tone", from: 540, durationInFrames: 30, file: "sfx/brand-tone.wav" },
] as const;

export const SfxLayer: React.FC = () => {
  // Intentionally silent until local SFX assets are supplied.
  // Scene windows (for alignment reference):
  void scenes;
  return <AbsoluteFill style={{ pointerEvents: "none" }} />;
};
