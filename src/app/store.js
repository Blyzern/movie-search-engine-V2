import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../Pages/Home/store/homeSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
  .concat(sagaMiddleware)
});


sagaMiddleware.run(rootSaga);