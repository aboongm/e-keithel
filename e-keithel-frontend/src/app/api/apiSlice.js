import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000',
    // baseUrl: 'https://monaaz-api-5bhf.onrender.com',
    baseUrl: 'https://monaaz-api.onrender.com',
  }),
  endpoints: (builder) => ({}),
});
