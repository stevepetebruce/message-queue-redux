import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import { messageQueueReducer } from './reducers/message-queue-reducer';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  messageQueue : messageQueueReducer
});

const store = createStore(rootReducer);

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
