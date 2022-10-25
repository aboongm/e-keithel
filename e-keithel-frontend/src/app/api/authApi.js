import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: body => ({
        url: '/login', 
        method: 'POST',
        headers: {
          "content-type" : "application/json"
        },
        body: body
      })
    }),
    registerUser: builder.mutation({
      query: body => ({
        url: '/signup', 
        method: 'POST',
        body: body
      })
    }),
  })
})

export const {useLoginUserMutation, useRegisterUserMutation} = authApi;