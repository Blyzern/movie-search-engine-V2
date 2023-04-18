import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import homeReducer from '../Pages/Home/store/homeSlice';
import descriptionReducer from '../Pages/details/store/detailsSlice';
import topRatedReducer from '../Pages/topRatedFilms/store/topRatedSlice';
import popupReducer from '../components/SearchPopup/store/popupSlice';
import errorReducer from '../components/ErrorPopup/store/ErrorPopupSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: combineReducers({
    home: homeReducer,
    description: descriptionReducer,
    topRated: topRatedReducer,
    router: routerReducer,
    popup: popupReducer,
    error: errorReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false })
      .concat(sagaMiddleware)
      .concat(routerMiddleware),
});

export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
