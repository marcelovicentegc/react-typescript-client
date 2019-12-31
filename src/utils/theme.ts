import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  importFontFamily:
    "@import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');",
  fontFamily: "font-family: 'Nunito Sans', sans-serif;",
  color: {
    white1: "#fff",
    white2: "rgba(255, 255, 255, 0.5)",
    blue1: "#0b3e71",
    blue2: "#1899d6",
    blue3: "#1cb0f6",
    green1: "#78c800",
    green2: "#58a700"
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
