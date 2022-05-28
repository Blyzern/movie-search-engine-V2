import { all, fork } from 'redux-saga/effects';
import getUser from '../Pages/Home/store/home.saga';

export default function* rootSaga() {
  yield all([
    fork(getUser),
  ]);
}