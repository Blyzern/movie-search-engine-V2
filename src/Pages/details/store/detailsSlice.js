import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
  isSerie: false,
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
    setIsSerie: (state, action) => {
      state.isSerie = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    getMovieDetails: () => {},
  },
});

export const { setLoading, setMovieId, setIsSerie, getMovieDetails, setData } =
  descriptionSlice.actions;

export default descriptionSlice.reducer;
