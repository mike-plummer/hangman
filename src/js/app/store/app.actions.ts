import { Action } from 'redux';
import { createAction } from '../../util/redux.utils';

export namespace AppActionTypes {
  export interface Loaded extends Action {}
}

const TYPES = {
  LOADED: 'APP.LOADED'
};

const CREATORS = {
  loaded: createAction(TYPES.LOADED, {})
};

export default {
  TYPES,
  CREATORS
};
