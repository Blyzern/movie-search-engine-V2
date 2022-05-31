import { fork } from 'redux-saga/effects';
import root from '../Pages/Home/store/homeSaga';

export default function* rootSaga() {
  yield fork(root);
}