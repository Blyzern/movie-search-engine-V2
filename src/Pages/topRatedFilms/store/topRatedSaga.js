import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieData, setMoviesData } from './topRatedSlice';

function* getFilms() {
  const endPoint = `/trending/movie/week`;
  try {
    const { data } = yield call(fetchMovies, endPoint, 'GET');
    yield put(setMoviesData(data.results));
  } catch (error) {
    console.log(error);
  }
}

export default function* topRatedRoot() {
  yield all([takeLatest(getMovieData.type, getFilms)]);
}
