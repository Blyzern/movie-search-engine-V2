import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    series: [{}],
    films: [{}], //  <-- ci lavorero dopo aver impostato l'ui
    data: {},
    status: 'idle',
    isLoading: false
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,

    reducers: {
        getMovies: () => {},
        setSeries: (state, action) => {
            state.series = action.payload;
        },
        setLoading: (state, action) =>{
            state.isLoading = action.payload;
        },
        setMovies: (state, action) => {
            state.films = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        }

    }
});

export const { getMovies, setSeries, setLoading, setMovies, setData } = homeSlice.actions;

export default homeSlice.reducer;



