"use client";

import { createSlice } from "@reduxjs/toolkit";

import { useEffect } from "react";

const initialState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exitsItem = state.cartItems.find((x) => x._id === item._id);
            if (exitsItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x._id === item._id ? item : x
                );
            } else state.cartItems = [...state.cartItems, item];
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
            localStorage.setItem("cart", JSON.stringify(state));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
