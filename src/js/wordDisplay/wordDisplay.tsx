import * as React from 'react';
import { HM } from '../types';
import './wordDisplay.css';

interface WordDisplayProps {
  exposed: HM.Letter[];
}

export const WordDisplay: React.SFC<WordDisplayProps> = ({ exposed }) =>
  <p className="WordDisplay">{exposed.map(letter => letter || '_')}</p>;
