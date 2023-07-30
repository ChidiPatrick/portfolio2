import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "../menu/menu.slice";

export const Store = configureStore({
  reducer: {
    menuSlice,
  },
});
