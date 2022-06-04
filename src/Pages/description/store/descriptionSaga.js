import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './descriptionSlice';

function* getSerie({ movieId }) {
  const endPoint = '/trending/tv/week';
  const endPoint2 = '/trending/movie/week';
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint, 'get');
    yield put(setSeries(data.results));
    const newData = yield call(fetchMovies, endPoint2, 'get');
    yield put(setMovies(newData.data.results));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([takeLatest(getMovieDetails.type, getSerie)]);
}
