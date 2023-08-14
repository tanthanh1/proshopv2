"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
