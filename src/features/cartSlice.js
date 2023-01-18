import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  loadingDetail: false,
  loadingUser: false,
  dataCart: [],
  detailedCartPage: {
    products: [],
  },
  userDetail: {
    firstName: "-",
    lastName: "-",
    email: "-",
    phone: "-",
    address: {
      address: "-",
      city: "-",
      postalCode: "-",
    },
  },
  error: null,
  errorLoadingDetail: null,
  errorLoadingUser: null,
};

export const getDataDetailCartUsers = createAsyncThunk(
  "cart/fetchDetailCartUsers",
  async (userID) => {
    return axios
      .get(`https://dummyjson.com/users/${userID}`)
      .then((response) => response.data);
  }
);
export const getDataDetailCart = createAsyncThunk(
  "cart/fetchDetailCart",
  async (cartID) => {
    return axios
      .get(`https://dummyjson.com/carts/${cartID}`)
      .then((response) => response.data);
  }
);

export const fetchCartData = createAsyncThunk("cart/fetchCart", async () => {
  return axios
    .get("https://dummyjson.com/carts")
    .then((response) => response.data.carts);
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state, action) => {
      console.log(state.detailedCartPage.userId);
    },
    setDetailedCartPage: (state, action) => {
      state.detailedCartPage = action.payload.detailedCart;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCartData.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.dataCart = [];
    });
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataCart = action.payload;
      state.error = "";
    });
    builder.addCase(getDataDetailCartUsers.pending, (state, action) => {
      state.loadingUser = true;
    });
    builder.addCase(getDataDetailCartUsers.rejected, (state, action) => {
      state.loadingUser = false;
      state.errorLoadingUser = "Eror : Eror fetching User Data.";
      state.userDetail = {};
    });
    builder.addCase(getDataDetailCartUsers.fulfilled, (state, action) => {
      state.userDetail = action.payload;
      state.loadingUser = false;
      state.errorLoadingUser = null;
    });
    builder.addCase(getDataDetailCart.pending, (state, action) => {
      state.loadingDetail = true;
    });
    builder.addCase(getDataDetailCart.rejected, (state, action) => {
      state.loadingDetail = false;
      state.errorLoadingDetail = "Error : Failed to load Cart!";
      state.detailedCartPage = {};
    });
    builder.addCase(getDataDetailCart.fulfilled, (state, action) => {
      state.detailedCartPage = action.payload;
      state.loadingDetail = false;
      state.errorLoadingDetail = null;
    });
  },
});

export const { showCart, setDetailedCartPage } = cartSlice.actions;
export default cartSlice.reducer;
