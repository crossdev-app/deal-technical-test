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
  filterCategoryKey: 0,
  filterBrandKey: 0,
  filterPrice: {
    min: null,
    max: null,
  },
  queryProductName: null,
  dataChart: [],
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
    setFilteredCategoryKey: (state, action) => {
      state.filterCategoryKey = action.payload.filterCategoryKey;
    },
    setFilteredBrandKey: (state, action) => {
      state.filterBrandKey = action.payload.filterBrandKey;
    },
    setMinPrice: (state, action) => {
      if (action.payload.min === "") {
        state.filterPrice.min = null;
      } else {
        state.filterPrice.min = action.payload.min;
      }
    },
    setMaxPrice: (state, action) => {
      if (action.payload.max === "") {
        state.filterPrice.max = null;
      } else {
        state.filterPrice.max = action.payload.max;
      }
    },
    searchProductName: (state, action) => {
      if (action.payload.name === "") {
        state.queryProductName = null;
      } else {
        state.queryProductName = action.payload.name;
      }
    },
    setFilteredDataProduct: (state, action) => {
      let fltrd = state.dataProduct;

      if (state.filterCategoryKey != 0 && state.filterBrandKey != 0) {
        fltrd = fltrd.filter((items) => {
          return (
            items.category === state.filterCategoryKey &&
            items.brand === state.filterBrandKey
          );
        });
        state.filteredDataProduct = fltrd;
      } else {
        if (state.filterBrandKey != 0) {
          fltrd = fltrd.filter((items) => {
            return items.brand === state.filterBrandKey;
          });
          state.filteredDataProduct = fltrd;
        }
        if (state.filterCategoryKey != 0) {
          fltrd = fltrd.filter((items) => {
            return items.category === state.filterCategoryKey;
          });
          state.filteredDataProduct = fltrd;
        }
      }

      // Filtered by price
      if (state.filterPrice.min !== null && state.filterPrice.max !== null) {
        fltrd = fltrd.filter((items) => {
          return (
            items.price >= state.filterPrice.min &&
            items.price <= state.filterPrice.max
          );
        });
        state.filteredDataProduct = fltrd;
      } else {
        if (state.filterPrice.min !== null) {
          fltrd = fltrd.filter((items) => {
            return items.price >= state.filterPrice.min;
          });
          state.filteredDataProduct = fltrd;
        }
        if (state.filterPrice.max !== null) {
          fltrd = fltrd.filter((items) => {
            return items.price <= state.filterPrice.max;
          });
          state.filteredDataProduct = fltrd;
        }
      }

      // Filtered by name
      if (state.queryProductName !== null) {
        fltrd = fltrd.filter((items) => {
          return items.title
            .toLowerCase()
            .includes(state.queryProductName.toLowerCase());
        });
        state.filteredDataProduct = fltrd;
      }
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
          let stck = 0;
          const catArray = state.dataProduct.filter((itm) => {
            return itm.category === product.category;
          });
          catArray.forEach((cat) => {
            stck = stck + cat.stock;
          });
          let cd = {};
          cd.name = product.category;
          cd.stock = stck;
          state.dataChart.push(cd);
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
  setFilteredCategoryKey,
  setFilteredBrandKey,
  setMinPrice,
  setMaxPrice,
  searchProductName,
  setFilteredDataProduct,
} = productSlice.actions;
export default productSlice.reducer;
