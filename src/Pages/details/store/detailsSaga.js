import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './detailsSlice';
import { setData, setLoading } from './detailsSlice';
import { isSerieSelector } from './detailsSelector';

function* getDetails({ payload }) {
  let endPoint;
  const isSerie = yield select(isSerieSelector);
  isSerie === true
    ? (endPoint = `/tv/${payload}`)
    : (endPoint = `/movie/${payload}`);
  try {
    setLoading(true);
    const { data } = yield call(fetchMovies, endPoint);
    yield put(setData(data));
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

export default function* detailsRoot() {
  yield all([takeLatest(getMovieDetails.type, getDetails)]);
}
