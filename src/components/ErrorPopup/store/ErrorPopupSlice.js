import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errorContent: null,
  isLoading: false,
  isOpen: false,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.errorContent = action.payload;
    },
    getError: () => {},
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setError, getError, setLoading, setOpen } = errorSlice.actions;

export default errorSlice.reducer;
