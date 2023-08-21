import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

if (typeof window !== "undefined") {
    const localState = {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : {},
    };
    initialState.userInfo = { ...localState.userInfo };
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },

        logout: (state, action) => {
            state.userInfo = null;
            localStorage.clear();
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
