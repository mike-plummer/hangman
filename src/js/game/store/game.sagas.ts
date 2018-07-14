import { delay, SagaIterator } from 'redux-saga';
import GameActions, { GameActionTypes } from './game.actions';
import { call, put, race, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { HM } from '../../types';
import * as Utils from '../../utils';
import axios from 'axios';
import { Dictionary } from '../../dictionary';
import { sample } from 'lodash';

export const GAME_LENGTH = 30;
export const MAX_MISSES = 5;

function* timer(): SagaIterator {
  while (true) {
    const { endGame } = yield race({
      increment: delay(1000),
      endGame: take(GameActions.TYPES.END_GAME)
    }) as any;

    if (endGame) {
      return;
    }

    const state = (yield select()) as HM.State.State;
    yield put(GameActions.CREATORS.updateRemainingTime(state.game.timeRemaining - 1))
  }
}

function* timeout({ newTime }: GameActionTypes.UpdateRemainingTime): SagaIterator {
  if (newTime <= 0) {
    yield put(GameActions.CREATORS.endGame(HM.GameStatus.LOSS));
  }
}

function* guess({ letter }: GameActionTypes.Guess): SagaIterator {
  const state = (yield select()) as HM.State.State;

  if (!Utils.isMatch(letter, state.game.word)) {
    yield put(GameActions.CREATORS.miss());
  } else {
    const exposed = Utils.buildExposedArray(state.game.word, state.game.guesses);
    yield put(GameActions.CREATORS.expose(exposed));
  }
}

function* checkForLoss(): SagaIterator {
  const state = (yield select()) as HM.State.State;

  if (state.game.lives === 0) {
    yield put(GameActions.CREATORS.endGame(HM.GameStatus.LOSS));
  }
}

function* checkForWin(): SagaIterator {
  const state = (yield select()) as HM.State.State;

  if (state.game.word === state.game.exposed.join('')) {
    yield put(GameActions.CREATORS.endGame(HM.GameStatus.WIN));
  }
}

function* startGame(): SagaIterator {
  let dictionary;
  try {
    dictionary = (yield call(axios.get, 'dictionary')).data;
  } catch (err) {
    dictionary = Dictionary;
  }
  yield put(GameActions.CREATORS.setWord(sample(dictionary)));
}

const watchers = [
  takeLatest(GameActions.TYPES.START_GAME, timer),
  takeEvery(GameActions.TYPES.UPDATE_REMAINING_TIME, timeout),
  takeEvery(GameActions.TYPES.GUESS, guess),
  takeEvery(GameActions.TYPES.MISS, checkForLoss),
  takeEvery(GameActions.TYPES.EXPOSE, checkForWin),
  takeEvery(GameActions.TYPES.START_GAME, startGame)
];

export default watchers;