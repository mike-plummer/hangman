import * as React from 'react';
import { HM } from '../types';

interface GameControlProps {
  onClick: () => void;
  status?: HM.GameStatus;
}

export const GameControl: React.SFC<GameControlProps> = ({ onClick, status }) => (
  <button
    onClick={onClick}
    disabled={status === HM.GameStatus.IN_PROGRESS}
    data-cy="start"
  >
    <strong>START</strong>
  </button>
);