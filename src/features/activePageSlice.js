import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
  name: "activePage",
  initialState: {
    pageTitle: "Home",
    pageIcon: "material-symbols:home-outline-rounded",
  },
  reducers: {
    update: (state, action) => {
      state.pageTitle = action.payload.pageTitle;
      state.pageIcon = action.payload.pageIcon;
    },
  },
});

export const { update } = activePageSlice.actions;
export default activePageSlice.reducer;
