import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { history } from "./store";
import reducers from "./reducers";
import setupServices from "./services";
import rootSaga from "./sagas";
import { Authenticate } from './containers/Authenticate';
import { App } from './containers/App';


import "./index.css";

// import { Authenticate } from './containers/Authenticate';

import reportWebVitals from "./reportWebVitals";

async function main() {
  const sagaMiddleware = createSagaMiddleware();
  // console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`);

  if (process.env.NODE_ENV === "production") {
    console.log("calling disableReactDevTools");
    disableReactDevTools();
  }
  let store;

  //  const store = configureStore();
  // store = setupStore();
  if (process.env.NODE_ENV === "production") {
    console.log("createStore without DevTools");
    store = createStore(
      reducers(history), // root reducer with router state
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      )
    );
  } else {
    console.log("createStore with DevTools");
    store = createStore(
      reducers(history), // root reducer with router state
      composeWithDevTools(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          sagaMiddleware
        )
      )
    );
  }

  console.log("After apply middleware");
  //https://github.com/supasate/connected-react-router/blob/master/FAQ.md#how-to-navigate-with-redux-action

  await setupServices(store.dispatch);
  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    <React.StrictMode>
      {/* <App /> */}
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {" "}
          {/* place ConnectedRouter under Provider */}
          <Authenticate />
          {/* < App /> */}
        </ConnectedRouter>
      </Provider>
      ,
    </React.StrictMode>,
    document.getElementById("root")
  );

  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}
main();
