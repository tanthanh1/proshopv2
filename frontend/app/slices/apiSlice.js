import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
        credentials: "include",
    }),

    endpoints: (builder) => ({
        getProducts: builder.query({ query: () => "/products" }),

        getProductById: builder.query({ query: (id) => `/products/${id}` }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/users/auth",
                method: "POST",
                body: data,
            }),
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/users/register",
                method: "POST",
                body: data,
            }),
        }),

        updateUser: builder.mutation({
            query: (data) => ({
                url: "/users/profile",
                method: "PUT",
                body: data,
            }),
        }),

        getProfile: builder.query({ query: () => "/users/profile" }),
        createOrder: builder.mutation({
            query: (data) => ({
                url: "/orders",
                method: "POST",
                body: data,
            }),
        }),
        getOrders: builder.query({ query: () => "/orders" }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}`,
                method: "DELETE",
            }),
        }),
        deliverOrder: builder.mutation({
            query: (id) => ({
                url: `/orders/${id}/deliver`,
                method: "PUT",
            }),
            transformResponse: (response, meta, arg) => response,
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useLoginUserMutation,
    useRegisterUserMutation,
    useGetProfileQuery,
    useCreateOrderMutation,
    useUpdateUserMutation,
    useGetOrdersQuery,
    useDeleteOrderMutation,
    useDeliverOrderMutation,
} = apiSlice;
