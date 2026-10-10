import type React from "react";
import {Interactive, type InteractivitySchema} from "remotion";

type TitleCardProps = {
  readonly children: string;
  readonly accentColor: string;
  readonly style?: React.CSSProperties;
};

const TitleCardInner: React.FC<TitleCardProps> = ({
  children,
  accentColor,
  style,
}) => {
  return (
    <Interactive.Div
      style={{
        position: "absolute",
        left: 80,
        top: 80,
        display: "flex",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#1e293b",
        borderRadius: 16,
        padding: "28px 40px",
        color: "#f8fafc",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: 56,
        fontWeight: 700,
        ...style,
      }}
    >
      <div
        style={{
          width: 10,
          alignSelf: "stretch",
          borderRadius: 4,
          backgroundColor: accentColor,
        }}
      />
      {children}
    </Interactive.Div>
  );
};

const titleCardSchema = {
  children: {type: "text-content", default: "", description: "Title"},
  accentColor: {
    type: "color",
    default: "#38bdf8",
    description: "Accent color",
  },
} as const satisfies InteractivitySchema;

export const TitleCard = Interactive.withSchema({
  Component: TitleCardInner,
  componentName: "<TitleCard>",
  schema: titleCardSchema,
  wrapInSequence: true,
});
