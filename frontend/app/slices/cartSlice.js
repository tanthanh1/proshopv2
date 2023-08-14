"use client";

import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

import { useEffect } from "react";

const initialState = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [], shippingAddress: {}, paymentMethod: "Cash" };

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

            updateCart(state);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        addShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        addPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            state.cartItems = state.cartItems.filter((x) => x._id !== item._id);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.removeItem("cart");
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    addShippingAddress,
    addPaymentMethod,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
