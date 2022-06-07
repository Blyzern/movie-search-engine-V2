import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './detailsSlice';
import { setData, setLoading } from './detailsSlice';

function* getDetails({ payload }) {
  const endPoint = `/movie/${payload}`;
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
