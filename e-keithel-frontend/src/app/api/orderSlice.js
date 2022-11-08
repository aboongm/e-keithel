import { apiSlice } from "./apiSlice";

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: body,
      }),
      getOrder: builder.query({
        query: () => "/orders",
      }),
    })
  })
})

export const { useAddOrderMutation, useGetOrderQuery } = orderSlice;
