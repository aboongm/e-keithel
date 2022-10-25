import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products"
    })
  })
})

export const {useGetProductsQuery} = apiSlice;

// export const apiSlice = createApi({
//   reducerPath: "api",
//     baseQuery: fetchBaseQuery({ 
//       baseUrl: 'http://localhost:3500'
//     }),
//     tagTypes: ['Contact'],
//     endpoints: (builder) => ({
//       // query: () => "/contacts"
//     })
// }) 