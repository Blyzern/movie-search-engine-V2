import { all ,fork } from 'redux-saga/effects';
import root from '../Pages/Home/store/homeSaga';

export default function* rootSaga() {
  yield all([
    yield fork(root),
  ]);
}