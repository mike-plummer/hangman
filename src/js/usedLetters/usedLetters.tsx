import * as React from 'react';
import { HM } from '../types';
import './usedLetters.css';

interface UsedLettersProps {
  letters: HM.Letter[];
}


export const UsedLetters: React.SFC<UsedLettersProps> = ({ letters }) =>
  <p className="UsedLetters" data-cy="guesses">{letters.join(' ')}</p>;
