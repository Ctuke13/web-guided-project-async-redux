import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./App";

import { reducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
