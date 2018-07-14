import { HM } from './types';
import { includes } from 'lodash';

export function isMatch(letter: HM.Letter, word: string) {
  return new RegExp(letter).test(word)
}

export const buildExposedArray = (word: string, guesses: HM.Letter[]): HM.Letter[] => {
  return [...word].reduce((exposed, letter) => {
    const value = includes(guesses, letter) ? letter : undefined;
    exposed.push(value as HM.Letter);
    return exposed;
  }, [] as HM.Letter[]);
};