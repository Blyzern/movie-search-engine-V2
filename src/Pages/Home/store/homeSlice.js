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
        getMovies: (state, action) => {
            state.movie = action.payload;
            state.isLoading = false;
        },
        setLoading(state){
            state.isLoading = true;
        }

    }
});

export const { getMovies, setLoading } = homeSlice.actions;

export const trySetMovie = (state = initialState, action) => {
}

export default homeSlice.reducer;



