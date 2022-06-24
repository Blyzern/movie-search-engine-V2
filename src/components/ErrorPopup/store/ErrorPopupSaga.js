import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setError, getError, setLoading, setOpen } from './ErrorPopupSlice';

function* fetchError() {
  try {
    yield put(setOpen(true));
  } catch (error) {
    yield put(setError(error));
  }
}

export default function* errorRoot() {
  yield all([takeLatest(getError.type, fetchError)]);
}
