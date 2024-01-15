import { createSlice } from "@reduxjs/toolkit";

const sideMenuReducer = createSlice({
  name: "app",
  initialState: {
    sideMenuState: false,
    sideIconsState: true,
  },
  reducers: {
    toggleSideMenu(state) {
      state.sideMenuState = !state.sideMenuState;
    },
    closeSideIcons(state) {
      state.sideIconsState = false;
    },
    openSideIcons(state) {
      state.sideIconsState = true;
    },
  },
});

export const { toggleSideMenu, closeSideIcons, openSideIcons } =
  sideMenuReducer.actions;
export default sideMenuReducer.reducer;
