import { apiSlice } from "../app/api/apiSlice";

export const productListSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products"
    })
  })
})

export const {useGetProductsQuery} = productListSlice;