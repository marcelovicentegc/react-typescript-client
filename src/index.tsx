import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme, Theme } from "./utils/theme";
import { Button, ButtonType } from "./components/Button";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${props => props.theme.importFontFamily}

    html {
      width: 100vw;
      height: 100vh;
      
      body {
            ${props => props.theme.fontFamily}
            margin: 0;
            height: 100%;

            div#root {
                height: 100%;
            }
        }
    }
`;

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Button label={"Oh yes!"} type={ButtonType.secondary} />
      <Button label={"Let's get started!"} />
      <Button label={"Hurray!"} type={ButtonType.tertiary} />
    </ThemeProvider>
  );
};

render(<Root />, document.getElementById("root"));
