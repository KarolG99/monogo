import { createSlice, configureStore, current } from "@reduxjs/toolkit";
import { SingleCharacterProps } from "../types";

const initialFavCharacterState: SingleCharacterProps[] = [];

const favCharacterSlice = createSlice({
  name: "favCharacters",
  initialState: initialFavCharacterState,
  reducers: {
    addCharacter(state, action) {
      state.unshift({
        ...action.payload,
      });
    },
    removeCharacter(state, action) {
      return current(state).filter(
        (character) => character.name !== action.payload.name
      );
    },
  },
});

export const { addCharacter, removeCharacter } = favCharacterSlice.actions;

export const store = configureStore({
  reducer: {
    favCharacters: favCharacterSlice.reducer,
  },
});
