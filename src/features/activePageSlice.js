import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    title: "Home",
    icon: "material-symbols:home-outline-rounded",
  },
  reducers: {
    updatePage: (state, action) => {
      state.title = action.payload.title;
      state.icon = action.payload.icon;
    },
  },
});

export const { updatePage } = activePageSlice.actions;
export default activePageSlice.reducer;
