// Con i MIDDLEWARE LOGGER e DEVTOOLS
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;

// Solo con il MIDDLEWARE LOGGER
/*
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
*/

// Senza MIDDLEWARE
/*
import { createStore } from 'redux';
import rootReducer from './rootReducer';
const store = createStore(rootReducer);
export default store;
*/
