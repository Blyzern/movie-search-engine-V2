import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [{}],
  isLoading: false,
};

export const topRatedSlice = createSlice({
  name: 'topRated',
  initialState,

  reducers: {
    getMovieData: () => {},

    setMoviesData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getMovieData, setMoviesData, setLoading } =
  topRatedSlice.actions;

export default topRatedSlice.reducer;
