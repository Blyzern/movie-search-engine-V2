import { all ,fork } from 'redux-saga/effects';
import root from '../Pages/Home/store/homeSaga';
import banana from '../Pages/description/store/descriptionSaga';

export default function* rootSaga() {
  yield all([
    yield fork(root),
  ]);
}