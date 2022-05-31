import * as actions from './homeActions';
import {
    takeLatest,
    put,
    all,
    select,
  } from 'redux-saga/effects';
 import { setMovies } from './homeSlice';
  import { fetchWrapper } from '../../../utils/FetchWrapper';


function* getSerie() {
    const endPoint = '/Serie';
    try {
      const { data } = yield fetchWrapper(endPoint, 'get');
      console.log(data);
      yield put(setMovies(data));
    } catch (error) {
      yield put({type: "ADD_SERIE_FAILED", message: error.message});
    }
}

export default function* root() {
  yield all([
    takeLatest(actions.getSerieApi.type, getSerie)
  ]);
}