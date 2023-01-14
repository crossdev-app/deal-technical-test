import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "@/features/activePageSlice";

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
  },
});

export default store;