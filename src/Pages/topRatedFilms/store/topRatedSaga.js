import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieData, setMoviesData, setLoading } from './topRatedSlice';
import { setError } from '../../../components/ErrorPopup/store/ErrorPopupSlice';

function* getFilms() {
  const endPoint = `/trending/movie/week`;
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint);
    yield put(setMoviesData(data.results));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}

export default function* topRatedRoot() {
  yield all([takeLatest(getMovieData.type, getFilms)]);
}
