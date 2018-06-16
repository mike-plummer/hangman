import { Action, Reducer } from 'redux';
import { assign, hasIn, isFunction } from 'lodash';

interface Payload {
  type?: undefined; // not allowed
  [key: string]: any;
}

type ReducerConfig<S> = {
  [actionType: string]: Reducer<S>
}

export const createAction = <P extends Payload>(type: string, payload?: P | null): Action & P => {
  if (!type) {
    throw new Error('Action Type must be truthy');
  }
  if (hasIn(payload, 'type')) {
    throw new Error("Action payload cannot have a 'type' field - it would overwrite the Action's type");
  }
  return assign({ type }, payload);
};

export const createReducer = <S>(initialState: S, config: ReducerConfig<S>): Reducer<S> => {
  return (state: S | undefined = initialState, action: Action): S => {
    if (hasIn(config, action.type) && isFunction(config[action.type])) {
      return config[action.type](state, action);
    }
    return state;
  }
};