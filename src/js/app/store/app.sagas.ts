import { takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga';
import AppActions, { AppActionTypes } from './app.actions';
import { createWatchers } from '../../util/saga.utils';

function* loaded(action: AppActionTypes.Loaded): SagaIterator {
}

const watchers = createWatchers({
  [AppActions.TYPES.LOADED]: { saga: loaded, effect: takeLatest }
});

export default watchers;