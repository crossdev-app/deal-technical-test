import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    title: "Home",
    icon: "material-symbols:home-outline-rounded",
    sidebarShown: false,
  },
  reducers: {
    updatePage: (state, action) => {
      state.title = action.payload.title;
      state.icon = action.payload.icon;
      state.sidebarShown = false;
    },
    toggleSidebar: (state, action) => {
      state.sidebarShown = !state.sidebarShown;
    },
  },
});

export const { updatePage, toggleSidebar } = activePageSlice.actions;
export default activePageSlice.reducer;
