import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { theme } from "./assets/styles/theme";
import CharactersList from "./components/CharactersList/CharactersList";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<CharactersList />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
