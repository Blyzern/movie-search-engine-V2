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
    setData: (state, action) => {
      state.title = action.payload.title;
      state.overview = action.payload.overview;
      state.adult = action.payload.adult;
      state.image = action.payload.poster_path;
      state.release_date = action.payload.release_date;
    },
    getMovieDetails: () => {},
  },
});

export const { setLoading, setMovieId, getMovieDetails, setData } =
  descriptionSlice.actions;

export default descriptionSlice.reducer;
