import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "@/features/activePageSlice";
import productReducers from "@/features/productSlice";
import cartReducers from "@/features/cartSlice";

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    Product: productReducers,
    Cart: cartReducers,
  },
});

export default store;
