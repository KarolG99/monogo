import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { StyledMain } from "./App.styles";
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { theme } from "./assets/styles/theme";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import CharactersList from "./components/CharactersList/CharactersList";
import FavouriteCharacters from "./components/FavouriteCharacters/FavouriteCharacters";
import Navigation from "./components/Navigation/Navigation";
import Page404 from "./components/Page404/Page404";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledMain>
          <Routes>
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<CharactersList />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/favourites" element={<FavouriteCharacters />} />
          </Routes>
        </StyledMain>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
