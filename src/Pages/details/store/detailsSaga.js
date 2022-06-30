import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './detailsSlice';
import { setData, setLoading } from './detailsSlice';
import { isSerieSelector } from './detailsSelector';
import { setError } from '../../../components/ErrorPopup/store/ErrorPopupSlice';
import { pathnameSelector } from '../../Home/store/homeSelectors';
import { isEmpty } from 'lodash';

function* getDetails({ payload }) {
  const pathname = yield select(pathnameSelector);
  let endPoint;
  const isSerie = yield select(isSerieSelector);
  payload !== ''
    ? isSerie
      ? (endPoint = `/tv/${payload}`)
      : (endPoint = `/movie/${payload}`)
    : (endPoint = pathname);
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
