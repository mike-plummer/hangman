import { combineReducers, Reducer } from 'redux';
import game from '../game/store/game.reducer';
import { HM } from '../types';

export const rootReducer: Reducer<HM.State.State> = combineReducers({
  game
});
