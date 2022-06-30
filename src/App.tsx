import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { StyledMain } from "./App.styles";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { theme } from "./assets/styles/theme";
import CharactersList from "./components/CharactersList/CharactersList";
import Navigation from "./components/Navigation/Navigation";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledMain>
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<CharactersList />} />
          </Routes>
        </StyledMain>
        <Navigation />
      </ThemeProvider>
  );
}

export default App;
