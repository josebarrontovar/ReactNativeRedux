/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Provider } from "react-redux";
import App from "./src/containers/App";
import configureStore from "./src/redux/store/configureStore";

let store = configureStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
