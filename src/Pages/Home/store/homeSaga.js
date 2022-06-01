import {
    takeLatest,
    put,
    all,
    call
  } from 'redux-saga/effects';
 import { getMovies } from './homeSlice';
import { fetchMovies } from '../../../utils/FetchWrapper';



function* getSerie() {
  const endPoint = '/Serie';
  try {
    const { data } = yield call(fetchMovies, endPoint, 'get');
    yield put(getMovies( data ));
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  yield all([
    takeLatest('home/setLoading', getSerie)
  ]);
}