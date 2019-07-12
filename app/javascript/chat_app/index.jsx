// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';

// reducer
import rootReducer from './reducers/index';


// render an instance of the component in the DOM

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(promiseMiddleware, logger))}>
    <App />
  </Provider>,
  document.getElementById('chat-app')
)
