
import { rootReducer } from "./rootReducer";

import createSagaMiddleware from "redux-saga";

import { createStore, compose, applyMiddleware } from "redux";
import rootSaga from "./sagas";
// import rootSaga from "./saga";

// export const store = createStore(rootReducer);
const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);