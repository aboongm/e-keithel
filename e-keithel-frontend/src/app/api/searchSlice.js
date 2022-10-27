import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { search: [] },
  reducers: {
    getSearchResult: (state, action) => {
      state.search = action.payload;
    }, 
  },
});

export const { getSearchResult } = searchSlice.actions;

export default searchSlice.reducer;
