import { all, fork } from 'redux-saga/effects';
import root from '../Pages/Home/store/homeSaga';
import detailsRoot from '../Pages/details/store/detailsSaga';
import topRatedRoot from '../Pages/topRatedFilms/store/topRatedSaga';
import popupRoot from '../components/Popup/store/popupSaga';
import errorRoot from '../components/ErrorPopup/store/ErrorPopupSaga';

export default function* rootSaga() {
  yield all([
    yield fork(root),
    yield fork(detailsRoot),
    yield fork(topRatedRoot),
    yield fork(popupRoot),
    yield fork(errorRoot),
  ]);
}
