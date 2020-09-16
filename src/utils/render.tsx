import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { LandingPageProvider } from "../contexts/LandingPageContext";
import { RootStore } from "../stores";
import { Provider } from "mobx-react";

export const withTheme = (children: React.ReactElement) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const withContextProvider = (children: React.ReactElement) => {
  return <LandingPageProvider>{children}</LandingPageProvider>;
};

export const withStoreProvider = (
  children: React.ReactNode,
  { store = new RootStore() }: { store?: RootStore }
) => {
  return <Provider {...store}>{children}</Provider>;
};
