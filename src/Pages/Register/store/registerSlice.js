import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'idle',
    isLoading: false
};

export const homeSlice = createSlice({
    name: 'register',
    initialState,

    reducers: {
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },
    }
});

export const { setLoading  } = registerSlice.actions;

export default registerSlice.reducer;



