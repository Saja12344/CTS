import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { plexMono, sora } from "../fonts";
import { colors, easeOut } from "../theme";

const LINES = [
  { t: "type OrbitCard = {", c: "keyword" },
  { t: "  id: string;", c: "plain" },
  { t: '  title: string;', c: "plain" },
  { t: "  accent?: 'orange' | 'slate';", c: "plain" },
  { t: "};", c: "plain" },
  { t: "", c: "plain" },
  { t: "export function assemble(idea: Idea) {", c: "fn" },
  { t: "  const structure = shape(idea);", c: "plain" },
  { t: "  return buildProduct(structure);", c: "plain" },
  { t: "}", c: "plain" },
] as const;

type Props = {
  progress: number;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export const CodeEditor: React.FC<Props> = ({
  progress,
  width = 780,
  height = 480,
  style,
}) => {
  const frame = useCurrentFrame();
  const visibleLines = Math.floor(
    interpolate(progress, [0.15, 0.85], [0, LINES.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const cursorOn = Math.floor(frame / 8) % 2 === 0;

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 14,
        overflow: "hidden",
        background: colors.editorBg,
        boxShadow:
          "0 28px 60px rgba(20,18,16,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        fontFamily: sora,
        ...style,
      }}
    >
      <div
        style={{
          height: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "0 16px",
          background: "#14171C",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {["#C97B63", "#C4A35A", "#6F9B7A"].map((c) => (
          <div
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
              opacity: 0.85,
            }}
          />
        ))}
        <div
          style={{
            marginLeft: 14,
            fontSize: 13,
            color: colors.editorMuted,
            letterSpacing: "0.02em",
          }}
        >
          orbit/assemble.ts
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            width: 52,
            padding: "18px 0",
            textAlign: "right",
            fontFamily: plexMono,
            fontSize: 13,
            lineHeight: "24px",
            color: "#4A4744",
            userSelect: "none",
          }}
        >
          {LINES.map((_, i) => (
            <div key={i} style={{ paddingRight: 12 }}>
              {i + 1}
            </div>
          ))}
        </div>
        <div
          style={{
            flex: 1,
            padding: "18px 18px 18px 8px",
            fontFamily: plexMono,
            fontSize: 15,
            lineHeight: "24px",
            color: colors.editorFg,
          }}
        >
          {LINES.map((line, i) => {
            const show = i < visibleLines;
            const partial =
              i === visibleLines
                ? interpolate(progress, [0.15, 0.85], [0, LINES.length], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }) % 1
                : 1;
            const text =
              i < visibleLines
                ? line.t
                : i === visibleLines
                  ? line.t.slice(0, Math.floor(line.t.length * partial))
                  : "";
            const color =
              line.c === "keyword"
                ? colors.codeKeyword
                : line.c === "fn"
                  ? colors.codeFn
                  : colors.editorFg;

            return (
              <div key={i} style={{ minHeight: 24, color, whiteSpace: "pre" }}>
                {show || i === visibleLines ? text : null}
                {i === Math.min(visibleLines, LINES.length - 1) && cursorOn ? (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 18,
                      marginLeft: 1,
                      background: colors.orange,
                      verticalAlign: "text-bottom",
                      opacity: 0.9,
                    }}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: 148,
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            padding: 14,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            opacity: interpolate(progress, [0.45, 0.7], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(...easeOut),
            }),
          }}
        >
          {["Cards", "Chart", "Media"].map((label, i) => (
            <div
              key={label}
              style={{
                height: 44,
                borderRadius: 8,
                background: i === 0 ? `${colors.orange}33` : "#22262C",
                border: "1px solid rgba(255,255,255,0.08)",
                color: colors.editorMuted,
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                paddingLeft: 12,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
