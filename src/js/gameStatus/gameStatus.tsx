import * as React from 'react';
import { HM } from '../types';

interface GameStatusProps {
  status?: HM.GameStatus;
}

export const GameStatus: React.SFC<GameStatusProps> = ({ status }) => {
  if (status !== HM.GameStatus.LOSS && status !== HM.GameStatus.WIN) {
    return null;
  }
  return (
    <h1 data-cy="status">
      {status === HM.GameStatus.LOSS ? 'Boo, you lost!' : 'Yay, you won!'}
    </h1>
  );
};