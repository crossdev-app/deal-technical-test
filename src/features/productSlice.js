import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  dataProduct: [],
  filteredDataProduct: [],
  error: "",
  listCategory: [],
  listBrand: [],
  filterStatus: 0, // 0: None, 1: Brand, 2:  Category
  filterKey: 0,
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
    activateFilter: (state, action) => {
      if (
        action.payload.filterBy == 0 ||
        state.filterStatus != action.payload.filterBy
      ) {
        state.filterKey = 0;
      }
      state.filterStatus = action.payload.filterBy;
    },
    setFilteredKey: (state, action) => {
      if (action.payload.filterKey != 0) {
        state.filterKey = action.payload.filterKey;
      } else {
        state.filterKey = 0;
      }
    },
    setFilteredDataProduct: (state, action) => {
      // Filtered by brand or category
      if (state.filterStatus == 1 && state.filterKey != 0) {
        const fltrBrand = state.dataProduct.filter((items) => {
          return items.brand === state.filterKey;
        });
        state.filteredDataProduct = fltrBrand;
      }
      if (state.filterStatus == 2 && state.filterKey != 0) {
        const fltrCat = state.dataProduct.filter((items) => {
          return items.category === state.filterKey;
        });
        state.filteredDataProduct = fltrCat;
      }

      // Filtered by price
      // Filtered by name
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataProduct = action.payload;
      state.error = "";
      //   Get list Product category and brands
      state.dataProduct.map((product) => {
        if (!state.listBrand.includes(product.brand)) {
          state.listBrand.push(product.brand);
        }
        if (!state.listCategory.includes(product.category)) {
          state.listCategory.push(product.category);
        }
      });
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

export const {
  showDataProduct,
  activateFilter,
  setFilteredKey,
  setFilteredDataProduct,
} = productSlice.actions;
export default productSlice.reducer;
