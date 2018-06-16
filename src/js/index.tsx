import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './store/reducer';
import { App } from './app/app';
import sagas from './store/sagas';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
