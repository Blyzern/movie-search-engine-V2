import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getData, setLoading, setData } from './popupSlice';
import { fetchMovies } from '../../../utils/FetchWrapper';

function* fetchData() {
  const endPoint = '/trending/movie/week';
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint);
    yield put(setData(data.results));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* popupRoot() {
  yield all([takeLatest(getData.type, fetchData)]);
}
