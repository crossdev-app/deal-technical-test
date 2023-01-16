import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  dataProduct: [],
  filteredDataProduct: [],
  error: "",
};

export const fetchProductData = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    return axios
      .get("https://dummyjson.com/products?limit=100")
      .then((response) => response.data.products);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    showDataProduct: (state, action) => {
      console.log(state.dataProduct);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataProduct = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProductData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.dataProduct = [];
    });
  },
});

export const { showDataProduct } = productSlice.actions;
export default productSlice.reducer;
