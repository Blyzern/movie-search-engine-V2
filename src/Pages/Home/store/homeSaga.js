import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getMovies, setSeries, setLoading, setMovies } from './homeSlice';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { setError } from '../../../components/ErrorPopup/store/ErrorPopupSlice';

function* getSerie() {
  const endPoint = '/trending/tv/week';
  const endPoint2 = '/trending/movie/week';
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint);
    yield put(setSeries(data.results));
    const newData = yield call(fetchMovies, endPoint2);
    yield put(setMovies(newData.data.results));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* root() {
  yield all([takeLatest(getMovies.type, getSerie)]);
}
