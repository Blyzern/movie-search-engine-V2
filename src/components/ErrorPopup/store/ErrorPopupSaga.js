import { takeLatest, put, all } from 'redux-saga/effects';
import { setError, getError, setOpen } from './ErrorPopupSlice';

function* fetchError() {
  try {
    yield put(setOpen(true));
  } catch (error) {
    setError(error);
  }
}

export default function* errorRoot() {
  yield all([takeLatest(getError.type, fetchError)]);
}
