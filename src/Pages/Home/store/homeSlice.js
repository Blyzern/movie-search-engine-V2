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
        } ,
        setLoading(state){
            state.isLoading ? true : false;
        }

    }
});

export const { getMovies, setMovies } = homeSlice.actions;

export const trySetMovie = (state = initialState, action) => {
}

export default homeSlice.reducer;



