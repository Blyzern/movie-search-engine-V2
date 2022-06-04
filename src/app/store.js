import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from "redux-first-history";
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../Pages/Home/store/homeSlice';
import descriptionReducer from '../Pages/description/store/descriptionSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    description: descriptionReducer,
    router: routerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false })
  .concat(sagaMiddleware)
  .concat(routerMiddleware)
});

export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);