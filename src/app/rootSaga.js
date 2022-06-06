import { all, fork } from 'redux-saga/effects';
import root from '../Pages/Home/store/homeSaga';
import detailsRoot from '../Pages/details/store/detailsSaga';

export default function* rootSaga() {
  yield all([yield fork(root), yield fork(detailsRoot)]);
}
