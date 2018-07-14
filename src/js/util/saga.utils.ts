import { Pattern, SagaIterator } from 'redux-saga';
import { Action } from 'redux';
import { fork, ForkEffect } from 'redux-saga/effects';

export type Saga = (action: Action) => SagaIterator;
export type SagaEffect = (pattern: Pattern, worker: Saga) => ForkEffect;

export interface SagaConfig {
  saga: Saga;
  effect: SagaEffect;
}

export interface WatcherConfig {
  [actionType: string]: SagaConfig;
}

export const createWatchers = (watcherConfig: WatcherConfig): ForkEffect[] =>
  Object.keys(watcherConfig).reduce((acc: ForkEffect[], actionType: string) => {
    const { saga, effect } = watcherConfig[actionType];

    function* watcher(): IterableIterator<ForkEffect> {
      yield effect(actionType, saga);
    }

    acc.push(fork(watcher));
    return acc;
  }, []);