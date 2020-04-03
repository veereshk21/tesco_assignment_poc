import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { renderRoutes} from "react-router-config";
import axios from "axios";
import Routes from "./routes";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const axiosInstance = axios.create({
    baseURL: '/api'
});
const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;
const store = createStore(
  reducers,
  composeWithDevTools(), 
  window.INITIAL_STATE, 
  composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))
  ));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
