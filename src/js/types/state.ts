import { HM } from './index';

export interface State {
  game: Game
}

export interface Game {
  timeRemaining: number;
  gameStatus?: HM.GameStatus;
  guesses: HM.Letter[];
  exposed: HM.Letter[];
  word: string;
  lives: number;
}
