import { applyMiddleware, createStore, Store, Middleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from './sagas';
import { rootReducer } from './reducer';
import { HM } from '../types';

const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

const configureStore = (): Store<HM.State.State> => {
  const enhancers = composeWithDevTools(applyMiddleware(...middleware));

  // Attempt to load persisted state from sessionStorage
  const store: Store<HM.State.State> = createStore(rootReducer, enhancers);

  // run sagas
  sagaMiddleware.run(sagas);

  if (module['hot']) {
    // Enable Webpack hot module replacement for reducers
    module['hot'].accept('./reducer', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore();
