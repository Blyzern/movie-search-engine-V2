import {
    takeLatest,
    call,
    put,
    all,
  } from 'redux-saga/effects';
 import { setMovies, GET_MOVIE } from './homeSlice';
  import { fetchWrapper } from '../../../utils/FetchWrapper';

export function* getSerie() {
    const endPoint = 'Serie';
    console.log("madonna puttana");
    try {
      const response = yield call(fetchWrapper(endPoint, 'GET'));
      const [{data}]  = response;
      console.log(data);
      yield put(setMovies(data));
    } catch (error) {
      yield put({type: "ADD_SERIE_FAILED", message: error.message});
    }
}

export default function* root() {
  console.log("Dio can viene chiamato");
  yield all([
    takeLatest(GET_MOVIE, getSerie())
  ]);
}