import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createLogger } from "redux-logger";
export default (configureStore = () => {
  //let store = createStore(reducers, applyMiddleware(thunk, promiseMiddleware(), createLogger()))
  let store = createStore(
    reducers,
    applyMiddleware(thunk, promiseMiddleware() , createLogger() )
  );
  return store;
});
