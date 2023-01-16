import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "@/features/activePageSlice";
import productReducers from "@/features/productSlice";

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    product: productReducers,
  },
});

export default store;
