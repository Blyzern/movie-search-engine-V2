import { takeLatest, put, all, call } from 'redux-saga/effects';
import { fetchMovies } from '../../../utils/FetchWrapper';
import { getMovieDetails } from './descriptionSlice';
import { setData } from './descriptionSlice';

function* getDetails({ payload }) {
  const endPoint = `/movie/${payload}`;
  try {
    const { data } = yield call(fetchMovies, endPoint);
    console.log(
      '🚀 ~ file: descriptionSaga.js ~ line 10 ~ function*getDetails ~ data',
      data
    );
    yield put(setData(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* detailsRoot() {
  yield all([takeLatest(getMovieDetails.type, getDetails)]);
}
