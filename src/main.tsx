import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import App from "./App";
import store from "./state/store";
import i18n from "./assets/i18n";
import GlobalStyle from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
