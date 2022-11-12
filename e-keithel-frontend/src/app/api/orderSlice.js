import { apiSlice } from './apiSlice';

export const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrders: builder.mutation({
      query: (body) => ({
        url: '/orders',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: body,
      }),
    }),
    getOrders: builder.query({
      query: () => '/orders',
    }),
  }),
});

export const { useAddOrdersMutation, useGetOrdersQuery } = orderSlice;
