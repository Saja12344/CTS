import type React from "react";
import {Interactive, type InteractivitySchema} from "remotion";

type GeometricBadgeProps = {
  readonly label: string;
  readonly fill: string;
  readonly style?: React.CSSProperties;
};

const GeometricBadgeInner: React.FC<GeometricBadgeProps> = ({
  label,
  fill,
  style,
}) => {
  return (
    <Interactive.Div
      style={{
        position: "absolute",
        right: 80,
        bottom: 80,
        width: 180,
        height: 180,
        borderRadius: 24,
        backgroundColor: fill,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0f172a",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: 28,
        fontWeight: 700,
        ...style,
      }}
    >
      {label}
    </Interactive.Div>
  );
};

const geometricBadgeSchema = {
  label: {type: "text-content", default: "GEO", description: "Label"},
  fill: {
    type: "color",
    default: "#38bdf8",
    description: "Fill color",
  },
} as const satisfies InteractivitySchema;

export const GeometricBadge = Interactive.withSchema({
  Component: GeometricBadgeInner,
  componentName: "<GeometricBadge>",
  schema: geometricBadgeSchema,
  wrapInSequence: true,
});
