import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: [{}],
    film: [{}], //  <-- ci lavorero dopo aver impostato l'ui
    status: 'idle',
    isLoading: false
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {
        getMovies: () => {},
        setMovies: (state, action) => {
            state.movie = action.payload;
        },
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },

    }
});

export const { getMovies, setMovies, setLoading } = homeSlice.actions;

export default homeSlice.reducer;



