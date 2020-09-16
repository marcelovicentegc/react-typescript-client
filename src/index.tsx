import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme, Theme } from "./utils/theme";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { register } from "./serviceWorker";
import { LandingPage, LandingPageClass } from "./containers/LandingPage";
import { Provider } from "mobx-react";
import { rootStore } from "./stores/RootStore";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    html {
      width: 100vw;
      height: 100vh;    
      overflow-x: hidden;
      
      body {
            ${(props) => props.theme.fontFamily}
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
      <Provider {...rootStore}>
        <GlobalStyle theme={theme} />
        <Header />
        <Layout>
          <LandingPageClass />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

render(<Root />, document.getElementById("root"));
register();
