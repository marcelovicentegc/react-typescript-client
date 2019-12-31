import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  importFontFamily:
    "@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');",
  fontFamily: "font-family: 'Nunito Sans', sans-serif;",
  color: {
    green1: "#78c800",
    green2: "#58a700"
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
