import { flatten } from 'lodash';
import Game from '../game/store/game.sagas';

export default function* root() {
  yield flatten([
    Game // Must be last
  ]);
}