// https://redux.js.org/recipes/configuring-your-store
// import { applyMiddleware, compose, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
// import reducers from './reducers'
// import rootSaga from './sagas';

export const history = createBrowserHistory();

// export default function configureStore(preloadedState) 
// {
//   const history = createBrowserHistory();
//   const rootReducer = reducers(history);
//   const sagaMiddleware = createSagaMiddleware();
//   const router = routerMiddleware(history);
//   const middlewares = [router, sagaMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)
//   // https://redux.js.org/api/compose
//   // compose is used if we have multiple enhancers we don't need it yet
//   // const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const enhancers = [middlewareEnhancer]
//   let composedEnhancers
//   if (process.env.NODE_ENV !== 'production')
//   {
//     composedEnhancers = composeWithDevTools(...enhancers);
//   }
//   else
//   {
//     composedEnhancers = compose(...enhancers);
//   }
// // We don't use any preloadedState
//   const store = createStore(rootReducer, preloadedState, composedEnhancers)
//   sagaMiddleware.run(rootSaga);
//   // I don't know if CRA does this already
//   // if (process.env.NODE_ENV !== 'production' && module.hot) {
//   //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
//   // }

//   return store
// }