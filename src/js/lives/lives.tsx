import * as React from 'react';
import './lives.css';

interface LivesProps {
  lives: number
}

export const Lives: React.SFC<LivesProps> = ({ lives }) => (
  <p className="Lives" data-cy="lives">{lives}</p>
);
