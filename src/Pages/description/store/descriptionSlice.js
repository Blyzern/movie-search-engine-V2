import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  overview: '',
  adult: false,
  image: '',
  data: {},
  release_date: '',
  isLoading: false,
  movieId: null,
};

export const descriptionSlice = createSlice({
  name: 'description',
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    getMovieDetails: () => {},
  },
});

export const { setLoading, setMovieId, getMovieDetails } =
  descriptionSlice.actions;

export default descriptionSlice.reducer;
