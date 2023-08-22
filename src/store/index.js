import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(reduxLogger, reduxThunk, reduxPromise),
);
