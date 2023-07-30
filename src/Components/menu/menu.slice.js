import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayMenu: false,
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    hideMenu(state, action) {
      state.displayMenu = false;
    },
    showMenu(state, action) {
      state.displayMenu = true;
    },
  },
});

export const { hideMenu, showMenu } = menuSlice.actions;
export default menuSlice.reducer;
