import * as React from 'react';
import { HM } from '../types';
import * as cx from 'classnames';
import './gameStatus.css';

interface GameStatusProps {
  status?: HM.GameStatus;
}

export const GameStatus: React.SFC<GameStatusProps> = ({ status }) => {
  if (status !== HM.GameStatus.LOSS && status !== HM.GameStatus.WIN) {
    return null;
  }
  const classes = cx('status', {
    'win': status === HM.GameStatus.WIN,
    'loss': status === HM.GameStatus.LOSS
  });

  return (
    <h1 className={classes} data-cy="status">
      {status === HM.GameStatus.LOSS ? 'Boo, you lost!' : 'Yay, you won!'}
    </h1>
  );
};