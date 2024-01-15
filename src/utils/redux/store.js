import { configureStore } from "@reduxjs/toolkit";
import sideMenuSlice from "./sideMenuSlice";

const store = configureStore({
  reducer: {
    app: sideMenuSlice,
  },
});

export default store;
