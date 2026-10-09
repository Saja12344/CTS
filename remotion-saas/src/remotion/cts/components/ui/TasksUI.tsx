import React from "react";
import { CheckCircle2, Circle, Clock3 } from "lucide-react";
import { space } from "../../fonts";
import { colors } from "../../theme";

const COLS = [
  {
    title: "Backlog",
    items: [
      { t: "Onboarding flow", d: "Design", done: false },
      { t: "API contracts", d: "Eng", done: false },
    ],
  },
  {
    title: "In progress",
    items: [
      { t: "Dashboard v2", d: "Today", done: false },
      { t: "Push notifications", d: "QA", done: false },
    ],
  },
  {
    title: "Done",
    items: [
      { t: "Auth polish", d: "Shipped", done: true },
      { t: "Empty states", d: "Shipped", done: true },
    ],
  },
];

/** Task / productivity board — third distinct product surface */
export const TasksUI: React.FC<{ width?: number; height?: number }> = ({
  width = 540,
  height = 320,
}) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 20,
        background: colors.warmWhite,
        border: `1px solid ${colors.mist}`,
        boxShadow: "0 22px 48px rgba(0,0,0,0.28)",
        padding: 16,
        fontFamily: space,
        color: colors.graphite,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", color: colors.muted, textTransform: "uppercase" }}>
            Pulse Tasks
          </div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Sprint 24</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: colors.slate }}>
          <Clock3 size={14} />
          4 days left
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, flex: 1, minHeight: 0 }}>
        {COLS.map((col) => (
          <div
            key={col.title}
            style={{
              background: "#EFEEEA",
              borderRadius: 14,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, color: colors.slate, padding: "2px 4px" }}>
              {col.title}
            </div>
            {col.items.map((item) => (
              <div
                key={item.t}
                style={{
                  background: colors.white,
                  borderRadius: 12,
                  padding: 10,
                  border: `1px solid ${colors.mist}`,
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  {item.done ? (
                    <CheckCircle2 size={16} color={colors.lime} />
                  ) : (
                    <Circle size={16} color={colors.muted} />
                  )}
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.25 }}>{item.t}</div>
                    <div style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>{item.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
