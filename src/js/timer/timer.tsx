import * as React from 'react';
import { floor, padStart } from 'lodash';
import './timer.css';

interface TimerProps {
  timeRemaining: number;
}

export const Timer: React.SFC<TimerProps> = ({ timeRemaining }) => {
  const minutes = padStart(floor(timeRemaining / 60).toFixed(0), 2, '0');
  const seconds = padStart((timeRemaining % 60).toFixed(0), 2, '0');
  return (
    <h1 data-cy="timer" className="Timer">
      {minutes}:{seconds}
    </h1>
  );
};