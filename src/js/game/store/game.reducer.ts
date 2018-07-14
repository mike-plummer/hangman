import { createReducer } from '../../util/redux.utils';
import { HM } from '../../types';
import GameActions, { GameActionTypes } from './game.actions';
import * as Immutable from 'seamless-immutable';
import { GAME_LENGTH, MAX_MISSES } from './game.sagas';

const initialState: HM.State.Game = {
  timeRemaining: GAME_LENGTH,
  gameStatus: undefined,
  guesses: [],
  exposed: [],
  word: '',
  lives: MAX_MISSES
};

const handleUpdateRemainingTime = (state: HM.State.Game, { newTime }: GameActionTypes.UpdateRemainingTime) =>
  Immutable.from(state).merge({
    timeRemaining: newTime
  });

const handleStartGame = (state: HM.State.Game) =>
  Immutable.from(state).merge({
    ...initialState,
    gameStatus: HM.GameStatus.IN_PROGRESS
  });

const handleEndGame = (state: HM.State.Game, { result }: GameActionTypes.EndGame) =>
  Immutable.from(state).merge({
    timeRemaining: 0,
    gameStatus: result
  });

const handleSetWord = (state: HM.State.Game, { word }: GameActionTypes.SetWord) =>
  Immutable.from(state).merge({
    word,
    exposed: [...word].map(val => '')
  });

const handleGuess = (state: HM.State.Game, { letter }: GameActionTypes.Guess) =>
  Immutable.from(state).merge({
    guesses: [...new Set(state.guesses).add(letter)]
  });

const handleMiss = (state: HM.State.Game) =>
  Immutable.from(state).merge({
    lives: state.lives - 1
  });

const handleExpose = (state: HM.State.Game, { exposed }: GameActionTypes.Expose) =>
  Immutable.from(state).merge({
    exposed
  });

export default createReducer(initialState, {
  [GameActions.TYPES.UPDATE_REMAINING_TIME]: handleUpdateRemainingTime,
  [GameActions.TYPES.START_GAME]: handleStartGame,
  [GameActions.TYPES.END_GAME]: handleEndGame,
  [GameActions.TYPES.SET_WORD]: handleSetWord,
  [GameActions.TYPES.GUESS]: handleGuess,
  [GameActions.TYPES.MISS]: handleMiss,
  [GameActions.TYPES.EXPOSE]: handleExpose
});
