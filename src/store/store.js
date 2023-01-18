import { configureStore } from "@reduxjs/toolkit";
import activePageReducer from "@/features/activePageSlice";
import productReducers from "@/features/productSlice";
import cartReducers from "@/features/cartSlice";

const store = configureStore({
  reducer: {
    activePage: activePageReducer,
    product: productReducers,
    cart: cartReducers,
  },
});

export default store;
