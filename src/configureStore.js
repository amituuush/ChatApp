import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import { rootReducer } from './reducers';

const middlewares = [
  reduxThunk,
  reduxPromise,
  createLogger(),
];

const enhancers = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
);

const store = createStore(
  rootReducer,
  {},
  enhancers
);


export default store;
