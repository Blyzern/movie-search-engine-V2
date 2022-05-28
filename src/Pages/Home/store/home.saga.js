import {
    takeLatest,
    all,
    call,
    put,
    select,
  } from 'redux-saga/effects';
  import {
    tryAddUser,
    setUserAddFailsCounter,
    addUser,
  } from 'src/app/pages/AddNewUser/addNewReducer';
  import { fetchWrapper } from '../../../utils/FetchWrapper';

  function* getUser() {
    const endPoint = 'user';
    const userAddFailsCounter = yield select((state) => state.addNewSliceReducer.failsCounter);
    const data = yield select((state) => state.addNewSliceReducer.userToAdd);
    try {
      const response = yield call(fetchWrapper, endPoint, data);
      yield put(setUserAddFailsCounter(0));
      yield put(addUser(response));
    } catch (error) {
      const failsCounter = userAddFailsCounter + 1;
      yield put(setUserAddFailsCounter(failsCounter));
      
    }
    }

    export default function* root() {
        yield all([
          takeLatest(tryAddUser.type, getUser),
        ]);
      }