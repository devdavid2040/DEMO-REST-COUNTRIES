/* import { createStore } from 'redux'
import appReducer from './reducers'

const store = createStore(appReducer)

export default store




 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers.js";

const paises =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducer, paises(applyMiddleware(thunk)));

export default store;