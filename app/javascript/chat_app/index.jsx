// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import promiseMiddleware from 'redux-promise';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';

// reducer
import rootReducer from './reducers/index';


// render an instance of the component in the DOM
const appContainer = document.getElementById('chat-app');
const channels = JSON.parse(appContainer.dataset.channels).map(c => c.name);

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer, {channels: channels}, applyMiddleware(promiseMiddleware, logger))}>
      <BrowserRouter>
        <Route path="/channels/:channel" component={App} />
      </BrowserRouter>
    </Provider>,
    appContainer
  );
  console.log("app rendered");
})
