import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../actions/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};
export default configureStore;