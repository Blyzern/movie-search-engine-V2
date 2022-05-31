import { createSlice } from "@reduxjs/toolkit";

export const GET_MOVIE = 'GET_MOVIE'
const SET_MOVIE = 'SET_MOVIE';

const initialState = {
    movie: [{}],
    film: [{}], //  <-- ci lavorero dopo aver impostato l'ui
    status: 'idle'
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {
        getMovies: (state) => {
            type: GET_MOVIE;
        } ,
        setMovies: (state) => {
            type: SET_MOVIE;
            movie: state.movie;
            trySetMovie(state.movie);
        },
    }
});

export const { getMovies, setMovies } = homeSlice.actions;

export const trySetMovie = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            const [{ movie }] = action;
            return [{...state, movie}];
            console.log(movie);
        default:
            return state;
    }
}

export default homeSlice.reducer;



