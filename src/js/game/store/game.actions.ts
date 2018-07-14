import { Action } from 'redux';
import { createAction } from '../../util/redux.utils';
import { HM } from '../../types';

export namespace GameActionTypes {
  export interface Guess extends Action {
    letter: HM.Letter;
  }
  export interface UpdateRemainingTime extends Action {
    newTime: number;
  }
  export interface StartGame extends Action {}
  export interface EndGame extends Action {
    result: HM.GameStatus;
  }
  export interface Miss extends Action {}
  export interface Expose extends Action {
    exposed: HM.Letter[];
  }
  export interface SetWord extends Action {
    word: string;
  }
}

const TYPES = {
  GUESS: 'GAME.GUESS',
  START_GAME: 'GAME.START_GAME',
  END_GAME: 'GAME.END_GAME',
  UPDATE_REMAINING_TIME: 'GAME.UPDATE_REMAINING_TIME',
  MISS: 'GAME.MISS',
  EXPOSE: 'GAME.EXPOSE',
  SET_WORD: 'GAME.SET_WORD'
};

const CREATORS = {
  guess: (letter: HM.Letter): GameActionTypes.Guess =>
    createAction(TYPES.GUESS, {
      letter
    }),
  startGame: (): GameActionTypes.StartGame =>
    createAction(TYPES.START_GAME),
  endGame: (result: HM.GameStatus): GameActionTypes.EndGame =>
    createAction(TYPES.END_GAME, {
      result
    }),
  updateRemainingTime: (newTime: number): GameActionTypes.UpdateRemainingTime =>
    createAction(TYPES.UPDATE_REMAINING_TIME, {
      newTime
    }),
  miss: (): GameActionTypes.Miss =>
    createAction(TYPES.MISS),
  expose: (exposed: HM.Letter[]): GameActionTypes.Expose =>
    createAction(TYPES.EXPOSE, {
      exposed
    }),
  setWord: (word: string): GameActionTypes.SetWord =>
    createAction(TYPES.SET_WORD, {
      word
    })
};

export default {
  TYPES,
  CREATORS
};
