import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [{}],
  isLoading: false,
};

export const popupSlice = createSlice({
  name: 'popup',
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    getData: () => {},
  },
});

export const { setLoading, getData, setData } = popupSlice.actions;

export default popupSlice.reducer;
