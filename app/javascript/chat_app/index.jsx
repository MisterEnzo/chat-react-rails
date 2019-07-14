// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import Channel from './components/channel';

// reducer
import rootReducer from './reducers/index';


// render an instance of the component in the DOM

ReactDOM.render(
  <Provider store={createStore(rootReducer, {}, applyMiddleware(promiseMiddleware, logger))}>
    <Router history={history}>
      <Route path="/" exact component={App} />
      <Route path="/channels/:channel" exact component={Channel} />
    </Router>
  </Provider>,
  document.getElementById('chat-app')
)
