import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import { throttle } from 'lodash';
import { rootReducer } from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

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
  enhancers,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    username: store.getState().username
  });
}, 1000))

export default store;
