

export const GET_MOVIE = 'GET_MOVIE';
const SET_MOVIE = 'SET_MOVIE';

const initialState = {
    movie: [{}],
    film: [{}], //  <-- ci lavorero dopo aver impostato l'ui
    status: 'idle'
};

export const getMovies = () => {
    type: GET_MOVIE
}

export const setMovies = (movie) => {
    type: SET_MOVIE;
    movie: movie
}

export default  (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            const [{ movie }] = action;
            return [{...state, movie}];
        default:
            return state;
    }
}



