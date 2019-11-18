import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import { BrowserRouter } from "react-router-dom";

// TODO: Find out what is the problem with redux-devtools
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

// TODO: Validation of reducer. Look here https://codesandbox.io/s/w02m7jm3q7
// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducer, applyMiddleware(thunk));

// TODO Here should be added redux Provider soon
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
