import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isLoading: false,
};

export const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,

  reducers: {
    getMovieData: () => {},
  },
});

export const { getMovieData } = topRatedSlice.actions;

export default topRatedSlice.reducer;
