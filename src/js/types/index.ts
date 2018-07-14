import * as _State from './state';

export namespace HM {
  export import State = _State;

  export enum GameStatus {
    WIN, LOSS, IN_PROGRESS
  }

  export type Letter = 'A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z';
}