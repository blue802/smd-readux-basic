import { all } from "@redux-saga/core/effects";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import gifsReducer from "./gifs/reducers";
import { watchFetchListGifAsync } from "./gifs/saga";

const rootReducer = combineReducers({
  gifs: gifsReducer,
});

function* rootSaga() {
  yield all([watchFetchListGifAsync()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
