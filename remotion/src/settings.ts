/**
 * Easy knobs for the WorkflowTest composition.
 * Change these, then refresh Studio / re-render.
 */
export const WORKFLOW_TEST = {
  id: "WorkflowTest",
  width: 1280,
  height: 720,
  fps: 30,
  /** Total duration for the main composition (seconds → frames computed in Root). */
  durationSeconds: 8,
  colors: {
    background: "#0f172a",
    accent: "#38bdf8",
    surface: "#1e293b",
    text: "#f8fafc",
    muted: "#94a3b8",
  },
  copy: {
    title: "Workflow Test",
    subtitle: "Studio + Sequences + render pipeline",
    outro: "Render verified",
  },
} as const;

export const framesFromSeconds = (seconds: number, fps: number) =>
  Math.round(seconds * fps);
