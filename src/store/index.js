import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import gifsReducer from "./gifs/reducers";
import rootSaga from "./gifs/saga";

const rootReducer = combineReducers({
  gifs: gifsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
