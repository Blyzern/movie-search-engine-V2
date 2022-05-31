import * as actions from './homeActions';
import {
    takeLatest,
    put,
    all,
  } from 'redux-saga/effects';
 import { getMovies } from './homeSlice';
import { fetchWrapper } from '../../../utils/FetchWrapper';



function* getSerie() {
  const endPoint = '/Serie';
  try {
    const { data } = yield fetchWrapper(endPoint, 'get');
    yield put(getMovies( data ));
  } catch (error) {
    yield put({type: "ADD_SERIE_FAILED", message: error.message});
  }
}

export default function* root() {
  yield all([
    takeLatest(actions.getSerieApi.type, getSerie)
  ]);
}