import {
    takeLatest,
    put,
    all,
    call
  } from 'redux-saga/effects';
 import { getMovies, setMovies, setLoading } from './homeSlice';
import { fetchMovies } from '../../../utils/FetchWrapper';



function* getSerie() {
  const endPoint = '/trending/tv/week';
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchMovies, endPoint, 'get');
    yield put(setMovies(data.results));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([
    takeLatest(getMovies.type, getSerie)
  ]);
}