import React, { createContext, useContext, useMemo } from "react";
import type { BrandFilmProps } from "../../../types/constants";
import { defaultMyCompProps } from "../../../types/constants";
import { defaultColors, type FilmColors } from "./theme";

export type FilmTheme = {
  brandName: string;
  tagline: string;
  scene1Text: string;
  scene2Text: string;
  scene3Text: string;
  scene4Text: string;
  colors: FilmColors;
};

const FilmContext = createContext<FilmTheme>({
  brandName: defaultMyCompProps.brandName,
  tagline: defaultMyCompProps.tagline,
  scene1Text: defaultMyCompProps.scene1Text,
  scene2Text: defaultMyCompProps.scene2Text,
  scene3Text: defaultMyCompProps.scene3Text,
  scene4Text: defaultMyCompProps.scene4Text,
  colors: defaultColors,
});

export const buildFilmTheme = (props: BrandFilmProps): FilmTheme => ({
  brandName: props.brandName,
  tagline: props.tagline,
  scene1Text: props.scene1Text,
  scene2Text: props.scene2Text,
  scene3Text: props.scene3Text,
  scene4Text: props.scene4Text,
  colors: {
    ...defaultColors,
    canvas: props.canvasColor,
    warmWhite: props.canvasColor,
    ink: props.inkColor,
    graphite: props.inkColor,
    orange: props.accentColor,
    codeKeyword: props.accentColor,
  },
});

export const FilmThemeProvider: React.FC<{
  props: BrandFilmProps;
  children: React.ReactNode;
}> = ({ props, children }) => {
  const value = useMemo(() => buildFilmTheme(props), [props]);
  return <FilmContext.Provider value={value}>{children}</FilmContext.Provider>;
};

export const useFilmTheme = (): FilmTheme => useContext(FilmContext);
export const useColors = (): FilmColors => useFilmTheme().colors;
