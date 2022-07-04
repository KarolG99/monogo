import { createSlice, configureStore } from "@reduxjs/toolkit";
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
      return state.filter(
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
