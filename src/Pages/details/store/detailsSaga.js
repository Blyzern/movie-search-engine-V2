import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './detailsSlice';
import { setData, setLoading } from './detailsSlice';
import { isSerieSelector, isLoadingSelector } from './detailsSelector';
import { setError } from '../../../components/ErrorPopup/store/ErrorPopupSlice';

function* getDetails({ payload }) {
  let endPoint;
  const isSerie = yield select(isSerieSelector);
  isSerie === true
    ? (endPoint = `/tv/${payload}`)
    : (endPoint = `/movie/${payload}`);
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint);
    yield put(setData(data));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* detailsRoot() {
  yield all([takeLatest(getMovieDetails.type, getDetails)]);
}
