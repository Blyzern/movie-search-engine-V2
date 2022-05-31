import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import serieReducer from '../Pages/Home/store/homeSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    serie: serieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
  .concat(sagaMiddleware)
});


sagaMiddleware.run(rootSaga);